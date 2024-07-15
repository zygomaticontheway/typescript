
import { useEffect, useState } from "react";
import styles from './randomFox.module.css'
import MyButton from "../../components/myButton/MyButton";
import { error } from "console";

// !Задание
// Повторите хук useEffect() Создайте компонент для отображения данных 
// выведите случайную картинку из api https://randomfox.ca/ 
// код должен сработать один раз при монтировании компонента

function RandomFox () {

    interface IFoxData {
        image: string,
        link: string
    }

    useEffect(() => {
        fetchFox();
    }, [])

    const fetchFox = () => {
        fetch('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(data => setFox(data))
            .catch(error => console.error('Error fetching fox: ', error))
    }
    
    const [fox, setFox] = useState<IFoxData>({
        image: '',
        link: ''
    })
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(prev => prev + 1)
    }

    const leftOrRight = () => {
        const regex = /(\d+)/;
        const match = fox.link.match(regex);
        console.log(match);
        

        if (match) {
            const number = parseInt(match[1], 10);

            if (number % 2 === 0) {
                return(
                <div className={styles.foxContainer} >
                    <div className={styles.left}>{`${number} is even. Tricky fox is on the right. ---->`}</div>
                    <div className={styles.right}>
                        <img className={styles.img} src={fox.image} alt="tricky fox" />
                    </div>
                </div>
                )
            } else {
                return(
                <div className={styles.foxContainer}>
                    <div className={styles.left}>
                        <img className={styles.img} src={fox.image} alt="tricky fox" />
                    </div>
                    <div className={styles.right}>{`<---- ${number} is odd. Tricky fox is on the left.`}</div>
                    
                </div>
                )
                
            }
        } else {
            return(
                <div className={styles.foxContainer}>Tricky fox is missing</div>
            )
        }    
    }

    return(
        <div className="lesson-container">
            <h3>Задание</h3>
            <ul>
                <li>Повторите хук useEffect()</li>
                <li>Создайте компонент для отображения данных</li>
                <li>выведите случайную картинку из api https://randomfox.ca/</li>
                <li>код должен сработать один раз при монтировании компонента</li>
            </ul>
            <p> это висит для проверки 👇 условия задачи</p>
            <p>{count}</p>
            <MyButton onClick={handlePlus} name={'plus'}/>
            <h3>🦊 Бонус 🦊</h3>
            <ul>
                <li>В зависимости от четное или нечетное число в имени файла</li>
                <li>лиса будет слева или справа</li>
            </ul>
            {leftOrRight()}
            <MyButton type="button" onClick={fetchFox} name="Fetch fox"/>
        </div>
    )
}

export default RandomFox;