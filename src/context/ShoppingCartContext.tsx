import { createContext, useState } from 'react';
import { Product } from '../domains/product';

interface ShoppingCartContextProps {
  products: Product[];
  subTotal: number;
  frete: number;
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
  const [subTotal, setSubTotal] = useState(0);
  const [frete, setFrete] = useState(0);

  const addProduct = (product: Product) => {
    setProducts((prevState) => [...prevState, product]);
    setSubTotal(subTotal + product.price);
    setFrete(frete + 10);
  };

  const removeProduct = (productId: number) => {
    const productToRemove = products.find((prod) => prod.id === productId);
    if (!productToRemove) return;
    let removed = false;
    const newProductsArray = products.filter((prod) => {
      if (removed) return true;
      if (!(prod.id != productToRemove.id)) removed = true;
      return prod.id != productToRemove.id;
    });
    setProducts(newProductsArray);
    setSubTotal(Number((subTotal - productToRemove.price).toFixed(2)));
    setFrete(frete >= 10 ? frete - 10 : 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ addProduct, removeProduct, products, subTotal, frete }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
