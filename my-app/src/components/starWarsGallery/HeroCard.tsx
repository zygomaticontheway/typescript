import styles from './starWarsGallery.module.css'
interface IHeroCardProps {
    name: string,
    age?: number,
    isDark: boolean,
    lightsaberColors?: string[],
    image?: string 
}

function HeroCard({name='hero name', age, isDark, lightsaberColors, image}:IHeroCardProps) {
    return(
                <div className={isDark ? styles.dark : styles.light}>
                    <h4>{name}</h4>
                    <p>Age: {age}</p>
                    <div>
                        <img width ={200} src={image} alt={name} /> 
                    </div>
                    <p>Lightsaber colors:</p>
                        <div className={styles.lightsaberColors}>
                            {lightsaberColors && lightsaberColors.map((color, index) => (
                                // {/* <span>{color} </span> */}
                                <div key={index} className={styles.lightsaberColorsItem}
                                    style={{backgroundColor: color}} 
                                ></div>
                            ))}
                        </div>
                </div>
    )
}

export default HeroCard;