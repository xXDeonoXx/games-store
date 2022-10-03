import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.wrapper}>
        <span>{label}</span>
      </div>
    </div>
  );
};
