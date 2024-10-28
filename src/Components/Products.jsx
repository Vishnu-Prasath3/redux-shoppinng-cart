import { store } from "./Store";
import "./product.css";
import React from "react";
import { productdetails } from "./Reducer";

function Products() {
  function handlebutton(id) {
    store.dispatch();
  }
  return (
    <>
      <div className="maincard">
        {productdetails.map((ele, index) => (
          <div key={index} className="card">
            <img src={ele.img} className="image"></img>
            <p className="productname"> {ele.name}</p>
            <h5 className="price">{"Rs:" + ele.price + " only"}</h5>
            <div className="btn">
              <button onClick={handlebutton(ele.id)}>Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
