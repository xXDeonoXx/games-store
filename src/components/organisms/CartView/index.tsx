import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import CartHeader from '../../molecules/CartHeader';
import { CartInfo } from '../../molecules/CartInfo';
import CartPricing from '../../molecules/CartPricing';
import styles from './CartView.module.scss';

const CartView = () => {
  return (
    <div className={styles.container}>
      <CartHeader />
      <div className={styles.body}>
        <CartInfo />
        <CartPricing />
      </div>
    </div>
  );
};

export default CartView;
