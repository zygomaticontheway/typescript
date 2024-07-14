import StarWarsGallery from '../starWarsGallery/StarWarsGallery';
import styles from './layout.module.css'


function Layout(){

    return(
        <div className={styles.page}>
            <header className={styles.header}>
                header
            </header>
            <main className={styles.main}>
                <StarWarsGallery/>
            </main>
            <footer className={styles.footer}>
                footer
            </footer >
        </div>
    )
}

export default Layout;