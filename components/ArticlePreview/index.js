// import React from 'react'
// import Image from 'next/image'
import styles from './index.module.scss'
// import {Card,Button} from 'react-bootstrap'

// export default function ArticlePreview({url,img,title,category,odd}) {

//   return (
//       <a className={styles.cardBox} target={"_blank"} rel="noreferrer" href={url}>
//         <Card style={{ width: '100%',marginTop:"1rem",marginBottom:"1rem" }}>
//           <Card.Img className={styles.img} variant="top" src={img} />
//           <Card.Body className={styles.body}>
//             <Card.Title>{category}</Card.Title>
//             <Card.Text>
//               {title}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </a>
//   )
// }

import React, { Component } from 'react'
import Image from 'next/image'
import { categories } from '../../constants'

export default class ArticlePreview extends Component {
  render() {
    return (
      <a className={styles.card} target={"_blank"} rel="noreferrer" href={this.props.url}>
        <div >
          <div>
            <Image
              width={700}
              height={700*9/16}
              src={this.props.img}
            />
          </div>
          <div className={styles.meta}>
            <div 
              className={styles.cat}
              // style={{background:`-webkit-linear-gradient(140deg, ${categories?.find(e=>{ return e?.name === this.props.category})?.color || "var(--color1)"} 20%, var(--color2) 70%, var(--color3) 100%)`}}
            >{this.props.category?.toUpperCase()}</div>
            <h1>
              {this.props.title}
            </h1>
            <div className={styles.foot}>
              <p>
                {this.props.description}
              </p>
              {/* <div 
                className={styles.cat}
                style={{background:`-webkit-linear-gradient(140deg, ${categories?.find(e=>{ return e?.name === this.props.category})?.color || "var(--color1)"} 20%, var(--color2) 70%, var(--color3) 100%)`}}
              >{this.props.category}</div> */}
              <div className={styles.date}>{ new Date(this.props.updatedAt).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}
