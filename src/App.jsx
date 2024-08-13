import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pageComponents/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WishList from "./pages/WishList";
import SignalProductDetail from "./pageComponents/SingleProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/singleproductdetail" element={<SignalProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
