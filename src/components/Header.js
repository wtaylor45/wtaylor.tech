import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = () => (
  <header>
    <nav>
      <Link id="b1" activeClassName="active-link" className="link" to="/about">
        About
      </Link>
      <Link
        id="b2"
        activeClassName="active-link"
        className="link"
        to="/contact"
      >
        Contact
      </Link>
      <Link
        id="b3"
        activeClassName="active-link"
        className="link"
        to="/contact"
      >
        Blog
      </Link>
      <div className="bar" />
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
