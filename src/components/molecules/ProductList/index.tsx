import React from 'react';
import { Product } from '../../../domains/product';
import ProductCard from '../../organisms/ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  orderBy: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, orderBy }) => {
  return (
    <div className={styles.container}>
      {products
        .sort((a, b) => {
          if (orderBy == 'popularity') {
            return a.score - b.score;
          }
          if (orderBy == 'price') {
            return a.price - b.price;
          }
          if (orderBy == 'alphabetic') {
            const textA = a.name.toUpperCase();
            const textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          }
          return 1;
        })
        .map((product) => {
          return (
            <ProductCard key={product.id + Math.random()} product={product} />
          );
        })}
    </div>
  );
};

export default ProductList;
