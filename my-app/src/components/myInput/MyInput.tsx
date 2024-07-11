import "./myInput.css";

interface IMyInputProps{
  label: string, 
  name: string, 
  type: string, 
  placeholder: string
}

export default function MyInput({label, name, type, placeholder}:IMyInputProps) {

  return (
    <>
      <label className='label'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}
