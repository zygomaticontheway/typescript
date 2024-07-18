
import styles from './robotForm.module.css'
import { useFormik } from 'formik'

//типизация значений в форме
interface IFormValues {
  firstName: string,
  lastName: string,
  email: string
}

export default function RobotForm111() {

  // вызываем хук-функцию useFormik и передаем объект с настройками
  // результат выполнения кладем в переменную  formik
  const formik = useFormik({

    //передаем начальные значения для полей формы
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as IFormValues, //типизируем значение по ключам через оператор as

    //описываем действия по нажатию на кнопку с типом submit
    onSubmit: (values: IFormValues, {resetForm}) => {
      //! это ключевой код логики формы: описывается что произойдет по нажатию на кнопку submit
      //проверяем , что к нам пришли значения из формы
      console.log(values);
      resetForm();
    }
  })


  return (
      //! что нужно заполнить в форме:
      // 1. для form добавить на onSubmit форме formik.handleSubmit
      // 2. для input добавить на onСChange форме formik.handleSubmit
      // 3. для input добавить в name имя соответствующее ключу в объекте initialValues из настроек
      // 3. для input добавить в value значение его поля из formik.values


    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label>Это форма для робота 🤖</label>
      <input value={formik.values.firstName} name='firstName' onChange={formik.handleChange} type="text" placeholder='your mdoel' />
      <input value={formik.values.lastName} name='lastName' onChange={formik.handleChange} type="text" placeholder='creator name' />
      <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email' />
      <button type="submit">send form</button>
    </form>
  )
}
