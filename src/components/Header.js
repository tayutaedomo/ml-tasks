import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link color="initial" href="/">
            ML Task Manager
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
