import React, { VFC } from 'react';
import { Box, Grid } from '@material-ui/core';

import HomeCard from './HomeCard';

const Home: VFC = () => {
  return (
    <Box pt={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <HomeCard
            headline={'書影ジャンル推論'}
            content={'ラノベの書影画像からジャンルを推論します。'}
            to={'/novel_category'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
