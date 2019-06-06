import React from 'react';
import './title.module.css';

export const Title = ({ textAlign, children }) => (
  <h1 styleName="fancy-title" style={{ textAlign: textAlign }}>
    {children}
  </h1>
);
