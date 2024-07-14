import HeroCard from "./HeroCard";
import { forceUsers } from "./data";
import styles from "./starWarsGallery.module.css"


function StarWarsGallery() {
    return(
        <div className="lesson-container">
            <div className={styles.forceUsersGrid}>
            {forceUsers.map((hero, index) => (
                <HeroCard name={hero.name} age={hero.age} lightsaberColors={hero.lightsaberColors} image={hero.image} isDark={hero.isDark} key={index}/>
            ))}    
            </div>
        </div>
    )
}

export default StarWarsGallery;