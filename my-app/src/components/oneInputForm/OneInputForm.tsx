import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import styles from "./oneInputForm.module.css"

interface IOneInputForm {
    inputValue: number
}

const schema = Yup.object().shape({
    inputValue: Yup
    .number()
    .min(1, 'value must be greater than 0')
    .max(20, 'value must be less than 20')
    .required('value is required')
})

export default function OneInputForm() {

    const [inputValue, setInputValue] = useState<number>(20);

    const formik = useFormik({
        initialValues:{
            inputValue: 20
        } as IOneInputForm,
        validationSchema: schema,
        validateOnChange: true,
        onSubmit: ( values ) => {
            setInputValue(values.inputValue)
        }
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        {formik.errors.inputValue ? <div className={styles.errorContainer}>{formik.errors.inputValue}</div> : null}
        <input 
            type="number" 
            placeholder="input number from 1 to 20" 
            value={formik.values.inputValue} 
            onChange={formik.handleChange}
            name="inputValue"
            />
        <MyButton type="submit" name="apply"/>
    </form>
  )
}

