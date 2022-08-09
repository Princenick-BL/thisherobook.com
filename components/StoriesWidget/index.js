import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'

export default function StoriesWidget() {

    const [stories,setStories] =  useState([])
    useEffect(()=>{
      (async ()=>{
        const res = await getTopStories()
        setStories(res.data)
      })();
    },['init'])

    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Stories</h1>
          <div className={styles.list}>
              {stories ? stories?.map((story,index)=>{
                return(
                    <a key={index} href={`/web-story/${story?.category?.toLowerCase()}/${story?._id}/${story?.slug}`} target={"_blank"} rel="noreferrer">
                      <div  className={styles.outerCorner}>
                          <div 
                              className={styles.innerConner}
                              style={{backgroundImage:`url(${story?.poster})`}}
                          ></div>
                      </div>

                    </a>
                  
                )
              }):(
                <Loading/>
              )}
              {stories ? stories?.map((story,index)=>{
                return(
                    <a key={index} href={`/web-story/${story?._id}/${story?.slug}`} target={"_blank"} rel="noreferrer">
                      <div  className={styles.outerCorner}>
                          <div 
                              className={styles.innerConner}
                              style={{backgroundImage:`url(${story?.poster})`}}
                          ></div>
                      </div>

                    </a>
                  
                )
              }):(
                <Loading/>
              )}
              {stories ? stories?.map((story,index)=>{
                return(
                    <a key={index} href={`/web-story/${story?._id}/${story?.slug}`} target={"_blank"} rel="noreferrer">
                      <div  className={styles.outerCorner}>
                          <div 
                              className={styles.innerConner}
                              style={{backgroundImage:`url(${story?.poster})`}}
                          ></div>
                      </div>

                    </a>
                  
                )
              }):(
                <Loading/>
              )}
              {stories ? stories?.map((story,index)=>{
                return(
                    <a key={index} href={`/web-story/${story?._id}/${story?.slug}`} target={"_blank"} rel="noreferrer">
                      <div  className={styles.outerCorner}>
                          <div 
                              className={styles.innerConner}
                              style={{backgroundImage:`url(${story?.poster})`}}
                          ></div>
                      </div>

                    </a>
                  
                )
              }):(
                <Loading/>
              )}
              {stories ? (
                    <a href={`/web-story?page=2`} >
                      <div  className={styles.outerCorner}>
                        <div  className={styles.innerConner + " " + styles.moreStories}>
                          Click for more stories
                        </div>
                      </div>


                    </a>
                  
                )
              :(
                <Loading/>
              )}
              
          </div>
        </div>
      </div>
    )
}