import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header styleName="container">
    <nav>
      <Link activeClassName="active-link" styleName="link b1" to="/about">
        About
      </Link>
      <Link activeClassName="active-link" styleName="link b2" to="/contact">
        Contact
      </Link>
      <Link activeClassName="active-link" styleName="link b3" to="/blog">
        Blog
      </Link>
      <div styleName="bar" />
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
