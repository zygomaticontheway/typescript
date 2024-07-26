import axios from "axios";

import MyButton from "../../components/myButton/MyButton"
import { useState } from "react";
import { Consultation07Wrapper, Result, Text, Error } from "./styles"



export default function Consultation07() {

    const [joke, setJoke] = useState<string>('')
    const [error, setError] = useState<any>('')

    const RANDOM_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';

    //вариант getJokes с fetch

    // const getJokes = async () => {
    //     setJoke('');
    //     setError('');
    //     try{
    //         const response = await fetch(RANDOM_JOKE_URL)
    //         console.log(response);

    //         const result = await response.json()
    //         console.log(result);

    //         //при неудачном завершении запроса promise кот возвращает fetch, 
    //         //все равно завершится удачно и сохранит ошибку в result

    //         if(response.ok){
    //             setJoke(`${result.setup} - ${result.punchline}`)
    //         } else {
    //             // throw Object.assign( new Error ('API error'), {error: result})
    //         }
    //     } catch (error) {
    //         setError(error)
    //     }
    // }

    //вариант getJokes с axios - библиотека для работы с асинхронными запросами
    const getJokes = async () => {
        try {
            // отправляем запрос и сохраняем успешный результат в переменную result
            // ! схема axios.methodMane(url, data, config{})
            // methodMane - имя метода, например (get, post, put, delete)
            // url - адрес запроса
            // data - данные, которые нужно отправить в запросе (например в методах post и put)
            // config - объект с настройками, кот нужны для запроса
                //{
                //     headers: {},
                //     params: {},
                //     baseURL: '',
                //     responseType: ''    
                // }
            const result = await axios.get(RANDOM_JOKE_URL)
            console.log(result);

            //обрабатываем результат
            setJoke(`${result.data.setup} - ${result.data.punchline}`)
        } catch (error) {
            //обрабатываем ошибку
            setError(error)
        }
    }



    return (
        <Consultation07Wrapper>
            <MyButton name="get joke" onClick={getJokes} />
            <Result>
                {joke && <Text>{joke}</Text>}
                {error && <Error>{error}</Error>}
            </Result>
        </Consultation07Wrapper>
    )
}