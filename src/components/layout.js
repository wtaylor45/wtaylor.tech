import React from 'react';
import './layout.module.css';
import Header from './header';

export default function layout({ children }) {
  return (
    <div styleName="container">
      <a styleName="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <div id="content">{children}</div>
    </div>
  );
}
