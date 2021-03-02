import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import HomeCard from './HomeCard';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
          </Typography>
        </Container>
      </div> */}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'書影ジャンル推論'}
              content={'ラノベの書影画像からジャンルを推論します。'}
              to={'/novel_category'}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
