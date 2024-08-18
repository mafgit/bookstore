import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
      .get("http://127.0.0.1:5000/api/auth/check_auth", {
        withCredentials: true,
      }) //fixed here
      .then((res) => {
        if (res.data.auth === true) {
          setName(res.data.user.name);
          setEmail(res.data.user.email);
          setId(res.data.user.id);
          setLoggedIn(true);

          axios
            .get("http://127.0.0.1:5000/api/auth/check_admin", {
              withCredentials: true,
            }) //fixed here
            .then((res) => {
              if (res.data.admin === true) {
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
        value={{
          loggedIn,
          isAdmin,
          name,
          email,
          id,
          setLoggedIn,
          setIsAdmin,
          setName,
          setEmail,
          setId,
        }}
      >
        <BrowserRouter>
          <Navbar />
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
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
