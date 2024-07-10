import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson06 from './lesson06/lesson06';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <Lesson06/>
  </>
);