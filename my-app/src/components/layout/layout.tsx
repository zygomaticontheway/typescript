// import StarWarsGallery from '../starWarsGallery/StarWarsGallery';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';


function Layout(){
    const location = useLocation()
    console.log(location.pathname);
    
    return(
        <div className={styles.page}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;