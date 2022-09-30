import { createContext, useState } from 'react';
import { Product } from '../domains/product';

interface ShoppingCartContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
}

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

export const ShoppingCartProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevState) => [...prevState, product]);
  };

  const removeProduct = (productId: number) => {
    const productToRemove = products.find((prod) => prod.id === productId);
    if (!productToRemove) return;
    const newProductsArray = products.filter(
      (prod) => prod.id != productToRemove.id
    );
    setProducts(newProductsArray);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ addProduct, removeProduct, products }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
