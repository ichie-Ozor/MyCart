import React, { useContext } from 'react'
import { Cartcontext } from './Context/Context';

function ItemCard(props) {
  const GlobalContext = useContext(Cartcontext)
  const dispatch = GlobalContext.dispatch
  return (
    <div className="ItemCard">
      <div className="card">
        <img src={props.img} alt="" className="card-img" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
           <span className="price">${props.price}</span>
          <button onClick={() => dispatch({ type: 'ADD', payload: props.item })} className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard