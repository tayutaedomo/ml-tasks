import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeCard from './HomeCard';

export default function Home() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <HomeCard
            headline={'書影ジャンル推論'}
            content={'ラノベの書影画像からジャンルを推論します。'}
            to={'/novel_category'}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
