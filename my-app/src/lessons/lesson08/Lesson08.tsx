import MyButton from "../../components/myButton/MyButton";
import MyForm from "../../components/myForm/MyForm";
import MyInput from "../../components/myInput/MyInput";

const Lesson08 = () => {
    return (
        <div  className="lesson-container">
            <h3>Lesson 08 </h3>
            <p></p>
            {/* <MyInput /> */}
            <h4>CSS Modules</h4>
            <p>Способ написания изолированных css стилей в React, 
                чтобы стили не конфликтовали друг с другом</p>
                <MyButton/>
                <MyInput label="the label" name="the name" type="text" placeholder="type text"/>
                <p>------------------------------</p>
                <MyForm/>
        </div>
    )
}

export default Lesson08;