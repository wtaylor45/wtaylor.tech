import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import './about.module.css';
import bitmoji from '../images/bitmoji.png';

const About = () => (
  <Layout>
    <div styleName="container">
      <Title textAlign="center">
        <span styleName="title">About Me</span>
      </Title>
      <section>
        <p>
          Hi, I'm Will! I'm a font end developer who works mostly in JavaScript.
          I'm currently located in the Washington, D.C. area working for
          Inspire. I've been programming since I was 12, and have been working
          on web tech for the past 3 years.
        </p>
      </section>
    </div>
  </Layout>
);

export default About;
