import React, { useEffect, useState } from 'react';
import {Button,Container,Col} from 'react-bootstrap';
import { fetchAnswer, fetchQuest } from '../components/Api';

const Chat = () =>{
const [buts, setBut] = useState([1, 2, 3, 4, 5])
const [messages,setMessage] = useState([])
const[answ,setAnsw]= useState([])


useEffect(()=>{fetchAnswer(1).then(data=>setAnsw(data.post))
  fetchQuest(1).then(data=>printMessage(data.post))
}, [])


function printMessage(data){
  console.log(data)
  let message={type:'bot', text:data.text}
  setMessage([...messages, message])
}

function pasteAnsw(){
  let temp=[]
  answ.map((ans,index)=>{
  temp=[...temp,{type:'bot',text:ans.text}]})
}
const result = answ.map((ans,index)=>{
return <Button key={ans.id} style={{marginTop:10,marginLeft:5}}>{index+1}
</Button>
})

const result2 = messages.map((message)=>{
  return <div style={{margin:10, marginLeft:message.type ==='bot' ? 10 : 'auto' ,
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
                <div id="div1" style={{width:'120vh',height:window.innerHeight-70,
                border:'1px solid #3ab2d6', overflow:'auto'}}>
                  {result2}
                  {pasteAnsw()}
                  {prok()}
                </div>
                <div >{result}</div>

          </Container>
        </Col>
        <Col xs="auto" md="auto" lg="auto">
          Ссылки
        </Col>
    </Container>
  );
};

export default Chat;