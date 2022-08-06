import React from 'react'
import styles from './index.module.scss'
import { categories } from '../../constants'
import Link from 'next/link'

export default function TopicCluster() {
  return (
    <div className={styles.clusters}>
        {categories.map((res,index)=>{
        
            return (
                <Link  key={index} href={`/${res.name.toLowerCase()}`}>
                    <a >
                        <div className={styles.cluster}>
                            {res?.name?.toUpperCase()}
                        </div>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}
