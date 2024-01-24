// import React, { useState } from "react";
// import Navbar from "./component/navbar/navbar";
// import Home from "./component/home/home";
// import Cart from "./component/cart/cart";
// import Search from "./component/search/search";
// import "../src/component/home/home.css";
// const App = () => {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   const [warning, setWarning] = useState(false);
//   const handleClick = (item) => {
//     console.log(item);
//     let isPresent = false;
//     cart.forEach((product) => {
//       if (item.id === product.id) isPresent = true;
//     });
//     if (isPresent) setWarning(true);
//     setCart([...cart, item]);
//     setTimeout(() => {
//       setWarning(false);
//     }, 5000);
//     return;
//   };

//   return (
//     <React.Fragment>
//       {/* size=no.of count of the cart */}
//       <Navbar size={cart.length} setShow={setShow} />
//       {show ? (
//         <Home handleClick={handleClick} />
//       ) : (
//         <Cart cart={cart} setCart={setCart} />
//       )}

//       {warning && (
//         <div className="warning">Item is already added to your cart</div>
//       )}
//     </React.Fragment>
//   );
// };

// export default App;
// import React from "react";
// import "./navbar.css";
// import { FaHome } from "react-icons/fa";
// const Navbar = ({ size, setShow }) => {
//   return (
//     <nav>
//       <div className="navbox">
//         <span className="my_shop">
//           <FaHome
//             onClick={() => setShow(true)}
//             style={{ fontSize: "40px", marginLeft: "-40px", gap: "1rem" }}
//           />
//           Amazon{" "}
//         </span>
//         <div className="cart">
//           <span onClick={() => setShow(false)}>
//             <i className="fas fa-cart-plus"></i>
//           </span>
//           <span>{size}</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//cart page
// import React, { useEffect, useState } from "react";
// import "./cart.css";
// const Cart = ({ cart, setCart }) => {
//   const [price, setPrice] = useState(0);
//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.amount * item.price));
//     setPrice(ans);
//   };
//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//   };
//   useEffect(() => {
//     handlePrice();
//   });
//   return (
//     <article>
//       {cart.length ? (
//         cart.map((item) => (
//           <div className="cart_box" key={item.id}>
//             <div className="img">
//               <img src={item.img} alt={item.title} />
//               <p>{item.title}</p>
//             </div>
//             <div className="btn">
//               <button>+</button>
//               <button>{item.amount}</button>
//               <button>-</button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="cart_box">
//           <p>your cart is empty</p>
//         </div>
//       )}
//       <div className="total">
//         <span>Total Price Of your cart</span>
//         <span>Rs-{price}</span>
//       </div>
//     </article>
//   );
// };

// export default Cart;
