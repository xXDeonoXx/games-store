import React from 'react';
import styles from './SelectInput.module.scss';

interface SelectInputProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ onChange, options }) => {
  return (
    <select onChange={onChange} className={styles.select} name='' id=''>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
