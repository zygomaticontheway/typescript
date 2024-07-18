import styles from './starWarsGallery.module.css'

interface IHeroCardProps { /* interface можно и импортировать, но можно и так будет понятнее дублировать, ибо здесь можно что-то дописать*/
    name: string,
    age?: number,
    isDark?: boolean,
    lightsaberColors?: string[],
    image?: string,
    hasMagic?: boolean
}

function HeroCard({name='hero name', age, isDark, lightsaberColors, image}:IHeroCardProps) {
    return(
                <div className={`${isDark ? styles.dark : styles.light} ${styles.card}`}>
                    <h4>{name}</h4>
                    <p>Age: {age}</p>
                    <div>
                        <img width ={200} src={image} alt={name} /> 
                    </div>
                    <p>Lightsaber colors:</p>
                        <div className={styles.lightsaberColors}>
                            {/* {lightsaberColors && lightsaberColors.map((color, index) => ( */}
                            {lightsaberColors?.map((color, index) => ( /*знак вопроса ? перед обращением к свойству объекта проверяет наличие этого свойства и не вызывает ошибку если его нет */
                                /*знак вопроса ? перед обращением к свойству объекта проверяет наличие этого свойства и не вызывает ошибку если его нет */
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