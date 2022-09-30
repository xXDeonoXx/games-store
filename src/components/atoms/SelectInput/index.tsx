import React from 'react';
import styles from './SelectInput.module.scss';

const SelectInput: React.FC = () => {
  return (
    <select className={styles.select} name='' id=''>
      <option value=''>Mais populares</option>
    </select>
  );
};

export default SelectInput;
