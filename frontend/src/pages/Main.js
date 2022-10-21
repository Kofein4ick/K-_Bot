import React, { useEffect, useState } from 'react';
import '../App.css'
import Fader from '../components/Fader';
import {fetchImage} from '../components/Api';
import Loader from '../components/Loader';
import { Grid } from '@mui/material';

const Main = () =>{
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)

  useEffect(() => {
    setIsLoaderVisible(true)
    fetchImage().then(data=>setIsLoaderVisible(false))
  }, [])

const element = isLoaderVisible ? <Loader/> : <Fader src='https://cx15068.tmweb.ru/api/Image/Logo'/>
  return ( <Grid style={{backgroundColor:'#38b6ff',height:window.innerHeight-1}} container direction={"column"} alignItems={"flex-start"} className="d-flex align-items-center">
    {element}
    </Grid>
  );
};

export default Main;