import React, { useState } from 'react';
import Layout from '../components/layout';
import './index.css';

const IndexPage = () => {
  let [animationState, setAnimationState] = useState(true);
  let [clicks, setClickCount] = useState(0);

  const clickHandler = () => {
    console.log(clicks);
    setAnimationState(!animationState);
    setClickCount(++clicks);
  };

  return (
    <Layout>
      <section className="container">
        <h1
          className={
            'title ' +
            (!animationState ? 'paused ' : '') +
            (clicks > 20 ? 'awesome ' : '')
          }
        >
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
        <button
          className={'pause-button ' + (!animationState ? 'paused ' : '')}
          onClick={clickHandler}
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
