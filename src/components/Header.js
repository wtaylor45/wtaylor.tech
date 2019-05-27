import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = () => (
  <header>
    <nav>
      <Link activeClassName="active-link" className="link" to="/about">
        About
      </Link>
      <Link activeClassName="active-link" className="link" to="/contact">
        Contact
      </Link>
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
