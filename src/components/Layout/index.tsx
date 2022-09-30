import React from 'react';
import styles from './layout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.applicationWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
