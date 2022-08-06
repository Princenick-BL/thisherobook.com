import React from 'react'
import styles from './index.module.scss'

export default function StoryPreview({url,img,title,logo}) {
  return (
      <a target={"_blank"} rel="noreferrer" href={url}>
        <div className={styles.storyPreview} style={{backgroundImage:`url(${img})`}}>
            <div className={styles.title}>{title}</div>
            <div className={styles.logo} style={{backgroundImage:`url(${logo})`}}></div>
        </div>
      </a>
  )
}
