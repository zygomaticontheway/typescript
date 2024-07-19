// import StarWarsGallery from '../starWarsGallery/StarWarsGallery';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css'


function Layout(){

    return(
        <div className={styles.page}>
            <header className={styles.header}>
                header
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer className={styles.footer}>
                footer
            </footer >
        </div>
    )
}

export default Layout;