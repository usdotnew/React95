import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import * as react95 from '@react95/core';

import { Layout } from '../components';

const { ThemeProvider, GlobalStyle, ...React95Components } = react95;
const components = { Link, ...React95Components };

function ComponentTemplate({
  data: {
    mdx: { body },
  },
}) {
  return (
    <Layout>
      <div>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
}

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`;

export default ComponentTemplate;
