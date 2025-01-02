import "./App.css";

//context
import { AuthProvider } from "./context/AuthContext.jsx";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <AuthProvider>
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
