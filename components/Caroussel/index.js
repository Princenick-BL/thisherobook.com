import React from 'react'
import styles from './index.module.scss'
export default function Caroussel() {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <div className={styles.image + " " + styles.imageOne}>
                    Article 1
                </div>
                <div className={styles.image + " " + styles.imageTwo}>
                    Article 2
                </div>
                <div className={styles.image + " " + styles.imageThree}>
                    Article 3
                </div>
            </div>
        </div>

    )
}
