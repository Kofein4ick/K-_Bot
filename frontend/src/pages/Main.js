import React, { useState } from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import { CHAT_ROUTE, MAIN_ROUTE } from '../utils/consts';
import {Link } from 'react-router-dom';

const Main = () =>{
//Главный экран, пока с 4 кнопками
  return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height:window.innerHeight-54}}>
            <Col xs="auto" md="auto" lg="auto">
              <Row className="justify-content-md-center" xs="auto" md="auto" lg="auto">
                <Col> <Button href={CHAT_ROUTE} style={{height:40,width:120}}>Go To Chat</Button></Col>
                <Col> <Button href={MAIN_ROUTE} style={{height:40,width:120}}>Go To 2</Button></Col>
              </Row>
              <Row className="justify-content-md-center" xs="auto" md="auto" lg="auto" style={{marginTop:5}}>
                <Col> <Button href={MAIN_ROUTE} style={{height:40,width:120}}>Go To 3</Button></Col>
                <Col> <Button href={MAIN_ROUTE} style={{height:40,width:120}}>Go To 4</Button></Col>
              </Row>
            </Col>
        </Container>
  );
};

export default Main;