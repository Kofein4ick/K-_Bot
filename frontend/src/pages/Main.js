import React, { useEffect, useState } from 'react';
import '../App.css'
import Fader from '../components/Fader';
import {fetchImage} from '../components/Api';
import Loader from '../components/Loader';
import Error_page from './Error_page';
import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';

const Main = () =>{
  document.body.style = 'background: #38b6ff'

  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  const [error,setError]=useState(false)

  useEffect(() => {
    setIsLoaderVisible(true)
    fetchImage().then(data=>setIsLoaderVisible(false)).catch(err => { 
      if (err.response) {
        setError(500)
      } else if (err.request) {
        setError(400) 
      } else { 
        setError(900) 
      } 
    })
  }, [])

const element = error ? Error_page(error) : (isLoaderVisible ? <Loader/> : <Fader src='https://cx15068.tmweb.ru/api/Image/Logo'/>)
  return ( <Container style={{height:window.innerHeight-1}} className="d-flex flex-column justify-content-center align-items-center">
    {element}
    </Container>
  );
};

export default Main;