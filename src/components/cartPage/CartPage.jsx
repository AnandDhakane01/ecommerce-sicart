import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Order from "./Order";
import "./cartpage.css";
import { loadCart } from "./cart_helper";
import NavigationBar from "../NavigationBar";

const CartPage = () => {
  const [products, setproducts] = useState([]);
  const [reload, setreload] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);

  useEffect(() => {
    if (products) {
      var temp_price = 0;
      for (let i = 0; i < products.length; i++) {
        temp_price += products[i].price;
      }
      setTotalPrice(temp_price);
    }
  }, [products]);

  return (
    <div>
      <NavigationBar />
      {products && products.length ? <h1 className="bagMoh">Your Bag</h1> : ""}
      {products && products.length ? (
        <div className="containerMoh">
          <div className="pageMoh">
            <div className="gridMoh">
              <div className="detailsMoh">
                <span className="tbl productsMoh">Products</span>
                <span className="tbl descpMoh">Description</span>
                <span className="tbl priceMoh">Price</span>
                <span className="tbl deleteMoh">Delete</span>
                <hr className="line1Moh"></hr>
                {products.map((product) => {
                  return (
                    <div>
                      <ItemCard
                        key={product.id}
                        product={product}
                        setreload={setreload}
                        reload={reload}
                      ></ItemCard>
                    </div>
                  );
                })}
              </div>
              <Order
                totalPrice={totalPrice * 70}
                numberOfProducts={products.length}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default CartPage;
