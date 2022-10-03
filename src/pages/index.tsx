import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import SelectInput from '../components/atoms/SelectInput';
// import SelectInput from '../components/atoms/SelectInput';
import Layout from '../components/Layout';
import ProductList from '../components/molecules/ProductList';
import CartView from '../components/organisms/CartView';
import ProductCard from '../components/organisms/ProductCard';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Product } from '../domains/product';
import { getProducts } from '../services/api';
import styles from '../styles/pages/Home.module.scss';

interface HomePageProps {
  products: Product[];
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  const orderByOptions = [
    { label: 'Mais populares', value: 'popularity' },
    { label: 'Preço', value: 'price' },
    { label: 'Ordem alfabética', value: 'alphabetic' },
  ];
  const [orderBy, setOrderBy] = useState('popularity');

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.productsWrapper}>
            <div className={styles.header}>
              <h1 className={styles.title}>Games</h1>
              <div className={styles.filterWrapper}>
                <SelectInput
                  onChange={(e) => {
                    setOrderBy(e.currentTarget.value);
                  }}
                  options={orderByOptions}
                />
              </div>
            </div>
            <ProductList products={products} orderBy={orderBy} />
          </div>
          <CartView />
        </section>
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  const products = getProducts();
  return {
    props: {
      products,
    },
    // Revalidate and regenerate this static page after 30 minutes
    revalidate: 1800,
  };
}
