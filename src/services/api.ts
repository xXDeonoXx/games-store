import products from '../../products.json';

export function getProducts() {
  return products;
}

export function getOneProduct(productId: number) {
  return products.find((prod) => prod.id == productId);
}
