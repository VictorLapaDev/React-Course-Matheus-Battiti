import "./App.css";

import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication.js";

//context
import { AuthProvider } from "./context/AuthContext.jsx";

import { Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();


  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if(loadingUser) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
