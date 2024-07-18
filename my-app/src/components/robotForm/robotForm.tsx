import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from './robotForm.module.css'

interface IFormValues {
    model: string,
    creator: string,
    email: string
  }

  const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError('введи свой номер, робот')
    .required('обязательно введи модель')
    .min(100, 'твоя модель должна начинаться от 100')
    .max(1000, 'твоя модель должна быть до 1000'),
    creator: Yup
      .string()
      .required('обязательно введи имя создателя'),
    email: Yup
      .string()
      .email('некорректный формат email')
      .required('email обязателен')
  })

  export default function RobotForm() {
  

    const formik = useFormik({
      initialValues: {
        model: '123',
        creator: 'creator',
        email: 'creator@creator.com'
      } as IFormValues,
      validationSchema:schema, //добавляет схему валидации из Yup
      validateOnChange: false,//валидирует только при отправке формы, если не указать то при каждом изменении
      onSubmit: (values: IFormValues, {resetForm}) => {
        console.log(values);
        // resetForm();
      }
    })
  
  
    return (
      <>
        <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
          <label>Это форма для робота 🤖</label>
          <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='your model' />
          <input value={formik.values.creator} name='creator' onChange={formik.handleChange} type="text" placeholder='creator name' />
          <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email' />
          <button type="submit">send form</button>
        </form>
        <span className={styles.formErrors}>{formik.errors.model}</span>
        <span className={styles.formErrors}>{formik.errors.creator}</span>
        <span className={styles.formErrors}>{formik.errors.email}</span>
      </>
    )
  }