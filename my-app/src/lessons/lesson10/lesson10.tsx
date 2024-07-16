import { useCallback, useEffect, useState } from "react";
import styles from './lesson10.module.css'
import MyButton from "../../components/myButton/MyButton";

function CatFact() {
    
    interface ICatData {
        fact: string,
        length: number
    }

    const fetchCat = () => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => setCatFacts([...facts, data.fact]))
    }

    useEffect(() => {
        fetchCat();
    }, [])


    const [cat, setCat] = useState<ICatData>({
        fact: '',
        length: 0
    })

    const [facts, setCatFacts] = useState<string []>([])

    let handleCats = () => {
        fetchCat()
        setCatFacts([...facts, cat.fact])
    }

    const handleClearFacts = () => {
        setCatFacts([]);
    };
    const catFactsList = () => {
        if (facts.length > 0){
            return(
            <div className={styles.catFactContainer}>
                <ul>
                    {facts.map((fact, index) => (
                        <li key={index} className={styles.catFactItem}>{fact}</li>
                    ))}
                </ul>
            </div>
            )
        } else{
            return(
                <div className={styles.catFactContainer}>
                    Sorry, no cat facts for now 🥸
                </div>
            )
        }
    }

    return (
        <div className={styles.lesson_container}>
            <h1>Few facts about cats 🐱</h1>
            {catFactsList()}
            <div className={styles.buttonContainer}>
                <MyButton type={"button"} name={"GET MORE INFO"} onClick={handleCats} />
                <MyButton type={"button"} name={"CLEAR FACTS"} onClick={handleClearFacts} />
            </div>
        </div>
    )
}

export default CatFact;