import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>

      </Routes>
    </Router>

  );
}
export default App;
