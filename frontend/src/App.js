import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export const AuthContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

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
            <Route path="/profile" element={<ProfilePage />} />
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
