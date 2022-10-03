import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import { Button } from '../../atoms/Button';
import LabelWithValue from '../../atoms/LabelWithValue';
import styles from './CartPricing.module.scss';

const CartPricing = () => {
  const { products, subTotal, frete } = useContext(ShoppingCartContext);

  if (!products.length) return <></>;

  return (
    <>
      <div className={styles.container}>
        <LabelWithValue label='subtotal' price={subTotal} />
        <LabelWithValue label='frete' price={subTotal > 250 ? 0 : frete} />
        <LabelWithValue label='total' price={subTotal + frete} bigPrice />
      </div>
      <Button
        label='finalizar compra'
        onClick={() => {
          alert('Compra finalizada com sucesso');
        }}
      />
    </>
  );
};

export default CartPricing;
