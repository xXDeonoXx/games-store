import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import CartIcon from '../../atoms/CartIcon';
import CartProductCard from '../../atoms/CartProductCard';
import styles from './CartInfo.module.scss';

export const CartInfo = () => {
  const { products } = useContext(ShoppingCartContext);

  return (
    <div className={styles.contentWrapper}>
      {products.length ? (
        <div className={styles.productsContainer}>
          {products.map((product) => {
            return (
              <CartProductCard
                key={product.id + Math.random()}
                product={product}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <CartIcon />
          <p className={styles.emptyMessage}>
            Até o momento, o seu carrinho está vazio
          </p>
        </div>
      )}
    </div>
  );
};
