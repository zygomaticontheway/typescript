function Lesson06(){

    //1. Типизация строк - string

    let username:string = 'Bob';
    username = 'Harry';

    //2. Типизация чисел - number

    let numberValue:number = 42;
    console.log(typeof numberValue)
    numberValue = 7.1
    numberValue = NaN
    numberValue = 2 + Number('1')
    console.log(numberValue);
    
    //3. Типизация boolean

    let isAdmin:boolean = false
    isAdmin = true
    isAdmin = 2 > 3
    console.log(isAdmin);
    
    //4. Типизация null / undefined

    let emptyValue: null = null
    //emptyValue = 0 - ошибка

    let empty:undefined = undefined
    console.log(empty);
    
    //5. Типизация arrays
    const colors = ['red', 'green', 'blue']
    console.log(colors);
    // colors.push(1) - ошибка, ибо другой тип данных в массиве
    colors.push("")
    colors[3] = 'yellow'
    console.log(colors);

    //6. * functions
    const showMessage = () => {
        console.log('Hello motherfucker!');
        //если return явно не задан, то функция возвращает void
    }
    showMessage();

    const sum = (a:number, b:number):number => {
        return a + b
    }
    
    console.log(sum (4,10));
    let result:number = sum(13, 8) //если не указать типизацию result, то она случится, работать будет, но 
    console.log(result);
    
    const sum1 = (a:number, b:number):String => {
        return String(a + b)
    }
    console.log(sum1(1, 2));
    
    
    //7. * objects

    // 7.1. способ типизации interface

    interface IUser  {//принято начинать имя с большой I
        name: string,
        age: number,
        isAdmin: boolean
    }
    interface IAnimal {
        name: string,
        age: number | string, //union type
        canSwim: boolean,
        hasOwner?: boolean // если поставить ?, то это будет необязательный ключ
    }
    const tom:IAnimal = {
        name: 'Tom',
        age: 40,
        canSwim: false,
        hasOwner: true
    }
    const jerry:IAnimal = {
        name: 'Jerry',
        age: 35,
        canSwim: true
        // hasOwner: false

    }
    
    const tomAndJerry:IAnimal [] = [tom, jerry]
    console.log(tomAndJerry);
    


    // 7.2. способ типизации type

//---------------------------------------------------------------

    return(
        <div className="lesson-container">
            <h4>Lesson 06</h4>
        </div>
    )
}

export default Lesson06;