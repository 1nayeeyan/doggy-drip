import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from "./components/Product";

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:productid" element={<Product />} />
      </Routes>
    </Router>

  );
}
export default App;
