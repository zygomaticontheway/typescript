import { useFormik } from 'formik'
import { useState } from 'react';
import styles from './formGender.module.css'
import * as Yup from 'yup';

interface IFormGender {
    name: string
}
interface iGenderData {
    name: string
    gender: string
    probability: number
    count: number
}

const validationSchema = Yup.object().shape({ // имя константы = зарезервированному ключу validationSchema, да так можно, иногда так делают, но запись вызова короче. 
    name: Yup
    .string()
    .typeError('имя не может быть пустым')
    .max(5, 'имя не может быть более 5 символов')
    .min(2, 'имя не может быть менее 2 символов')
    .required('обязательно введите имя')
});

export default function FormGenderByTeacher() {

    const fetchGender = async (name: string) => {
        //аналог обработки promise запросов, можно использовать цепочку из .then() или его
        const res = await fetch(`https://api.genderize.io/?name=${name}`)
        const data = await res.json()
        setGenderData(data)
        // console.log(data);
    }

    const handleClean = () => {
        setGenderData({
            count: 0,
            name: '',
            gender: '',
            probability: 0
        })
    }

    const [genderData, setGenderData] = useState<iGenderData>({
        name: '',
        gender: '',
        probability: 0,
        count: 0
    })

    const formik = useFormik({
        initialValues: { name: '' } as IFormGender,
        validationSchema, // вызов функции (которая в переменной) совпадает с названием ключа validationSchema
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: (values: IFormGender, { resetForm }) => {
            fetchGender(values.name)
            console.log(values);
            resetForm();
        }
    })

    return (
        <>
            <h4>Know names gender 🔮</h4>
            <form onSubmit={formik.handleSubmit} className={styles.genderForm} >
                <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} name='name' type="text" placeholder='name' />
                <button type="submit" onClick={handleClean}>send request</button>
                {genderData.name && ( //&& это тернарный оператор => если gender.name не пустой, то выполняем что дальше
                    <p>{genderData.name} is {genderData.gender === 'male' ? '👨🏻' : '👩🏻‍🦰'} {genderData.probability * 100}%</p>)}
                {formik.errors.name && (
                <div className={styles.errorContainer}>
                    <span className={styles.formErrors}>{formik.errors.name}</span>
                </div>
                )}
            </form>
        </>

    )
}
