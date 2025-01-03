import "./App.css";

import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication.js";

//context
import { AuthProvider } from "./context/AuthContext.jsx";

import { Navigate, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to={"/"} />}
            />
            <Route
              path="/posts/create"
              element={user ? <CreatePost /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
