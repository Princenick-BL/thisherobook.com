import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

export default function ArticleHeader(){
    return(
        <header
            className="webpage-articleHeader ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4"
        >
            <div
                role="button"
                aria-label="open sidebar"
                on="tap:header-sidebar.toggle"
                tabIndex="0"
                className="webpage-navMenu ampstart-navbar-trigger pr2"
            >
                ☰
            </div>
            <h1 className="webpage-logo">Discoverai</h1>
            
        </header>

    )
}