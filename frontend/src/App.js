import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:bid" element={<BookPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* auth routes */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* admin routes */}
          {/* <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/books" element={<AdminBooksPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
