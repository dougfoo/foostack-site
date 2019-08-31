import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import WifiIcon from '@material-ui/icons/Wifi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        FooStack.Ai
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const galleryInfo = [
  {
    heading: 'Crime Statistics',
    text: 'Homicide Crime Statistics (Python/Django + Altair)',
    imageLink: 'https://source.unsplash.com/random?1',
    viewLink: 'http://clt-homicide.foostack.ai/chart/',
  },
  {
    heading: 'Ski Planning',
    text: 'Plan your ski holiday based on weather statistics (React + D3 (Victory) and Spark/DataBricks)',
    imageLink: 'https://source.unsplash.com/random?2',
    viewLink: 'http://ski-forecast.foostack.ai/',
  },
  {
    heading: 'Diamond Pricing',
    text: 'Price your diamond on the 4C and more (Azure Machine Learning)',
    imageLink: 'https://source.unsplash.com/random?3',
    viewLink: 'http://diamonds.foostack.ai/',
  },
]

export default function FooStack() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <WifiIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            FooStack.Ai
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              FooStack.Ai
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              FooStack focuses on a proper full stack solution, weaving technologies together
              such as Javascript/React, Python/Django, Cloud/Azure, ML Libraries like Sckit/PyTorch,
              data prep pipelines and storage (SQL, Hadoop, Snowflake, etc)). 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Full Stack Solutions
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    About FooStack
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {galleryInfo.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imageLink}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.viewLink} >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          FooStack Data Science
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Full stack data science architecture and design
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
