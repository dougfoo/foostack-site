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
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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
  root: {
    flexGrow: 1,
  },  
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
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
  media: {
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    text: 'Price your diamond on the 4Cs and more (Azure Machine Learning)',
    imageLink: 'https://source.unsplash.com/random?3',
    viewLink: 'http://diamonds.foostack.ai/',
  },
]

const stackInfo = [
  {
    heading: 'Visualization',
    text: 'Javascript React + D3.js based Charting',
    imageLink: 'https://source.unsplash.com/random?1',
  },
  {
    heading: 'App Server',
    text: 'Python Django, Express.js on Azure Hosting',
    imageLink: 'https://source.unsplash.com/random?2',
  },
  {
    heading: 'Machine Learning & Analytics',
    text: 'Scikit-Learn + Deep Learning frameworks (PyTorch, TensorFlow, Spark, AzureML)',
    imageLink: 'https://source.unsplash.com/random?3',
  },
  {
    heading: 'Data Management',
    text: 'MySQL, Hadoop, Oracle to hosted solutions on Azure (Hadoop/HDFS, Cloud SQL, Snowflake)',
    imageLink: 'https://source.unsplash.com/random?4',
  },
  {
    heading: 'Integrated CI/CD Env',
    text: 'Get started with a full Agile & CI/CD environment using Azure Pipelines, DevOps Scrum/Kanban and Docker containers',
    imageLink: 'https://source.unsplash.com/random?5',
  },
]

export default function FooStack() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dialogHeader = "Contact Placeholder";
  const dialogBody = "Placeholder for Contact Form w/ Captcha";
  const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter >

    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <WifiIcon className={classes.icon} onClick={() => { document.location.href = '/'; }}>
          </WifiIcon>
          <Link variant="h6" className={classes.title} color="inherit" href="/">
            FooStack.Ai
          </Link>
          <Button color="inherit" onClick={handleClickOpen}>Contact</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth={true}
        PaperProps={{
          style: {
            backgroundColor: '#d4d7dd',
            boxShadow: '3',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{dialogHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Hero unit */}
        <Route exact path="/about" render={() => (
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                FooStack.Ai Origins and History
              </Typography>
              <CardMedia
                  className={classes.media}
                  image='https://source.unsplash.com/random?8'
              />
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                The word "Foo" has a storied history in computer science from the 50's at MIT and the 70's with origins of C and Unix 
                (K&apos;R).   Foo and bar are common first variables used -- bit of a tech/geek history and play on words.
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>              
                 Doug Foo started coding in Jr High on the Apple II and TRS 80, writing his first adventure games.
                 Since then he has been a DevOps engineer (before they called it DevOps), DBA and designer,
                 Software developer, System architect, Data Scientist, Development and Program manager, and a Sr Executive.
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>              
                 Doug is one of the few true "full stack" developers who can code front end in React/JS,
                 backend in Java/Python/C++, build/design SQL and NoSQL databases, implement Machine Learning Models,
                 and setup the entire Agile &apos; DevOps CI/CD Pipeline from scratch.
              </Typography>
            </Container>
          </div>
        )} />
        <Route exact path="/stack" render={() => (
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Best of breed full stack components for Data Science.
            </Typography>
            <Grid container spacing={4}>
              {stackInfo.map(card => (
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
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )} />
        <Route exact path="/" render={() => (
          <main>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  FooStack.Ai
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  FooStack defines a "Full" Data Science stack, weaving technologies together best of breed tech
                  at each layer.  GUI/Presentation, Server logic, Machine Learning, Data Prep and Management</Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" component={AdapterLink} to="/stack">
                        Full Stack Solutions
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary" component={AdapterLink} to="/about">
                        About Foo
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
        )}/>   
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
    </BrowserRouter>

  );
}
