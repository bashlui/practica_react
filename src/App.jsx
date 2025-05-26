import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import "./App.css";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import { useState } from "react";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = async (user) => {
  const response = await fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const res = await response.json();
  setIsLogin(res.isLogin);
  return res.isLogin;
};

const logout = () => setIsLogin(false);

  return (
    <>
    <BrowserRouter>
    {isLogin && <AppBar onLogout={logout} />}
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/" element={ <Login login={login} /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App