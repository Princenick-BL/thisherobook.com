import React ,{useState } from 'react'
import styles from './index.module.scss'
import { useGlobalContext } from '../../../contexts/global.context';
import { config } from '../../../constants';
import axios from 'axios'
import {useRouter} from 'next/router'
import {notification} from 'antd'
import {GlobalProvider} from '../../../contexts/global.context'
import {ArticleProvider} from '../../../contexts/article.context'
import Logo from '../../../components/Logo'

function Login() {

    const [showPass,setShowPass] = useState(false);
    const [loginId,setLoginId] = useState(false)
    const [loginPwd,setLoginPwd] = useState(false)
    const {state,dispatch} = useGlobalContext()
    const Router = useRouter();
    const [error,setError] = useState(false)

    const {redirect} = Router.query

    
    const login = async (e) =>{
        e.preventDefault()
        const res = await axios.post(`${config.API_ENDPOINT}/auth/login`,{
            email : loginId,
            password : loginPwd
        })
        if(!res.data?.error){
            window.localStorage.setItem("access_token", res?.data?.token);
            dispatch({ //onClose(false)
                // setNotification({
                //     text : res.data.message,
                //     type:"success"
                // })
                
                type:"LOGIN",
                payload:res?.data?.token,
            })
            notification.success({
                message:res.data.message,
            })
            Router.push(redirect)
           
        }
        if(res.data?.error){
            setError(res.data?.message)
            // setNotification({
            //     text : res.data?.message,
            //     type:"error"
            // })
        }
        
    }

   

    return (
       
        <div className={styles.login}>
            <div className={styles.content}>

                <h1>Admin</h1>

                {error && (
                    <div className={styles.notification}>
                        <div>{error}</div>
                    </div>
                )}

                <form onSubmit={(e)=>{login(e)}}>
                
                        <input className={styles.inputText} type={"text"} placeholder='Identifiant' onChange={(e)=>{setLoginId(e.target.value)}}/>
                        <div className={styles.inputPassword}>
                            <input className={styles.input} type={showPass? "text": "password"} placeholder='Mot de pass' onChange={(e)=>{setLoginPwd(e.target.value)}}/>
                            {showPass ?(
                                <i onClick={(e)=>{setShowPass(false)}} className="fa fa-eye-slash" style={{fontSize:"24px",cursor:"pointer"}}></i>
                            ):(
                                <i onClick={(e)=>{setShowPass(true)}} className="fa fa-eye" style={{fontSize:"24px",cursor:"pointer"}}></i>
                            )}

                        </div>
                        <br></br>
                        <input type={"submit"} className={styles.submitBtn} />
                    
                </form>
            </div>
          
        </div>
    )
}


export function LoginV2() {

    const [active,setActice] = useState(false)
    const [showPass,setShowPass] = useState(false);
    const [loginId,setLoginId] = useState(false)
    const [loginPwd,setLoginPwd] = useState(false)
    const {state,dispatch} = useGlobalContext()
    const Router = useRouter();
    const [error,setError] = useState(false)

    /*SignUp*/
    const [signup_email,setSignup_Email] = useState("")
    const [signup_password,setSignup_Password] = useState("")
    const [signup_confirmPassword,setSignup_ConfirmPassword] = useState("")
    const [signup_username,setSignup_Username] = useState("")
    const [signup_agree,setSignup_Agree] = useState("")

    const {redirect} = Router.query

    
    const login = async (e) =>{
        e.preventDefault()
        const res = await axios.post(`${config.API_ENDPOINT}/auth/login`,{
            email : loginId,
            password : loginPwd
        })
        if(!res.data?.error){
            window.localStorage.setItem("access_token", res?.data?.token);
            dispatch({ //onClose(false)
                // setNotification({
                //     text : res.data.message,
                //     type:"success"
                // })
                
                type:"LOGIN",
                payload:res?.data?.token,
            })
            notification.success({
                message:res.data.message,
            })
            Router.push(redirect)
           
        }
        if(res.data?.error){
            setError(res.data?.message)
            // setNotification({
            //     text : res.data?.message,
            //     type:"error"
            // })
        }
        
    }

    const register = async (e) =>{
        e.preventDefault()
        const res = await axios.post(`${config.API_ENDPOINT}/auth/register`,{
            email : signup_email,
            password : signup_password
        })
        if(!res.data?.error){
            window.localStorage.setItem("access_token", res?.data?.token);
            dispatch({ //onClose(false)
                // setNotification({
                //     text : res.data.message,
                //     type:"success"
                // })
                
                type:"LOGIN",
                payload:res?.data?.token,
            })
            notification.success({
                message:res.data.message,
            })
            Router.push(redirect)
           
        }
        if(res.data?.error){
            setError(res.data?.message)
            // setNotification({
            //     text : res.data?.message,
            //     type:"error"
            // })
        }
        
    }

    const toggleForm = (e)=>{
        e.preventDefault()
        setActice(!active)
    }

    return (
        <div className={styles.loginV2}>
            <section>
                <div className={styles.container +" "+ (active ? styles.active : "")}>
                <div className={styles.user+" "+styles.signinBx}>
                    <div className={styles.imgBx}>
                        <Logo style={{maxWidth: "max-content",fontSize:"2rem",color:"#fff"}}/>
                        {/* <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /> */}
                    </div>
                    <div className={styles.formBx}>
                    <form action="" onSubmit={(e)=>{login(e)}}>
                        <h2>Sign In</h2>
                        <input type={"text"} name="email" placeholder='Email' onChange={(e)=>{setLoginId(e.target.value)}} />
                        <input type="password" name="password" placeholder="Password"  onChange={(e)=>{setLoginPwd(e.target.value)}}/>
                        <input type="submit" name="" value="Login" />
                        <p className={styles.signup}>
                        Don't have an account ?&nbsp;
                        <a rel="noreferrer" href="#" onClick={(e)=>{toggleForm(e)}}>Sign Up.</a>
                        </p>
                    </form>
                    </div>
                </div>
                <div className={styles.user+" "+styles.signupBx}>
                    <div className={styles.formBx}>
                    <form action="" onSubmit={(e)=>{register(e)}}>
                        <h2>Create an account</h2>
                        <input type="text" name="" placeholder="Username" onChange={(e)=>{setSignup_Username(e.target.value)}}/>
                        <input type="email" name="" placeholder="Email Address" onChange={(e)=>{setSignup_Email(e.target.value)}} />
                        <input type="password" name="" placeholder="Create Password" onChange={(e)=>{setSignup_Password(e.target.value)}}/>
                        <input type="password" name="" placeholder="Confirm Password" onChange={(e)=>{setSignup_ConfirmPassword(e.target.value)}}/>
                        <input type="checkbox" name="" placeholder="Confirm Password" onChange={(e)=>{setSignup_Agree(e.target.value)}}/>
                        <div>I agre with this <a href='#'>terms and conditions</a></div>
                        <input type="submit" name="" value="Sign Up" />
                        <p className={styles.signup}>
                        Already have an account ?&nbsp;
                        <a href="#" rel='noreferrer' onClick={(e)=>{toggleForm(e)}}>Sign in.</a>
                        </p>
                    </form>
                    </div>
                    <div className={styles.imgBx}>
                        <Logo style={{maxWidth: "max-content",fontSize:"2rem",color:"#fff"}}/>
                        {/* <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /> */}
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}


export default function LoginPage() {
  return (
    <GlobalProvider>
        <ArticleProvider>
            {/* <Login/> */}
            <LoginV2/>
        </ArticleProvider>
    </GlobalProvider>
  )
}
