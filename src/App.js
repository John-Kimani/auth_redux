import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/homepage/HomePage';


import { useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import LogoutPage from './pages/auth/LogoutPage';

function App() {

  const user = useSelector(selectUser);
  return (
    <>
    {/* {user ? <LogoutPage /> : <LoginPage/>} */}
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/logout' element={<LogoutPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
