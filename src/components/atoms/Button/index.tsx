import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  label: string;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, outline }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={outline ? styles.outline : styles.wrapper}>
        <span>{label}</span>
      </div>
    </div>
  );
};
