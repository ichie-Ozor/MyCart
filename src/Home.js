import React, { useContext } from "react";
// import ItemCard from './ItemCard'
import data from "./data";
import { Cartcontext } from "./Context/Context";
import Nav from "./Nav";

function Home() {
  console.warn(data.productData);
  const Globalcontext = useContext(Cartcontext);
  console.log(Globalcontext);
  const dispatch = Globalcontext.dispatch;
  return (
    <div>
      <Nav />
      <h1 className="Home-item">All Items</h1>
      <section className="container">
        <div className="row">
          {data.productData.map((item, index) => {
            item.quantity = 1
            return (
              <div className="ItemCard" key={index}>
                <div className="card">
                  <img src={item.img} alt="" className="card-img" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                    <span className="price">${item.price}</span>
                    <button
                      onClick={() => dispatch({ type: "ADD", payload: item })}
                      className="btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;

//  <ItemCard img={item.img} title={item.title} desc= {item.desc} price={item.price} key={id}/>
