import React, { Component } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { categories } from '../../constants'
import ReadMoreReact from 'read-more-react';

export default class ArticlePreview extends Component {
  render() {
    return (
      <div className={styles.item}>
        <a href={`/${this.props.article?.category?.toLowerCase()}/article/${this.props.article?._id}/${this.props.article?.slug}`} className={styles.card}>
          <article>
            <div className={styles.head}>
              <div className={styles.icon}>

              </div>
              <div>
                <span>{`${this.props.article?.category}`}</span>
                <h4>{`${this.props.article?.title}`}</h4>
              </div>
            </div>
            
            <p>{`${this.props.article?.description}`}</p>

          </article>
          <div className={styles.thumb} style={{backgroundImage: `url(${this.props.article?.poster})`}}></div>
        </a>
      </div>
    )
  }
}

export class ArticlePreviewSmall extends Component {
  render() {
    return (
      <div className={(this.props.type == 1) ? styles.item1 : styles.item2}>
        <a href={`/${this.props.article.category.toLowerCase()}/article/${this.props.article?._id}/${this.props.article?.slug}`} className={styles.card}>
          <article>
            <div className={styles.head}>
              <div className={styles.icon}>

              </div>
              <div>
                <span>{`${this.props.article?.category}`}</span>
                <h4>{`${this.props.article?.title}`}</h4>
              </div>
            </div>
            
            <p>{`${this.props.article?.description}`}</p>

          </article>
          <div className={styles.thumb} style={{backgroundImage: `url(${this.props.article?.poster})`}}></div>
        </a>
      </div>
    )
  }
}
