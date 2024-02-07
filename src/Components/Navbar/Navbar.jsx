import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Asset/my_bengkel/comp-logo_nobg_2.png";
import cart_icon from "../Asset/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>MyBengkel.my</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("bengkel")}}><Link style={{ textDecoration:'none'}} to='/bengkel'>Bengkel</Link>{menu==="bengkel"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> 
        <li >Forum</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration:'none'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
