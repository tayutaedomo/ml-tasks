import React, { VFC } from 'react';
import styled from 'styled-components';
import { Link, Typography } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/tayutaedomo/ml-tasks"
        target="_blank"
        rel="noopener"
      >
        tayutaedomo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer: VFC = () => {
  return (
    <SFooter>
      <Copyright />
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #fff;
  color: #000;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Footer;
