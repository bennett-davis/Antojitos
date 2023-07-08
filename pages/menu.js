import styles from '../styles/menu.module.scss'
import Image from 'next/image'

export default function Menu () {
    return (
        <div className={styles.main}>
        <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu1lr.jpg"}
                    fill="true"
                    alt="First page of Antojitos Izcalli menu with logo and address."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu2lr.jpg"}
                    fill="true"
                    alt="Second page of Antojitos Izcalli menu with Especialidades de la casa, Caldos, Plato de huevo, Daily Specials."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu3lr.jpg"}
                    fill="true"
                    alt="Third page of Antojitos Izcalli menu with different menu items."
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu4lr.jpg"}
                    fill="true"
                    alt="Fourth page of Antojitos Izcalli menu with Kids, Extra, Dessert, and Drink options."
                />
            </div>
            
        </div>
    )
}