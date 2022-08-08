import React,{Fragment,useEffect,useState} from 'react'
import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import { ArticleHeader } from '../../../components/Header'
import Menu from '../../../components/Menu'
import { getSection } from '../../../utils/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../../constants'
//import RedisCache from '../../../seoOpt/cache'

export const config = { amp: true };
const BlogHead = dynamic(()=>import('../../../components/BlogHead'))

export default function Article({article,canonical}) {   

    return (
        <Fragment>
            
            <BlogHead
                title = {article?.title}
                poster={article?.poster}
                description={article?.description}
                publishedAt={article?.updatedAt}
                location = {canonical}
            />
            <Fragment>
               
                <ArticleHeader/>

                <Menu/>

                <main id="content" role="main">
                    <br></br>
                    <article className="recipe-article">
                        <header>
                            <span className="ampstart-subtitle block px3 pt2 mb2">{article?.category}</span>
                            <h1 className="mb2 px3 fsh1">{article?.title}</h1>
                            <address className="ampstart-byline clearfix mb1 px3 h5">
                                <time
                                    style={{overflow :"hidden",fontSize:"1rem"}}
                                    className="ampstart-byline-pubdate block bold mb2"
                                    dateTime="2016-12-13"
                                >{`Updated at : ${new Date(article?.updatedAt).toLocaleDateString()}`}</time>
                            </address>
                            <amp-img
                                src={article?.poster}
                                width="1280"
                                height="853"
                                layout="responsive"
                                alt="The final spritzer"
                                className="mb4 mx3 br5"
                            ></amp-img>
                        </header>
                        <div  className={styles.main}>

                            {article?.sections?.map((section,index)=>{
                                return getSection(section)
                            })}
                        </div>
                    
                    </article>
                </main>

                <footer className="ampstart-footer flex flex-column items-center px3">
                    <nav className="ampstart-footer-nav">
                        <ul className="list-reset flex flex-wrap mb3">
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">About</a>
                        </li>
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">Contact</a>
                        </li>
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">Terms</a>
                        </li>
                        </ul>
                    </nav>
                    <small> © Your Company, 2016 </small>
                </footer>
            </Fragment>
            
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    
    const {query,headers} = context;
    const {blob}  = query
    const articleId = blob[0]

    const fetcher = async ( )=>{
        const result = await axios.get(`${endpoint.API_ENDPOINT}/article/${articleId}`)
        return result.data?.data
    }


    const canonical =  context?.req?.url
    //const article = await RedisCache.fetch(`article-${articleId}`,fetcher,3600 * 24) || {}
    const article = await fetcher() || {}

    return { 
        props: {
            article : article,
            canonical : canonical || ""
        } 
    }
    
    
  }