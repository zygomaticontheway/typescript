import { useFormik } from 'formik'
import { useState } from 'react';
import styles from './formGender.module.css'
import * as Yup from 'yup';

interface IFormGenderValues{
    name: string
}

interface IGenderData {
    count: number
    name: string
    gender: string
    probability: number
}

export default function FormGender() {

    const [data, setData] = useState<IFormGenderValues>({
        name: ''
    })

    const [genderData, setGenderData] = useState<IGenderData> ({
        count: 0,
        name: '',
        gender: '',
        probability: 0
    })

    const fetchGender = async (name: string) => {
        const res = await fetch (`https://api.genderize.io/?name=${name}`)
        const data = await res.json()
        setGenderData(data);
    }
    const schema = Yup.object().shape({
        name: Yup
            .string()
            .max(70, 'Too big name')
            .required('Fill that input')
            .matches(/^[a-zA-Z\s]+$/, 'Please do not use number symbols')
    })
    
    const formik = useFormik({
        initialValues: {
            name: ''
        } as IFormGenderValues,
        validationSchema:schema,
        validateOnChange: false,
        onSubmit: (values: IFormGenderValues, {resetForm},) => {
            console.log(values);
            fetchGender(values.name);
            resetForm();
        }
    })
    

    return (
        <>
        <h4>Find out names gender 🔮</h4>
        <form onSubmit={formik.handleSubmit} className={styles.genderForm} >
            <input value={formik.values.name} onChange={formik.handleChange} name='name' type="text" placeholder='name'/>
            <button type="submit">send form</button>
            <span className={styles.formErrors}>{formik.errors.name}</span>
        </form>
            {genderData.name && (
                <p>Name <span className={styles.nameSpan}>{genderData.name}</span> is {genderData.gender} with probability {genderData.probability}</p> 
            )}
        </>

  )
}

