import React from 'react';
import {Button,Container,Row,Col,Image} from 'react-bootstrap';
import { CHAT_ROUTE, MAIN_ROUTE } from '../utils/consts';

const Main = () =>{
//Главный экран, пока с 4 кнопками
  return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height:window.innerHeight-54}}>
            <Col xs="auto" md="auto" lg="auto">
              <Row className="justify-content-md-center" xs="auto" md="auto" lg="auto">
                <Col> <Button href={CHAT_ROUTE} style={{height:60,width:230}}>Могу ли я стать самозанятым?</Button></Col>
                <Col> <Button href={MAIN_ROUTE} style={{height:60,width:230}}>Как стать самозанятым и как перестать им быть?</Button></Col>
              </Row>
              <Row className="justify-content-md-center" xs="auto" md="auto" lg="auto" style={{marginTop:5}}>
                <Col> <Button href={MAIN_ROUTE} style={{height:60,width:230}}>Документы для самозанятых</Button></Col>
                <Col> <Button href={MAIN_ROUTE} style={{height:60,width:230}}>Налогообложение и социальные гарантии</Button></Col>
              </Row>
            </Col>
        </Container>
  );
};

export default Main;