import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../animations/landinganimation/data';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({

}))


export default function components() {
  // const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
}

