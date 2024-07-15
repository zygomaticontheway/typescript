
import { useEffect, useState } from "react";
import styles from './randomFox.modules';
import MyButton from "../../components/myButton/MyButton";

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
        fetch ('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])

    const fetchFox = () => {
        fetch('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(data => setFox(data))
    }
    
    const [fox, setFox] = useState<IFoxData>({
        image: '',
        link: ''
    })

    const leftOrRight = () => {
        const regex = /(\d+)/;
        const match = fox.link.match(regex);

        if (match) {
            const number = parseInt(match[1], 10);
    
            if (number % 2 === 0) {
                <div className={styles.foxContainer}>
                    <div>`${number} is even. Tricky fox is on the right. ----&gt`</div>
                    <div className={styles.right}>
                        <img src={fox.image} alt="tricky fox" />
                    </div>
                </div>
            } else {
                <div className={styles.foxContainer}>
                    <div className={styles.left}>
                        <img src={fox.image} alt="tricky fox" />
                    </div>
                    <div className={styles.right}>`&lt---- ${number} is odd. Tricky fox is on the left.`</div>
                    
                </div>
                
            }
        } else {
            <div className={styles.foxContainer}>Tricky fox is missing</div>
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
            leftOrRight()
            <MyButton type="button" onClick={leftOrRight}/>
        </div>
    )
}

export default RandomFox;