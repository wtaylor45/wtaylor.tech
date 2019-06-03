import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import './about.module.css';
import bitmoji from '../images/bitmoji.png';

const About = () => (
  <Layout>
    <div styleName="container">
      <h1 styleName="title">About Me</h1>
      <section styleName="text">
        <p>
          Hi, I'm Will! I'm a <b>Front End Developer</b> who's passionate about
          creating awesome experiences for all users. Over the past year, I've
          become addicted to learning more about becoming a better developer and
          communicator. Whether it's diving into the world of accessibility,
          color theory, or whatever the latest framework is, I'm always looking
          for the next challenge.
        </p>
        <p>
          I'm currently located in the Washington, D.C. area working for
          Inspire. There, I'm helping the team with anything ranging from SEO,
          to building greenfield projects using the latest and greatest
          technology. Through this experience I've been learning a lot, and I've
          been trying my best to{' '}
          <a
            styleName="inline-link"
            href="https://www.swyx.io/writing/learn-in-public/"
          >
            learn in public
          </a>{' '}
          (so{' '}
          <a styleName="inline-link" href="https://twitter.com/NoThisIsWill">
            check out my twitter
          </a>
          !).
        </p>
      </section>
    </div>
  </Layout>
);

export default About;
