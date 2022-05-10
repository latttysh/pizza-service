import styles from './Cart.module.scss'
import React from 'react';

function Cart(){

  return(
    <div className={styles.cart}>
      <img src="/img/pizza1.png" alt="pizza" />
      <div className="pizza-title">
        Pizza muzzarella
      </div>
      <div className="pizza-price">
        $ 1200.00
      </div>
    </div>
  );
}
export default Cart;