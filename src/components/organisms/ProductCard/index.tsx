import React from 'react';
import { Product } from '../../../domains/product';
import ProductImage from '../../atoms/ProductImage';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div>
          <ProductImage />
        </div>
      </div>
      <div className={styles.productInfoWrapper}>
        <span className={styles.productTitle}>{product.name}</span>
        <span className={styles.productPrice}>R$ {product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
