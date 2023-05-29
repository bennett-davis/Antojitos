import styles from '../styles/Home.module.scss'

export default function ReviewBox(review) {
    return (
        <div>
            <div className={styles.reviewTitle}>
            <h4>{review.name}</h4>
            <div className={styles.stars}>
                <span class="material-symbols-filled"> star</span>
                <span class="material-symbols-outlined"> star</span>
                <span class="material-symbols-outlined"> star</span>
                <span class="material-symbols-outlined"> star</span>
                <span class="material-symbols-outlined"> star</span>
            </div>
            </div>
            <p>{review.review}</p>
        </div>
    )
}
