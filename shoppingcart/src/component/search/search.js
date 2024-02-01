// import React, { useState } from "react";
// import "./search.css";
// import Productlist from "../product/productdata";
// //import Card from "../card/card";
// function Search({ book }) {
//   //const [item, setItem] = useState("");
//   // function handleBtn() {
//   //   updateBook(
//   //     Productlist.filter((e) =>
//   //       e.title.toLowerCase().includes(item.toLowerCase())
//   //     )
//   //   );
//   // }

//   // const [book, updateBook] = useState([]);
//   return (
//     <div>
//       {/* <div className="search-box">
//         <input
//           onChange={(e) => {
//             setItem(e.target.value);
//           }}
//           id="Search-input"
//         />
//         <button onClick={handleBtn}> Search</button>
//       </div> */}

//       {book.length !== 0 &&
//         book.map((e) => {
//           return (
//             <div className="card">
//               <div className="image_box">
//                 <img src={e.img} alt="img" />
//               </div>
//               <div className="details">
//                 <p>{e.title}</p>
//                 <p>{e.author}</p>
//                 <p>price{e.price}</p>
//               </div>
//               <div className="btncontainer">
//                 <button className="cart-btn">Add To cart</button>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
// export default Search;
