import React, { useEffect, useState } from 'react';
import '../App.css'
import Fader from '../components/Fader';
import {fetchImage} from '../components/Api';
import Loader from '../components/Loader';
import { Grid } from '@mui/material';

const Main = () =>{
  document.body.style = 'background: #38b6ff'

  const [isLoaderVisible, setIsLoaderVisible] = useState(false)

  useEffect(() => {
    setIsLoaderVisible(true)
    fetchImage().then(data=>setIsLoaderVisible(false))
  }, [])

const element = isLoaderVisible ? <Loader/> : <Fader src='https://cx15068.tmweb.ru/api/Image/Logo'/>
  return ( <Grid container style={{height:window.innerHeight-1}} className="d-flex flex-column justify-content-center align-items-center">
    {element}
    </Grid>
  );
};

export default Main;