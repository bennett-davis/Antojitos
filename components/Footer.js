import styles from '../styles/footer.module.scss' 

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                Antojitos izcalli
                <br/>
                623 Hargrove RD E, Tuscaloosa AL, 35401
            </div>
            <div className={styles.info}>
                (205) 331-4226
            </div>
        </div>
    )
}