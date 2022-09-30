import React from 'react';
import Image from 'next/image';
import styles from './ProductImage.module.scss';

const ProductImage = () => {
  return (
    <div className={styles.container}>
      <Image
        src='https://m.media-amazon.com/images/I/91SF0Tzmv4L._AC_SY500_.jpg'
        alt=''
        layout='fill'
      />
    </div>
  );
};

export default ProductImage;
