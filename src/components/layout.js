import React from 'react';
import Header from './header';
import './layout.module.css';

export default function layout({ children }) {
  return (
    <div styleName="container">
      <a styleName="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <div styleName="content" id="content">
        {children}
      </div>
    </div>
  );
}
