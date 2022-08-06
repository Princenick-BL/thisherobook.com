import { useState, useEffect } from "react";
import Router from "next/router";
import styles from './index.module.scss'

const WaitingPage = props => {
  
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
        const handleStart = (url) => (url !== Router.asPath) && setIsLoading(true);
        const handleComplete = (url) => (url === Router.asPath) && setIsLoading(false);

        Router.events.on('routeChangeStart', handleStart)
        Router.events.on('routeChangeComplete', handleComplete)
        Router.events.on('routeChangeError', handleComplete)

        return () => {
            Router.events.off('routeChangeStart', handleStart)
            Router.events.off('routeChangeComplete', handleComplete)
            Router.events.off('routeChangeError', handleComplete)
        }
  }, [isLoading]);

  return (
      <>
        { isLoading ?
            <div className={styles.loading}>
                <div>
                    <svg  style={{
                        margin: "auto", 
                        background: `linear-gradient(
                            to right,
                            #462523 0,
                                #cb9b51 22%, 
                            #f6e27a 45%,
                            #f6f2c0 50%,
                            #f6e27a 55%,
                            #cb9b51 78%,
                            #462523 100%
                            );`, 
                        display: "block", shapeRendering: "auto"}} width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="var(--color-primary-light)" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                    <br></br>
                    <div className={styles.text}>Luxe Story Blog</div>
                </div>
            </div>
        : props.children }
      </>
  );
}

export default WaitingPage;

