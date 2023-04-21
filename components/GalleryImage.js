import styles from '../styles/Home.module.scss'
import Image from 'next/image'
 
export default function GalleryImage(image){
    return (
        
        <div className={styles.galleryImageWrapper}>
             
                <Image 
                    src={image.imgSrc}
                    alt={image.alt}
                    fill={true}
                />
         
          
        </div>
       
    )
  }