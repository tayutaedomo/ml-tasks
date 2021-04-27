import React, { VFC } from 'react';
import { useHistory } from 'react-router';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: VFC = () => {
  const history = useHistory();

  const onLinkClick = () => {
    history.push('/');
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <div style={{ cursor: 'pointer' }} onClick={onLinkClick}>
            ML Task Manager
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
