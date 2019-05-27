import React from 'react';
import Layout from '../components/layout';
import './index.css';

const IndexPage = () => (
  <Layout>
    <section className="container">
      <h1 className="title">
        <span className="word">Will</span>
        <span className="word bottom">Taylor</span>
      </h1>
      <h2 className="subtitle">
        Front End Developer{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Tech Enthusiast{' '}
        <span role="img" aria-label="computer">
          🖥
        </span>
      </h2>
    </section>
  </Layout>
);

export default IndexPage;
