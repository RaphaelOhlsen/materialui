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
    height: "245px",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "206px"
    },
    [theme.breakpoints.down('xs')]: {
      height: "147px"
    }
  },
  adornment: {
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down('xs')]: {
      width: "15em"
    }
  },
  wrapAdornment: {
    height: "inherit",
  },
  link: {
    color: "#fff",
    fontWeight: 700,
    fontFamily: "Arial",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  footerNav: {
    paddingTop: "3em",
    paddingLeft: "0",
  },
  gridItem: {
    paddingRight: "3em",
    // paddingBottom: 0
    "&:last-child": {
      paddingRight: 0
    }
  },
  icon: {
    height: "4em",
    width: "4m",
    [theme.breakpoints.down("md")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    margin: 0,
    height: "100%",
    width: "100%"
  }
  
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer style={{ width: "100%", height: "2rem", backgroundColor: "red" }}>
      My Example Footer
      {/* <Grid 
        container 
        style={{}} 
        className={classes.footer}
      >
        <Grid item className={classes.wrapAdornment}>
          <img 
          className={classes.adornment}  
          src={footerAdornment} 
          alt="black decorative slash"
          />
        </Grid>
        <Grid item sm>
          <Grid container className={classes.footerNav}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid 
                  component={Link}
                  to="/" 
                  onClick={() => props.setValue(0)} item className={classes.link}>
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item 
                    className={classes.link}
                    component={Link}
                    to="/services"
                    onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}
                  >
                    Services
                  </Grid>
                  <Grid 
                    item
                    className={classes.link}
                    component={Link}
                    to="/customsoftware"
                    onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
                  >
                    Custon Software Development
                  </Grid>
                  <Grid 
                    item 
                    className={classes.link}
                    component={Link} 
                    to="/mobileapps" 
                    onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                  >
                    iOS/Android App Development
                  </Grid>
                  <Grid 
                    item 
                    className={classes.link}
                    component={Link} 
                    to="/websites" 
                    onClick={() => {props.setValue(0); props.setSelectedIndex(3)}} 
                  >
                    Website Development
                  </Grid>
                </Grid>
              </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid 
                  item 
                  className={classes.link}
                  component={Link} 
                  to="/revolution" 
                  onClick={() => props.setValue(2)} 
                >
                  The Revolution
                </Grid>
                <Grid 
                  item 
                  component={Link}
                  to="/revolution" 
                  onClick={() => props.setValue(2)} 
                  className={classes.link}
                >
                  Vision
                </Grid>
                <Grid 
                  item 
                  className={classes.link}
                  component={Link} 
                  to="/revolution" 
                  onClick={() => props.setValue(2)} 
                >
                  Technology
                </Grid>
                <Grid 
                  item 
                  className={classes.link}
                  component={Link} 
                  to="/revolution" 
                  onClick={() => props.setValue(2)} 
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}> 
                <Grid container direction="column" spacing={2}>
                  <Grid 
                    item 
                    className={classes.link}
                    component={Link} 
                    to="/about" 
                    onClick={() => props.setValue(3)} 
                  >
                    About Us 
                  </Grid>
                  <Grid 
                    item 
                    className={classes.link}
                    component={Link} 
                    to="/about" 
                    onClick={() => props.setValue(3)} 
                  >
                    History
                  </Grid>
                  <Grid 
                    item 
                    className={classes.link}
                    component={Link} 
                    to="/about" 
                    onClick={() => props.setValue(3)} 
                  >
                    Team
                  </Grid>
                </Grid>
              </Grid>
            <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid 
              item 
              className={classes.link}
              component={Link} 
              to="/contact" 
              onClick={() => props.setValue(4)}
            >
              Contact Us 
            </Grid>
          </Grid>
        </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid 
            container 
            className={classes.socialContainer}
            alignItems="flex-end"
            spacing={2}
          >
            <Grid 
              item 
              component={"a"}
              href="http://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={facebook} alt="facebook logo" className={classes.icon}/>
            </Grid>
            <Grid 
              item 
              component={"a"}
              href="http://www.twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={twitter} alt="twitter logo" className={classes.icon}/>
            </Grid>
            <Grid 
              item 
              component={"a"}
              href="http://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={instagram} alt="instagram logo" className={classes.icon}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </footer>      
  )
}