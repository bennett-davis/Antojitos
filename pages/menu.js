import styles from '../styles/menu.module.scss'
import Image from 'next/image'

export default function Menu () {
    return (
        <div className={styles.main}>
        <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu1.jpg"}
                    fill="true"
                    alt="todo"
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu2.jpg"}
                    fill="true"
                    alt="todo"
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu3.jpg"}
                    fill="true"
                    alt="todo"
                />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src={"/assets/menu4.jpg"}
                    fill="true"
                    alt="todo"
                />
            </div>
            
        </div>
    )
}