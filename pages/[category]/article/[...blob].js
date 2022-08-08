import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import { ArticleHeader } from '../../../components/Header'
import Menu from '../../../components/Menu'
import BlogHead from '../../../components/BlogHead'
import { getSection } from '../../../utils/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../../constants'

export const config = { amp: true };

export default function Article({location,article}) {   

    return (
        <Fragment>
            
            <BlogHead
                title = {article?.title}
                poster={article?.poster}
                description={article?.description}
                publishedAt={article?.updatedAt}
                location = {location}
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
    
    const { req, query, res, asPath, pathname } = context;
    const {blob}  = query
    const articleId = blob[0]


    if (req) {
      var host = req.headers.referer // will give you localhost:3000
    }

    const result = await axios.get(`${endpoint.API_ENDPOINT}/article/${articleId}`)

    if(result?.data?.success){
        return { 
            props: {
                location : host || "",
                article : result.data?.data
            } 
        }
    }
    // Pass data to the page via props

    return { 
        props: {
            location : host || "",
        } 
    }
  }