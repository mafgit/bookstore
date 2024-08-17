import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import AuthRoute from "./pages/AuthRoute";
import AdminRoute from "./pages/AdminRoute";

export const AuthContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/check_auth") //fixed here
      .then((data) => {
        if (data.auth === true) {
          setName(data.user.name);
          setEmail(data.user.email);
          setId(data.user.id);
          setLoggedIn(true);

          axios
            .get("http://localhost:5000/auth/check_admin") //fixed here
            .then((data) => {
              if (data.admin === true) {
                setIsAdmin(true);
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ loggedIn, isAdmin, name, email, id, setLoggedIn, setIsAdmin }}
      >
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:bid" element={<BookPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* admin routes */}
            {/* <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/books" element={<AdminBooksPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} /> */}

            {/* auth routes */}
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
