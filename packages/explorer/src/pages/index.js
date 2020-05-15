import React from 'react';
import { Button } from '@react95/core';

import { Layout, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button>Hello world</Button>
  </Layout>
);

export default IndexPage;
