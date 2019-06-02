import React from 'react';
import './layout.module.css';
import Header from './header';

export default function layout({ children }) {
  return (
    <div styleName="container">
      <Header />
      {children}
    </div>
  );
}
