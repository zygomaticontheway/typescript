import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface IOneInputForm {
    value: number
}

const schema = Yup.object().shape({
    value: Yup
    .number()
    .min(1, 'value must be greater than 0')
    .max(20, 'value must be less than 20')
})

export default function OneInputForm() {

    const formik = useFormik({
        initialValues:{
            value: 0
        } as IOneInputForm,
        validationSchema: schema,
        validateOnChange: true,
        onSubmit: ( value:IOneInputForm ) => {
            console.log(value);
        }
    })
  return (
    <div className="lesson-container">
        <input type="number" placeholder="input number from 1 to 20" />
        <MyButton name="send"/>
    </div>
  )
}

