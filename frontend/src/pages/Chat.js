import React, { useEffect, useState } from 'react';
import {Button,Container,Col} from 'react-bootstrap';
import { fetchAnswer} from '../components/Api';
import {Grid} from '@mui/material';

const Chat = () =>{
const [messages,setMessage] = useState([])
const [question,setQuestion] = useState([])
const [answers,setAnswers] = useState([])

useEffect(()=>{fetchs(1)},[])
function fetchs(q_id){
fetchAnswer(q_id).then(data=>{
  setQuestion(data.post.quest);
  setAnswers(data.post.answers);
  let temp2=data.post.answers.map((answer,index)=>{  
    let ans={id:data.post.answers.id, type:'bot',text:'Ответ '+(index+1)+': '+answer.text}
    return ans
  })
  temp2=temp2.reverse()
  temp2.push({type:'bot',text:data.post.quest.text})
  const temp3=temp2.reverse()
  setMessage(temp3)
})
}
let objDiv = document.getElementById("div1");
function prok(){
if(objDiv!==null){ 
  objDiv.scrollTop = objDiv.scrollHeight
 }}  
prok()

const result = answers.length!==0 ? answers.map((ans,index)=>{ 
  return <Button key={ans.id} onClick={()=>{
  let f_ans=answers.find(el=>el.id===ans.id)
  setMessage([...messages,f_ans])
  }} 
  style={{marginTop:10,marginLeft:5}}>{index+1}</Button>
  }) : <div>pusto</div>
const result2 = messages.length === 0 ? <div>Pusto</div> : messages.map((message,index)=>{
const cnopcka= message.type ==='bot' ? <Button className="d-flex align-items-center" size="sm">i</Button> : null
return <Grid  container direction={"string"} alignItems={"flex-start"} className="d-flex align-items-center">
            <div key={index} style={{marginTop:10, marginLeft:message.type ==='bot' ? 5 : 'auto' ,
            width:'fit-content',border: message.type ==='bot' ? '1px solid #a09eff' : '1px solid #ffabab'}}>
                {message.text}
            </div>
            <div style={{marginTop:10,marginLeft:5}} className="d-flex align-items-center">
                {cnopcka}
            </div>
        </Grid>
})
  return (
    <Container className="d-flex justify-content-center align-items-center"
    fluid>
        <Col xs='auto' md='auto' lg='auto'>
           Здесь будет Семен
        </Col>
        <Col xs='auto' md='auto' lg='auto'>
            <div id="div1" style={{width:'120vh',height:window.innerHeight-70,
              border:'1px solid #3ab2d6', overflow:'auto'}}>
              {result2}
            </div>
            <div >
              {result}
            </div>
        </Col>
        <Col xs='auto' md='auto' lg='auto'>
          Ссылки
        </Col>
    </Container>
  );
};

export default Chat;