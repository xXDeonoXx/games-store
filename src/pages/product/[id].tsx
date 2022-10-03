import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Button } from '../../components/atoms/Button';
import ProductImage from '../../components/atoms/ProductImage';
import Layout from '../../components/Layout';
import CartView from '../../components/organisms/CartView';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { Product } from '../../domains/product';
import { getOneProduct, getProducts } from '../../services/api';
import styles from '../../styles/pages/ProductPage.module.scss';

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const router = useRouter();
  const { addProduct } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.productWrapper}>
          <div className={styles.imageWrapper}>
            <h1>{product.name}</h1>
            <div className={styles.imageContainer}>
              <ProductImage image={`${product.image}`} />
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>R$ {product.price}</p>
            <div className={styles.buttonWrapper}>
              <Button
                onClick={() => {
                  addProduct(product);
                }}
                label='Adicionar ao Carrinho'
              />
              <Button
                onClick={() => {
                  router.push('/');
                }}
                outline
                label='Voltar'
              />
            </div>
          </div>
        </div>
        <div>
          <CartView />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const products = getProducts();
  const paths = products.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const product = getOneProduct(params.id);
  return {
    props: {
      product,
    },
    // Revalidate and regenerate this static page after 30 minutes
    revalidate: 1800,
  };
}
