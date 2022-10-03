import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './CartProductCard.module.scss';
import { Product } from '../../../domains/product';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';

interface CartProductCardProps {
  product: Product;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ product }) => {
  const { removeProduct } = useContext(ShoppingCartContext);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div>
          <Image src={`/${product.image}`} alt='' layout='fill' />
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>R$ {product.price}</p>
      </div>
      <div
        className={styles.removeButton}
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        <p>X</p>
      </div>
    </div>
  );
};

export default CartProductCard;
