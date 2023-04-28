import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {

const router = useRouter();

return (

  <div className={styles.navbar}>
    <Link href={"/"}><h1 className={router.pathname === '/'  ? styles.navbarActive : ''} >Home</h1></Link>
      <Link href={"/catering"}><h1 className={router.pathname === '/catering'  ? styles.navbarActive : ''} >Catering</h1></Link>
      <Link href={"/menu"}>
        <h1 className={router.pathname === '/menu'  ? styles.navbarActive : ''} >View Menu</h1>
      </Link>
      <a target="_blank" href="https://www.crimson2go.com/r/927/restaurants/delivery/Mexican/Antojitos-Izcalli-tuscaloosa">
        <h1 >Crimson2Go</h1>
      </a>
      <a target="_blank" href="https://www.doordash.com/store/antojitos-izcalli-tuscaloosa-633289/?pickup=true&utm_campaign=gpa">
        <h1 >DoorDash</h1>
      </a>
  </div>
          
)
}