import React from 'react';
import Image from 'next/image';
import styles from './ProductImage.module.scss';

interface ProductImageProps {
  image: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
  return (
    <div className={styles.container}>
      <Image src={`/${image}`} alt='' layout='fill' />
    </div>
  );
};

export default ProductImage;
