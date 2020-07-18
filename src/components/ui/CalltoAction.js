import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typorgraphy from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 10,
    paddingLeft: 15,
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
}));


export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typorgraphy variant="h2">
              Simple Software.<br />Revolution Results.
            </Typorgraphy>
            <Typorgraphy variant="subtitle2">
              Take advantage of the 21st Century.
            </Typorgraphy>
            <Grid container item>
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
    </Grid>
  )
}

