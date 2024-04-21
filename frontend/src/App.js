import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bengkel from "./Pages/Bengkel";
import Shop from "./Pages/Shop";
import Forum from "./Pages/Forum";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import Workshop from "./Pages/Workshop";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/bengkel" element={<Bengkel/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/workshop" element={<Workshop/>}>
          <Route path=":workshopId" element={<Workshop/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>);
}

export default App;

/**
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Bengkel/>}/>
  <Route path="/engine" element={<BengkelCategory category="engine"/>}/>
  <Route path="/tyre" element={<BengkelCategory category="tyre"/>}/>
  <Route path="/cosmetic" element={<BengkelCategory category="cosmetic"/>}/>
  <Route path="/product" element={<Product/>}>
    <Route path=":productId" element={<Product/>}/>
  </Route>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<LoginSignup/>}/>
</Routes>
<Footer/>
</BrowserRouter>
 */