import React, { useState } from 'react';
import { Title } from '../components/title';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import './index.module.css';

const IndexPage = () => {
  let [animationState, setAnimationState] = useState(true);
  let [clicks, setClickCount] = useState(0);

  const clickHandler = () => {
    setAnimationState(!animationState);
    setClickCount(++clicks);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <section styleName="container">
        <Title>
          <span
            styleName={
              (!animationState ? 'paused ' : '') +
              (clicks > 20 ? 'awesome ' : '')
            }
          >
            <span styleName="word">Will</span>
            <span styleName="word bottom">Taylor</span>
          </span>
        </Title>
        <h2 styleName="subtitle">
          Front End Developer{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
          Tech Enthusiast{' '}
          <span role="img" aria-label="computer">
            🖥
          </span>
        </h2>
        <button
          styleName={'pause-button ' + (!animationState ? 'paused ' : '')}
          onClick={clickHandler}
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
