import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson06 from './lessons/lesson06/lesson06';
import Lesson07 from './lessons/lesson07/lesson07';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    {/* <Lesson06/> */}
    <Lesson07/>
  </>
);