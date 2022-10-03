import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import { Product } from '../../../domains/product';
import ProductImage from '../../atoms/ProductImage';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addProduct } = useContext(ShoppingCartContext);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Link href={`/product/${product.id}`}>
        <div className={styles.imageWrapper}>
          <div>
            <ProductImage image={product.image} />
          </div>
        </div>
      </Link>
      <div className={styles.productInfoWrapper}>
        {hovered ? (
          <span
            onClick={() => {
              addProduct(product);
            }}
            className={styles.addToCart}
          >
            adicionar ao carrinho
          </span>
        ) : (
          <>
            <span className={styles.productTitle}>{product.name}</span>
            <span className={styles.productPrice}>R$ {product.price}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
