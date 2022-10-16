import React from 'react';
import {Button,Container,Row,Col,Image} from 'react-bootstrap';
import { CHAT_ROUTE, MAIN_ROUTE } from '../utils/consts';
import '../App.css'
import Fader from '../components/Fader';

const Main = () =>{
//Главный экран, пока с 4 кнопками
  return (
            <Fader src='http://localhost:8000/api/Image/Logo'/>
  );
};

export default Main;