import ReactDOM from 'react-dom/client';
import './index.css';
// import Layout from './components/layout/layout';
// import Lesson09 from './lessons/lesson09/Lesson09';
import RandomFox from './homeworks/hw09/RandomFox';
// import App from './app/App';
// import Lesson06 from './lessons/lesson06/lesson06';
// import Lesson07 from './lessons/lesson07/lesson07';
// import MyForm from './components/myForm/MyForm';
// import Lesson08 from './lessons/lesson08/Lesson08';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App /> */}
    {/* <Lesson06/> */}
    {/* <Lesson07/> */}
    {/* <MyForm/> */}
    {/* <Lesson08/> */}
    {/* <Layout/> */}
    {/* <Lesson09/> */}
    <RandomFox/>
  </>
);