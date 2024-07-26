import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import App from './app/App';
// import Layout from './components/layout/layout';
// import CatFact from './lessons/lesson10/lesson10';
// import RandomFox from './homeworks/hw09/RandomFox';
// import Lesson06 from './lessons/lesson06/lesson06';
// import Lesson07 from './lessons/lesson07/lesson07';
// import Lesson08 from './lessons/lesson08/Lesson08';
// import Lesson09 from './lessons/lesson09/Lesson09';
// import Lesson11 from './lessons/lesson11/Lesson11';
// import Lesson12 from './lessons/lesson12/Lesson12';
// import Lesson13 from './lessons/lesson13/Lesson13';
import Layout from './components/layout/layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import FormGender from './components/formGender/FormGender';
import RobotForm from './components/robotForm/robotForm';
import MyForm from './components/myForm/MyForm';
import HomePage from './components/homePage/HomePage';
import Feedback from './components/feedback/Feedback';
import Counter from './components/counter/Counter';
import RickAstley from './components/rickAstley/RickAstley';
import Shop from './components/shop/Shop';
import ProductPage from './components/productPage/ProductPage';
import ToDoList from './components/toDoList/ToDoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>

  //обертка router над всеми эл-ми
    <HashRouter>
      {/* обертка для описания маршрутов */}
      <Routes>
        {/* маршрут родитель в кот мы будем отображать остальные эл-ты */}
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/star-wars-gallery' element={<StarWarsGallery />} />
          <Route path='/gender-form' element={<FormGender />} />
          <Route path='/robot-form' element={<RobotForm />} />
          <Route path='/my-form' element={<MyForm />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/shop/:id' element={<ProductPage />} /> {/* импортируем компонент, указываем в path параметр id через : */}
          <Route path='*' element={<div className='lesson-container'><h1>ERROR 404 ☠️</h1> <RickAstley /></div>} />

          {/* <App /> */}
          {/* <MyForm/> */}
          {/* <Layout/> */}
          {/* <RandomFox/> */}
          {/* <CatFact/> */}
          {/* <Lesson06/> */}
          {/* <Lesson07/> */}
          {/* <Lesson08/> */}
          {/* <Lesson09/> */}
          {/* <Lesson11/> */}
          {/* <Lesson12/> */}
          {/* <Lesson13/> */}
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);