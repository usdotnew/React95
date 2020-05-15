import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, GlobalStyle } from '@react95/core';

const Layout = ({ children }) => (
  <ThemeProvider>
    <GlobalStyle />
    <main>{children}</main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
