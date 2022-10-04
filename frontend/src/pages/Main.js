import React, { useState } from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import { CHAT_ROUTE, MAIN_ROUTE } from '../utils/consts';
import {Link } from 'react-router-dom';

const Main = () =>{
const [buts, setBut] = useState([1, 2, 3, 4, 5])
const [messages,setMessage] = useState([])

async function sendMessage(index){
  setMessage([...messages,index])
}

//const result = buts.map((but,index)=>{
//return <Button key={index} onClick={()=>sendMessage(index)} style={{marginTop:10,marginLeft:5}} variant={"contained"}>Zdarova {but}</Button>
//})
//const result2 = messages.map((message)=>{
 // return <div>{message}</div>
//})
//var objDiv = document.getElementById("div1");
//function prok(){
//if(objDiv!=null){
  //objDiv.scrollTop = objDiv.scrollHeight}}
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