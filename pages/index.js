import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
 

export default function Home() {
  return (
    <div >
      <Head>
        <title>Antojitos Izcalli</title>
        <meta name="description" content="Antojitos Izcalli" />
        <style> @import url('https://fonts.googleapis.com/css2?family=Galindo&display=swap');</style>
        {/* FIXME <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.navbar}>
            <Link href={"/catering"}><h1>Catering</h1></Link>
            <Link href={"/menu"}>
              <h1>View Menu</h1>
            </Link>
            <a target="_blank" href="https://www.crimson2go.com/r/927/restaurants/delivery/Mexican/Antojitos-Izcalli-tuscaloosa">
              <h1>Crimson2Go</h1>
            </a>
            <a target="_blank" href="https://www.doordash.com/store/antojitos-izcalli-tuscaloosa-633289/?pickup=true&utm_campaign=gpa">
              <h1>DoorDash</h1>
            </a>
          </div>
          <div className={styles.title}><h1>Antojitos Izcalli</h1></div>
          <h2>100% authentic Mexican Cusisine</h2>
          <h2>(205) 331-4226</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/building1.jpg"
              fill="true"
            />
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h2>623 Hargrove RD E, Tuscalooa AL, 35401</h2>
              <div className={styles.boxImageWrapper}>
             {/* <Map/> */}
              <iframe className={styles.map} loading="lazy" allowFullScreen 
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-x8UAs2piIgR_BEpALX8XU4&key=${process.env.GOOGLE_MAPS_API_KEY}`}>
              </iframe>
              </div>
              
            </div>
            <div className={styles.box}>
              <h2>Recent Reviews</h2>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <a target = "_blank" href="https://www.facebook.com/profile.php?id=100054956424217">
              <Image className={styles.mediaImage}
                src={"/assets/fb.png"}
                width={100}
                height={100}
              />
            </a>
            <a target = "_blank" href="https://instagram.com/antojitosizcalli?igshid=YmMyMTA2M2Y=">
              <Image className={styles.mediaImage}
                src={"/assets/insta.jpg"}
                width={100}
                height={100}
              />
            </a>
            
          </div>
          
        </div>
      </main>

      <footer >
         {/* make footer component */}
      </footer>
    </div>
  )
}
