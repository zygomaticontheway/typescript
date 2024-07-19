
import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'
export default function Header() {
  
  const location = useLocation()
  
  return (
    <>
    <header className={styles.header}>
      <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}></Link>
      <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>🏡</Link>
      <Link className={location.pathname === '/star-wars-gallery' ? styles.active : ''} to={'/star-wars-gallery'}>star wars gallery</Link>
      <Link className={location.pathname === '/gender-form' ? styles.active : ''} to={'/gender-form'}>gender form</Link>
      <Link className={location.pathname === '/robot-form' ? styles.active : ''} to={'/robot-form'}>robot form</Link>
      <Link className={location.pathname === '/my-form' ? styles.active : ''} to={'/my-form'}>my form</Link>
      <Link className={location.pathname === '/feedback' ? styles.active : ''} to={'/feedback'}>feedback</Link>
      <Link className={location.pathname === '/counter' ? styles.active : ''} to={'/counter'}>counter</Link>
    </header>
    </>
  )
}