import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import './success.module.css';

const Success = () => {
  return (
    <Layout>
      <SEO title="Message Sent" />
      <section styleName="success-container">
        <h1 styleName="title">Thank You</h1>
        Your message was sent! Thanks for reaching out{' '}
        <span role="img" aria-label="smile emoji">
          😄
        </span>
      </section>
    </Layout>
  );
};

export default Success;
