import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function LegalPage({ title, children }) {
  return (
    <Layout title={title}>
      <main>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </Layout>
  );
}
