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
    },[])

    return (
        <div className={styles.list}>
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
            
        </div>
    )
}