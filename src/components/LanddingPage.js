import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import animationData from '../animations/landinganimation/data';
import custonSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

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
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
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
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("xs")]: {
      padding: 25
    }
  }
}))

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function heroBlock() {
    return (
    <Grid item> {/*-----Hero Block-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology<br />to the Midwest
            </Typography>
            <Grid 
              container 
              justify="center" 
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
            <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  function custonSofwateBlock() {
    return (
    <Grid item>{/*-----Custon Software Block-----*/}
        <Grid 
          container 
          direction="row" 
          className={classes.serviceContainer}
          justify={ matchesSM ? "center" : undefined }
        >
          <Grid 
            item 
            style={{
               marginLeft: matchesSM ? 0 : "5em",
               textAlign: "center"
            }}
          >
            <Typography variant="h4">Custon Software Development</Typography>
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
            <img 
              className={classes.icon} 
              src={custonSoftwareIcon} 
              alt="custon software icon"
            />
          </Grid>
        </Grid>
      </Grid>
  )}

  function mobileBlock() {
    return (
      <Grid item>{/*-----iOS/Androidf Block-----*/}
        <Grid 
          container 
          direction="row" 
          className={classes.serviceContainer}
          justify={ matchesSM ? "center" : "flex-end" }
        >
          <Grid 
            item 
            style={{
               textAlign: "center"
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web expirience or create a standalone
              app{matchesSM ? null : <br />}with either mobile platform.
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
            <img 
              className={classes.icon}
              src={mobileAppsIcon} 
              alt="mobile phone icon"
              style={{marginRight: matchesSM ? 0 : "5em",}}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  function websiteBlock() {
    return (
      <Grid item>{/*-----Website Block-----*/}
        <Grid 
          container 
          direction="row" 
          className={classes.serviceContainer}
          justify={ matchesSM ? "center" : "flex-start" }
        >
          <Grid 
            item 
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: "center"
            }}
          >
            <Typography variant="h4">WebsiteDevelopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search ENgines, built for speed.
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
            <img 
              className={classes.icon}
              src={websiteIcon} 
              alt="website icon"
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {heroBlock()}
      {custonSofwateBlock()}
      {mobileBlock()}
      {websiteBlock()}

      
    </Grid>
  )
}

