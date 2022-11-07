import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/homepage/HomePage';


import {Provider} from 'react-redux';
import store from "./app/store";


function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
