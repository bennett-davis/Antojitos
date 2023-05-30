import styles from '../styles/catering.module.scss'

export default function Catering (){
    return (
        <div className={styles.main}>
            <h1>Please Contact Us Directly For Catering</h1>
            <button onClick={SendEmail}>test</button>
        </div>
    )
}

async function SendEmail() {
    const res = await fetch("/api/email");
}