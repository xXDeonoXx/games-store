import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import styles from './CartHeader.module.scss';

const CartHeader = () => {
  const { products } = useContext(ShoppingCartContext);

  return (
    <div className={styles.container}>
      <p>Carrinho</p>
      {!!products.length && (
        <span className={styles.quantity}>
          ({`${products.length} ${products.length > 1 ? 'itens' : 'item'}`})
        </span>
      )}
    </div>
  );
};

export default CartHeader;
