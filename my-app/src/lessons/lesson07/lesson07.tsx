import Counter from "../../components/counter/Counter"
import MyButton from "../../components/myButton/MyButton"

function Lesson07(){

    // 7.1. способ типизации interface

    interface ISuperhero  {
        id: number,
        name: string,
        nickname: string,
        abilities?: string[] //необязательный параметр - массив строк
    }

    let hero1:ISpaceHeroes = {
        id: 1,
        name: 'Clark Kent',
        nickname: 'Superman',
        abilities: ['flying', 'eyes laser', 'super vision'],
        homePlanet: 'Krypton',
        isAlive: true
    }
    let hero2:ISuperhero = {
        id:2,
        name: "Bruce Wane",
        nickname: 'Batman'
    }
    let hero3:ISuperhero = {
        id:3,
        name: "Peter Parker",
        nickname: 'Spiderman',
        abilities: [] //хоть и необязательный, но все же его лучше вписывать
    }
    const heroes:ISuperhero[] = [hero1, hero2, hero3] //массив из объектов заданного типа
    
    interface ISpaceHeroes extends ISuperhero{
        homePlanet: 'Krypton' | 'Earth' //можно указывать конкретные значения для конструктора: или 'Krypton' или 'Earth' 
    }

    //интерфейсы объединяются, если существует интерфейс с аналогичным именем
    // ! Внимание, это может привести к ошибкам
    interface ISpaceHeroes{
        isAlive: boolean
    }


    // 7.2. способ типизации type

    type Animal ={
        name: string,
        weight: number
    };

    let panda: Animal = {
        name: 'Po',
        weight: 100
    }
    console.log(panda);
    //наследование с type
    type ExoticAnimal = Animal & {
        isExotic: true //проверка на конкретное значение конкретного типа
        country: string
    }

    let panda1: ExoticAnimal ={
        name:'Powder',
        isExotic: true,
        country: 'China',
        weight: 101
    }
    console.log(panda1);
    
    //generics
    //функция будет ждать тип с которым она будет работать в угловых скобках
    function makeArray <T>(first:T, second:T){
        return [first, second]
    }

    //в момент вызова функции передаем generic тип в угловых скобках
    const people = makeArray<string>('Tom', 'Harry')
    console.log(people);

    const people1 = makeArray<number>(1, 2)
    console.log(people1);
    
    


//---------------------------------------------------------------

const handleHello = () => {
    console.log('hello piggi 🐽🐽🐽');
    
}

    return(
        <div className="lesson-container">
            <h4>Lesson 07</h4>
            <p>Урок Typescript часть 2 в комментариях к коду урока 👻</p>
            <ul>
                {heroes.map(el => (
                    <div key={el.id}>
                        <h4>🦸‍♂️ {el.nickname}</h4>
                        <p>Real name: {el.name}</p>
                    </div>
                ))}
            </ul>
            <div>
                <MyButton name='click' onClick={() => console.log('click was done')}/>
                <MyButton name='reset' /> 
                <MyButton name='🐽 hello' onClick={handleHello}/>
                <Counter/>
            </div>
            
        </div>
    )
}

export default Lesson07;