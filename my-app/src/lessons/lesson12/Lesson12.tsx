import FormGender from "../../components/formGender/FormGender";
import FormGenderByTeacher from "../../components/formGender/FormGernderByTeacher";
import RobotForm from "../../components/robotForm/robotForm";




export default function Lesson12() {
  return (
    <div className="lesson-container">
        <h3>Lesson12</h3>    
        <p>Валидация данных в форме с библиотекой Yup для Formik</p>
        <RobotForm/>
        {/* <FormGenderByTeacher/> */}
    </div>
  )
}