import '../public/styles/global.scss'
import Header from '../components/header'

export default function App({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
    </>
}