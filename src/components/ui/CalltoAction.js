import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typorgraphy from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles'; 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 10,
    paddingLeft: 15,
    [theme.breakpoints.down("sm")]: {
      // marginBottom: "2em"
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5rem",
    marginLeft: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: "1.5rem"
    }
  }
}));


export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Grid 
      container 
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid 
        item 
        style={{
          marginLeft: "5em", 
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typorgraphy variant="h2">
              Simple Software.<br />Revolution Results.
            </Typorgraphy>
            <Typorgraphy variant="subtitle2" style={{fontSize: "1.5rem"}}>
              Take advantage of the 21st Century.
            </Typorgraphy>
            <Grid container item justify={matchesSM ? "center" : "inherit"}>
              <Button 
                variant="outlined"
                className={classes.learnButton}
              >
                <span style={{marginRight: 5}}>Learn More</span>
                <ButtonArrow 
                  width={10} 
                  height={10} 
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
    </Grid>
  )
}

