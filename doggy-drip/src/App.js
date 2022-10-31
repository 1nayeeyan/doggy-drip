import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:productid" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
