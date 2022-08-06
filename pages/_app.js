import 'antd/dist/antd.css'
import '../styles/globals.scss'
import '../styles/quill.css'
import WaitingPage from '../components/WaitingPage'
import {GlobalProvider} from '../GlobalContext'


function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <WaitingPage>
        <Component {...pageProps} />
      </WaitingPage>
    </GlobalProvider>
  )
}

export default MyApp