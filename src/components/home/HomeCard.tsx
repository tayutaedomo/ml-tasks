import React, { ReactNode, VFC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

type Props = {
  headline: string;
  content: string | ReactNode;
  to: string;
};

const HomeCard: VFC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Link underline="none" component={RouterLink} to={props.to}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.headline}
          </Typography>
          <Typography>{props.content}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HomeCard;
