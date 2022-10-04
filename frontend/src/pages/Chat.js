import React, { useState } from 'react';
import {Button,Container,Col} from 'react-bootstrap';

const Chat = () =>{
const [buts, setBut] = useState([1, 2, 3, 4, 5])
const [messages,setMessage] = useState([])

function sendMessage(index){
  let message={type:'', text:''}
  message.type = (index%2) === 0 ? 'bot' : 'user'
  message.text = 'Была нажата кнопка: ' + (index+1)
  setMessage([...messages, message])
}

const result = buts.map((but,index)=>{
return <Button key={index} onClick={()=>sendMessage(index)} style={{marginTop:10,marginLeft:5}}>{but}</Button>
})
const result2 = messages.map((message)=>{
  return <div style={{margin:10, marginLeft:message.type ==='bot' ? 'auto'  : 10,
  width:'fit-content'}}>
            {message.text}
        </div>
})
var objDiv = document.getElementById("div1");
function prok(){
if(objDiv!=null){
  objDiv.scrollTop = objDiv.scrollHeight}}
  return (
    <Container className="d-flex justify-content-center align-items-center"
    fluid>
        <Col xs="auto" md="auto" lg="auto">
           Здесь будет Семен
        </Col>
        <Col xs="auto" md="auto" lg="auto">
          <Container>
              <Col>
                <div id="div1" style={{width:'120vh',height:window.innerHeight-70,
                border:'1px solid #3ab2d6', overflow:'auto'}}>
                  {result2}
                  {prok()}
                </div>
                <div alignItems={"flex-start"}>{result}</div>
              </Col>
          </Container>
        </Col>
        <Col xs="auto" md="auto" lg="auto">
          Ссылки
        </Col>
    </Container>
  );
};

export default Chat;