import type { NextPage } from 'next';
import SelectInput from '../components/atoms/SelectInput';
// import SelectInput from '../components/atoms/SelectInput';
import Layout from '../components/Layout';
import CartView from '../components/organisms/CartView';
import ProductCard from '../components/organisms/ProductCard';
import { getProducts } from '../services/api';
import styles from '../styles/pages/Home.module.scss';

interface HomePageProps {
  products: [];
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.productsWrapper}>
            <div className={styles.header}>
              <h1 className={styles.title}>Games</h1>
              <div className={styles.filterWrapper}>
                <SelectInput />
              </div>
            </div>
            <div className={styles.productList}>
              {products.map((product, index) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
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
    revalidate: 1,
  };
}
