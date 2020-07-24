import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CalltoAction';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

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
    padding: 10,
    paddingLeft: 15,
    marginTop: "1em",
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  buttonInfo: {
    ...theme.typography.learnButton,
    color: "#fff",
    borderColor: "#fff",
    height: 35,
    padding: 5,
    marginTop: "1em",
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
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")] : {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    }
  }, 
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}))

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
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
      <Grid item> 
      {/*-----Block Hero-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid 
              container 
              justify="center" 
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button 
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined" 
                  className={classes.learnButtonHero}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
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
      <Grid item>
        {/*-----Custon Software Block-----*/}
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
            <Button 
              variant="outlined" 
              className={classes.learnButton}
              component={Link}
              to="/customsoftware"
              onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
            >
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
              src={customSoftwareIcon} 
              alt="custon software icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Mobile Block-----*/}
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
            <Button 
              variant="outlined" 
              className={classes.learnButton}
              component={Link}
              to="/mobileapps"
              onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
              >
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
      <Grid item>
        {/* Website Block */}
        <Grid 
          container 
          direction="row" 
          className={classes.serviceContainer}
          justify={ matchesSM ? "center" : "flex-start" }
          style={{padding: matchesXS ? 0 : 25 }}
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
          <Button 
            variant="outlined" 
            className={classes.learnButton}
            component={Link}
            to="/websites"
            onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
          >
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
      <Grid item>
        {/* The Revolution Block */}
        <Grid 
          container 
          style={{height: "100em", marginTop: "12em"}} 
          alignItems="center" 
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container 
                direction="column" 
                style={{textAlign: "center"}}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" >
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button 
                    className={classes.learnButtonHero}
                    variant="outlined" 
                    component={Link}
                    to="/revolution"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow 
                      width={15} 
                      height={15} 
                      fill={theme.palette.common.blue} 
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}/>
        </Grid>
      </Grid>
      <Grid item>
       {/*-----Information Block-----*/}
        <Grid 
          container 
          style={{height: "80em"}} 
          alignItems="center"
          direction="row"
          className={classes.infoBackground}
        >
          <Grid 
            item 
            container 
            style={{
              textAlign: matchesSM ? "center" : "inherid",
            }}
            direction={matchesXS ? "column" : "row" }
          >
            <Grid 
              item sm 
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5rem", 
                textAlign: matchesXS ? "center" : "left",
                marginBottom: matchesXS ? "1em" : 0,
              }}>
              <Grid 
                container 
                style={{marginBottom: matchesXS ? "10em" : 0}} 
                direction="column"
              >
                <Typography variant="h2" style={{color: "#fff"}}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">
                  Let's get personal
                </Typography>
                <Grid item>
                  <Grid item>
                    <Button 
                      variant="outlined" 
                      style={{color:"#fff", borderColor: "#fff"}}
                      className={classes.learnButton}
                      component={Link}
                      to="/about"
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow 
                        width={10} 
                        height={10} 
                        fill="#fff"
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid 
              item sm 
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5rem", 
                textAlign: matchesXS ?  "center": "right"
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{color: "#fff"}}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!
                </Typography>
                <Grid item>
                  <Grid item>
                    <Button 
                      variant="outlined" 
                      style={{color:"#fff", borderColor: "#fff"}}
                      className={classes.learnButton}
                      component={Link}
                      to="/contact"
                      onClick={() => props.setValue(4)}
                    >
                      <span style={{marginRight: 10}}>Learn More</span>
                      <ButtonArrow 
                        width={10} 
                        height={10} 
                        fill="#fff"
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item> 
        <CallToAction setValue={props.setValue}/>
      </Grid>
    
    
    </Grid>
  )
}

