import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/homepage/HomePage';





function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
