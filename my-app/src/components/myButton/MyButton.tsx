import "./myButton.css";

// ! перенос компонентов с jsx в tsx
interface IMyButtonProps {
  name?: string, //необязательный ибо есть значение по умолчанию
  type?: 'button' | 'submit' | 'reset', //ограниченный набор значений
  onClick?: () => void //необязательный ибо onClick может быть обернута, но это функция по этому параметр описывается как функция (не обязательно стрелочная)
}

export default function MyButton({ type='button', onClick, name='default_text' }:IMyButtonProps) {
  return (
    <button type={type} onClick={onClick} className="myButton">
      {name}
    </button>
  );
}
