import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title }) => {
  return (
    <Helmet title={title} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <meta name="description" content="Portoflio website modified by Mate Machitidze. Designed & built by Brittany Chiang" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
};

Head.defaultProps = {
  title: null,
};
