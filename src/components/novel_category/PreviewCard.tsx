import React, { VFC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 200,
  },
});

type Props = {
  imageData: string;
  name: string;
};

const PreviewCard: VFC<Props> = (props) => {
  const { imageData, name } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={imageData}
        title={name}
      />
      <CardContent>
        <Typography variant="caption" color="textSecondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
