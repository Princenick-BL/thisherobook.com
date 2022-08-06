import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../../constants'

import Carousel from 'react-material-ui-carousel'


export default function Example(props){

  const [size,setSize] = useState({})

  return (

    <Carousel 
      className={styles.container} 
      animation="slide"
    > 
      {categories.map((res,index)=>{
        
        return (

          <div  key={index}>
            <Link href={`/article/category/${res.name}`}>
              <a className={styles.box}>

                <h3 className={styles.topic}>Topic</h3>
                <div className={styles.img} >
                  <Image
                    src={`/img/${res?.img}`}
                    width={size.width || res.width}
                    height={size.height ||res?.height}
                    onLoad={({ target }) => {
                        const { naturalWidth, naturalHeight } = target ;
                        setSize({
                            width:naturalWidth,
                            height:naturalHeight
                        })
                    }}
                    layout="responsive"
                    style={{overflow:"hidden"}}
                  />
                </div>
                <div className={styles.info}>
                  <h1 className={styles.cat}>
                    {res?.name?.toUpperCase()}
                  </h1>
                  <p>
                    {res?.description}
                  </p>
                    <div className={styles.link}>
                      {"Découvrir -->"}
                    </div>
                </div>
                </a>
            </Link>
          </div>

        )
      })}
    </Carousel>
  )
}
