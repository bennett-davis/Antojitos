import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>  
        <style> @import url('https://fonts.googleapis.com/css2?family=Galindo&display=swap');</style>
        {/* FIXME <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />      
        
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </div>
    
    )
}

export default MyApp
