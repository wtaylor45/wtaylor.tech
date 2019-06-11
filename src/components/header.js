import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.module.css';

const Header = () => (
  <header styleName="container">
    <nav>
      <Link
        activeClassName="active-link"
        styleName="link b1"
        to="/about"
        partiallyActive={true}
      >
        About
      </Link>
      <Link
        activeClassName="active-link"
        styleName="link b2"
        to="/blog"
        partiallyActive={true}
      >
        Blog
      </Link>
      <Link
        activeClassName="active-link"
        styleName="link b3"
        to="/contact"
        partiallyActive={true}
      >
        Conact
      </Link>
      <div styleName="bar1" />
      <div styleName="bar2" />
      <div styleName="bar3" />
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
