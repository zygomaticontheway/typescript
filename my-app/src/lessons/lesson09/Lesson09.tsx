import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";

function Lesson09 () {
    interface IDogData {
        message: string,
        status: string
    }

    //код с этой строчки и до return будет срабатывать при каждом обновлении компонента
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch ('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [count])

    const fetchDog = () => {
        fetch ('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDog(data));
    }

    //в массиве зависимостей мы указываем переменные, от изменений которых будет зависеть действие внутри useEffect
    useEffect(() => {
        fetchDog();
    }, [])
    
    
    const handlePlus = () => {
        setCount(prev => prev + 1)
        fetchDog()
    }

    function sum (a: number, b: number) {
        return a + b;
    }

    const [dog, setDog] = useState<IDogData>({
        message:'',
        status:''
    })

    

    return(
        <div className="lesson-container">
            <h3>Lesson 09</h3>
            <h4>useEffect hook 🪝</h4>
            <h5>Проблема, которую решает этот Hook</h5>
            
            <p>{count}</p>
            <MyButton onClick={handlePlus} name={'plus'}/>
            <img src={dog.message} width={140} alt="" />

            <p>useEffect - функция которая принимает в себя 2 параметра:
                <ol>
                    <li>стрелочную функцию с действиями, которые мы хотим запустить при определенных условиях</li>
                    <li>массив зависимостей, в котором через запятую можно указать от каких переменных будет зависеть запуск действий.</li>
                </ol>
                если массив пустой, код сработает только при монтировании (mounting) компонента
            </p>
            <p>Мы будем использовать useEffect для изоляции асинхронных запросов = с пустым массивом зависимостей</p>
            <p>Любое изменение стейта вызывает перерендер компонента. т.е. все операции в теле компонента
                будут повторяться раз за разом, в том числе и те, которые мы бы не хотели повторять.</p>
            <p>Нужен способ изолировать операции от повтора , где это не нужно</p>
            
            <h5>Вспоминаем fetch запросы:</h5>
            <ul>
                <li>Асинхронный запрос на сервер на данные</li>
                <li>Данные приходят не сразу, их нужно подождать</li>
                <li>В ответ приходит особый объект Promise в состоянии Pending (обработки) - данные, которых нужно дождаться и обработать особым способом</li>
                <li>1-й способ: цепочка из .then() методов</li>
                <li>2-й способ: асинхронная функция с синтаксисом asunc/await</li>
                <li>В ответ мы хотим получить данные с сервера</li>
                <li>Чаще всего они будут в формате JSON</li>
                <li>Данные с сервера приходится обрабатывать 2 раза</li>
                <li>Сначала дожидаемся самих данных, потом дожидаемся метода .json()</li>
            </ul>

        </div>
    )
}

export default Lesson09;