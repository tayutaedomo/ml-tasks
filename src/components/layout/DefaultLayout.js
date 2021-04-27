import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const theme = createMuiTheme({});

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
      <Footer />
    </MuiThemeProvider>
  );
};

export default DefaultLayout;
