import React, { useContext } from 'react'
import { Cartcontext } from './Context/Context';
import Nav from './Nav';

function Cart(props) {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state
  const dispatch = Globalstate.dispatch

  const total = state.reduce((total, item) => {
    return (total + item.price * item.quantity)
  }, 0)
  return (
    <div>
      <Nav />
      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="cart-card" key={index}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <p>${item.quantity * item.price}</p>

              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p className='item-qty'>{item.quantity}</p>
                <button
                  onClick={() => {
                    item.quantity > 1
                      ? dispatch({ type: "DECREASE", payload: item })
                      : dispatch({ type: "REMOVE", payload: item });
                    // if (item.quantity > 1) {
                    //   dispatch({type: 'DECREASE', payload: item})
                    // }else {
                    //   dispatch({ type: "REMOVE", payload: item });
                    // }
                  }}
                >
                  -
                </button>
              </div>
              <h2 className="delete" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                X
              </h2>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total">
            <h2>${total}</h2>
          </div>
        )}
        <button className='check-out'>Check Out</button>
      </div>
    </div>
  );
}

export default Cart