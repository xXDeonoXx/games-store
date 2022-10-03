import React from 'react';
import styles from './LabelWithValue.module.scss';

interface LabelWithValueProps {
  label: string;
  price: number;
  bigPrice?: boolean;
}

const LabelWithValue: React.FC<LabelWithValueProps> = ({
  label,
  price,
  bigPrice,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span className={`${bigPrice ? styles.bigPrice : styles.price}`}>
        R$ {price.toFixed(2)}
      </span>
    </div>
  );
};

export default LabelWithValue;
