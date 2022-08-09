import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Pagination({current,url,hasNext}) {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            {(current >= 2) && (
                <Link  href={`${url}?page=${current-1}`}>
                    <a>{"< Prev"}</a>
                </Link>
            )}
            <div className={styles.current}>{`Page ${current}`}</div>
            {hasNext && (
                <Link  href={`${url}?page=${current+1}`}>
                    <a>{"Next>"}</a>
                </Link>
            )}
        </div>
    </div>
  )
}
