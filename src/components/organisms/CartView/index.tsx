import React from 'react';
import CartIcon from '../../atoms/CartIcon';
import styles from './CartView.module.scss';

const CartView = () => {
  return (
    <div className={styles.container}>
      <h2>Carrinho</h2>
      <div className={styles.contentWrapper}>
        <CartIcon />
        <p className={styles.emptyMessage}>
          Até o momento, o seu carrinho está vazio
        </p>
      </div>
    </div>
  );
};

export default CartView;
