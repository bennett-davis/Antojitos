import styles from '../styles/menu.module.scss'
import Image from 'next/image'

export default function Menu () {
    return (
        <div className={styles.main}>
        <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu1.jpg"}
                    fill="true"
                    quality={20}
                    alt="First page of Antojitos Izcalli menu with logo and address."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu2.jpg"}
                    fill="true"
                    quality={20}
                    alt="Second page of Antojitos Izcalli menu with Especialidades de la casa, Caldos, Plato de huevo, Daily Specials."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu3.jpg"}
                    fill="true"
                    quality={20}
                    alt="Third page of Antojitos Izcalli menu with different menu items."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu4.jpg"}
                    fill="true"
                    quality={20}
                    alt="Fourth page of Antojitos Izcalli menu with Kids, Extra, Dessert, and Drink options."
                />
            </div>
            
        </div>
    )
}