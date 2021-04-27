import React, { ReactNode, VFC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

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
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.headline}
        </Typography>
        <Typography>{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={props.to}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
