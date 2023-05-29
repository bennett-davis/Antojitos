import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import ReviewBox from '../components/ReivewBox'
import React from 'react'
import GalleryImage from '../components/GalleryImage'
 

const reviewList  = [
  {
      name: "Bridget H",
      review: "Hands down the very best AUTHENTIC Mexican food in Tuscaloosa!! Food is full of flavor, good portions and amazing price point! This is my go to spot every time I’m craving some street tacos. The Esquites and Strawberry Con Crema are also fantastic!! I can’t rave enough about this restaurant!"
  },
  {
      name: "Gary H",
      review: "Wish I had caught the owners name when we visited last week. They were swamped with folks, and he took the time to come to our table to take our order. Even as busy as they were, he was patient, warm and extremely grateful to help us. ...",
  },
  {
      name: "Tanner R.",
      review: "Antojitos has become a staple in Tuscaloosa for authentic Mexican food. The whole crew is always welcoming and friendly even when they are EXTREMELY busy!"
  }
]

const galleryList = [
  {
    imgSrc: "/assets/Carne_Asada.png",
    alt: "Carne Asada"
  },
  {
    imgSrc: "/assets/Burritos.png",
    alt: "Burritos"
  },
  {
    imgSrc: "/assets/Elote.png",
    alt: "Elote"
  },
  {
    imgSrc: "/assets/Fresas.png",
    alt: "Fresas"
  },
  {
    imgSrc: "/assets/Gorditas.png",
    alt: "Gorditas"
  },
  {
    imgSrc: "/assets/Huaraches.png",
    alt: "Huaraches"
  },
  {
    imgSrc: "/assets/Huevos.png",
    alt: "Huevos"
  },
  {
    imgSrc: "/assets/Menudo.png",
    alt: "Menudo"
  },
  {
    imgSrc: "/assets/Pambaso.png",
    alt: "Pambaso"
  },
  {
    imgSrc: "/assets/Pechuga_a_la_plancha.png",
    alt: "Pechuga A La Plancha"
  },
  {
    imgSrc: "/assets/Sopes.png",
    alt: "Sopes"
  },
  {
    imgSrc: "/assets/Tacos.png",
    alt: "Tacos"
  },
  {
    imgSrc: "/assets/Torta_Cubana.png",
    alt: "Torta Cubana"
  },

]


export default function Home() {
  return (
    <div >
      <Head>
        <title>Antojitos Izcalli</title>
        <meta name="description" content="Antojitos Izcalli" />
         
      </Head>

      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.title}><h1>Antojitos Izcalli</h1></div>
              <h2>100% Authentic Mexican Cusisine</h2>
              <h2>(205) 331-4226</h2>
          </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/building1.jpg"
                fill="true"
                alt="todo"
              />
             </div>
        
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h2>623 Hargrove RD E, Tuscalooa AL, 35401</h2>
              <div className={styles.boxImageWrapper}>
                <iframe className={styles.map} loading="lazy" allowFullScreen 
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-x8UAs2piIgR_BEpALX8XU4&key=${process.env.GOOGLE_MAPS_API_KEY}`}>
                </iframe>
              </div>
            </div>
            <div className={styles.box}>
              <h2>Recent Reviews</h2>
              <div className={styles.boxImageWrapper}>
                <div className={styles.reviews}>
                  {reviewList.map((review) => ReviewBox(review))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <a target = "_blank" href="https://www.facebook.com/profile.php?id=100054956424217">
              <Image className={styles.mediaImage}
                src={"/assets/fb.png"}
                width={100}
                height={100}
                alt="todo"
              />
            </a>
            <a target = "_blank" href="https://instagram.com/antojitosizcalli?igshid=YmMyMTA2M2Y=">
              <Image className={styles.mediaImage}
                src={"/assets/insta.jpg"}
                width={100}
                height={100}
                alt="todo"
              />
            </a>
          </div>
          <div className={styles.gallery}>
              {galleryList.map((image) => GalleryImage(image))}
          </div>
        </div>
      </main>
    </div>
  )
}


