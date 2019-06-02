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
          Hi, I'm Will! I'm a font end developer who's passionate about creating
          awesome experiences for all users. Over the past year, I've become
          addicted to learning more about becoming a better developer and
          communicator. Wether it's diving into the world of accessibility,
          color theory, or the latest framework, I'm always looking for new
          things to learn.
        </p>
        <p>
          I'm currently located in the Washington, D.C. area working for
          Inspire. There, I'm helping the team with things ranging from SEO, to
          building greenfield projects using the latest and greatest technology.
          Through this experience I've been learning a lot, and I've been trying
          my best to{' '}
          <a
            styleName="inline-link"
            href="https://www.swyx.io/writing/learn-in-public/"
          >
            learn in public
          </a>{' '}
          (so check out my twitter!).
        </p>
      </section>
    </div>
  </Layout>
);

export default About;
