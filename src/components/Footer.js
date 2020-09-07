import React from 'react';
import { Layout } from 'antd';

/**
 * Component which render Footer content
 */
const Footer = () => {
  const { Footer } = Layout;
  return (
      <React.Fragment>
        <Footer id="footer" style={{ textAlign: 'center' }}>Alba Gómez Pérez ©2020</Footer>
      </React.Fragment>
  );
};

export default Footer;
