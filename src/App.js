import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/homepage/HomePage";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { addToCart } from "./features/cartSlice";

function App() {
  const user = useSelector(selectUser);

  const cart = useSelector(addToCart);

  console.log(user);
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" exact element={<HomePage />} />
          ) : (
            <Route path="/" element={<LoginPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
