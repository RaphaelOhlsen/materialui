import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from '../components/ui/ButtonArrow';


import animationData from '../animations/landinganimation/data';
import custonSoftwareIcon from '../assets/Custom Software Icon.svg';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
    fontSize: "0.9rem"
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: "0.7rem",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  }
}))

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item> {/*-----Hero Block-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology<br />to the Midwest
            </Typography>
            <Grid 
              container 
              justify="center" 
              alignItems="center" 
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button 
                  variant="contained"
                  className={classes.estimateButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow 
                    width={15} 
                    height={15} 
                    fill={theme.palette.common.blue} 
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{/*-----Services Block-----*/}
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h4">
              Custon Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money. 
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution, from ivestigation to{"  "} 
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{marginRight: 10}}>Learn More</span>
              <ButtonArrow 
                width={10} 
                height={10} 
                fill={theme.palette.common.blue} 
              />
            </Button>
          </Grid>
          <Grid item>
            <img src={custonSoftwareIcon} alt="custon software icon"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

