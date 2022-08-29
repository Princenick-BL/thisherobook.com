import React, { useState } from 'react';
import { Layout, Menu,Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingFilled
} from '@ant-design/icons';
import GoogleAnalyticsIcon from './icons/analytics';
import WebStory from './icons/webStory';
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../contexts/global.context';
import {GlobalProvider} from '../contexts/global.context'
import {ArticleProvider} from '../contexts/article.context'
import Logo from './icons/logo'
import { width } from '@mui/system';

const { Header, Sider, Content } = Layout;

const App = ({children}) => {

  
  const [collapsed, setCollapsed] = useState(true);
  const {state,dispatch} = useGlobalContext()

  console.log("User",state)

  const handlelogOut = () =>{
    dispatch({
      type:"LOGOUT"
    })
    window.location.reload()

  }


  const router = useRouter()
  const { admin } = router.query;

  const getCurrentMenu = () =>{
    switch (admin) {
      case "articles":
        return 2 
      case "web-stories":
        return 3
      case "analytics":
        return 4   
      default:
        return 2
    }
  }

  const redirect = (dest) =>{
    router.push(dest)
  }

  return (
    <Layout style={{height:"100vh"}}>
      <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
           key={1}
            theme="light"
            mode="inline"
            defaultSelectedKeys={['2']}
            defaultOpenKeys={['sub1']}
            selectedKeys={`'${getCurrentMenu()}'`}
            style={{height:"100%"}}
            items={[
              {
                key: 1,
                icon: <Logo /> ,
                label: 'ADMIN',
                onClick  : (e)=>redirect("/admin"),
                style : {marginTop:"20px",marginBottom:"20px"}


              },
                {
                  key: '2',
                  icon: <ReadOutlined style={{ fontSize: '20px'}}/> ,
                  label: 'Articles',
                  onClick  : (e)=>redirect("/admin/articles")

                },
                {
                  key: '3',
                  label: 'Web Stories',
                  icon: <WebStory style={{ fontSize: '20px'}}/>,
                  onClick  : (e)=>redirect("/admin/web-stories")
                },
                {
                  key: '4',
                  label: 'Analytics',
                  icon: <GoogleAnalyticsIcon/>,
                  onClick  : (e)=>redirect("/admin/analytics")

                },
                
            ]}
        />
        <div>
        <Menu
          key={2}
            theme="light"
            mode="inline"
            style={{position:"absolute",bottom:"0",width:"100%"}}
            items={[
                {
                  key: '99',
                  icon: <SettingFilled style={{ fontSize: '20px'}}/> ,
                  label: 'Settings',
                },
                {
                    key: '98',
                    icon: 
                    <Avatar 
                      style={{ 
                        verticalAlign: "middle",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        width : "25px",
                        height : "25px",
                        marginLeft : "-3px"
                      }} 
                      size="large" 
                      gap={0}
                    >
                      {"K"}
                    </Avatar> ,
                    label: 'User',
                    children: [
                        { 
                            key: 'user-sub-1',
                            label: 'User', 
                            icon : <UserOutlined />
                        },  
                        { 
                            key: 'user-sub-2',
                            label: 'Logout', 
                            icon : <LogoutOutlined />,
                            onClick  : (e)=>handlelogOut()
                        }
                    ],
    
                },
                
                {
                    key: '100',
                    icon: collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> ,
                    label: 'Collapse',
                    onClick  : (e)=>setCollapsed(!collapsed)
                },
            ]}
        />
       
        </div>
      </Sider>
      <Layout className="site-layout">
        
        <Content
          className={styles.content}
          style={{
            margin: '10px 10px',
            padding: 10,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};


function LayoutComponent({children}) {
  return (
    <GlobalProvider>
        <ArticleProvider>
            <App children={children}/>
        </ArticleProvider>
    </GlobalProvider>
  )
}

export default LayoutComponent;
