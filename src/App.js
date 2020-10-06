import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import './App.css';
import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  media: {
    height: 256,
    width: 256,
    borderRadius: '50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    backgroundColor: "lightblue",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardMedia 
          className={classes.media}
          image="https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/21557840_1762984680667565_203595022662509476_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=rCeoKJ_t4r0AX-VR1sl&_nc_ht=scontent.fhph1-1.fna&oh=ffea7da0f6919de9e5858afc424f3134&oe=5FA16090" title="Dương Thái Minh"/>

        <CardContent className={classes.details}>
          <Typography className={classes.name}>Dương Thái Minh</Typography>
          <Typography>Info</Typography>
          <Typography>Info 2</Typography>
          <Typography>Info 3</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
