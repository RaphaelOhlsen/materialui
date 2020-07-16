import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down('xs')]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#fff",
    fontWeight: 700,
    fontFamily: "Arial",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  gridItem: {
    padding: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/" onClick={() => props.setValue(0)} item className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          < Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/services" onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} item className={classes.link}>
                Services
              </Grid>
              <Grid component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} item className={classes.link}>
                Custon Software Development
              </Grid>
              <Grid component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} item className={classes.link}>
                Mobile App Development
              </Grid>
              <Grid component={Link} to="/websites" onClick={() => {props.setValue(0); props.setSelectedIndex(3)}} item className={classes.link}>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                The Revolution
              </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Vision
              </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Technology
              </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}> 
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/about" onClick={() => props.setValue(3)} item className={classes.link}>
                About Us 
              </Grid>
              <Grid component={Link} to="/about" onClick={() => props.setValue(3)} item className={classes.link}>
                History
              </Grid>
              <Grid component={Link} to="/about" onClick={() => props.setValue(3)} item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/contact" onClick={() => props.setValue(4)} item className={classes.link}>
                Contact Us 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img 
        src={footerAdornment} 
        alt="black decorative slash"
        className={classes.adornment}  
      />
      <Grid 
        container 
        justify="flex-end" 
        className={classes.socialContainer}
        spacing={2}
      >
        <Grid 
          item component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon}/>
        </Grid>
        <Grid 
          item component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon}/>
        </Grid>
        <Grid 
          item component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon}/>
        </Grid>
      </Grid>
    </footer>      
  )
}