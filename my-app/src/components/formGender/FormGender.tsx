import { useFormik } from 'formik'
import { url } from 'inspector';
import { useState } from 'react';
import styles from './formGender.module.css'

interface IFormGenderValues{
    name: string,
    url: string
}

export default function FormGender() {

    //useState засунуть в него data
    const [data, setData] = useState<IFormGenderValues>({
        name: '',
        url: 'https://api.genderize.io/?name='
    })


    
    const formik = useFormik({
        initialValues: {
            name: '', 
            url: 'https://api.genderize.io/?name='} as IFormGenderValues,
        onSubmit: (values: IFormGenderValues, {resetForm}) => {
        console.log(values);
        
        resetForm();
        // fetch (`${values.url}${values.name}`)
        //     .then(res => res.json)
        //     .then(data => setData())// ! !!!!!!!! деструктуризировать данные чтобы потом вывести
            
    }
    })


    
    return (
        <>
        <form onSubmit={formik.handleSubmit} className={styles.genderForm} >
            <input value={formik.values.name} onChange={formik.handleChange} name='name' type="text" placeholder='name'/>
            <button type="submit">send form</button>
        </form>
        </>

  )
}
