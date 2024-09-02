import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pageComponents/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WishList from "./pages/WishList";
import SignalProductDetail from "./pageComponents/SingleProductDetail";
import AddToCard from "./pages/AddToCard";
import { fetchProducts } from "./state/Slices/products/products.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route
            path="/singleproductdetail"
            element={<SignalProductDetail />}
          />
          <Route path="/addtocard" element={<AddToCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
