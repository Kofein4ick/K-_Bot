import React, { useEffect, useState } from 'react';
import {Button,Container} from 'react-bootstrap';
import { fetchAnswer} from '../components/Api';
import { Grid} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MAIN_ROUTE,first_message } from '../utils/consts';

const Chat = () =>{
const [messages,setMessage] = useState([])
const [answers,setAnswers] = useState([])
const [visible,setVisible]=useState(false)

useEffect(()=>{fetchs(1,null)},[])

function fetchs(q_id, message){
if(q_id!==null){
fetchAnswer(q_id).then(data=>{
  setAnswers(data.post.answers);
  printMess(data,message,q_id)
})}
else{
  setVisible(true)
  printMess(null,message,q_id)}
  
}

function printMess(data,message,q_id){
  let temp3=[]
  
  if(data!==null){
  let temp2=data.post.answers.map((answer,index)=>{  
    let ans={type:'bot',text:'Ответ '+(index+1)+': '+answer.text,
    secondText:answer.SecondText}
    return ans
  })
  temp2=temp2.reverse()
  temp2.push({type:'bot',text:data.post.quest.text,
  secondText:''})
  if(q_id===1){temp2.push(first_message)}
  temp3=temp2}

  if(message!==null){
    if(message.FinalAnswer!=='')
    {let ans={type:'bot',text:message.FinalAnswer,
    secondText:''}
    temp3.push(ans)}

    let ans={type:'',text:message.text,
    secondText:''}
    temp3.push(ans)
  }
  temp3=temp3.reverse()
  setMessage([...messages,...temp3])
}

const objDiv = document.getElementById("div1");
function prok(){
if(objDiv!==null){ 
  objDiv.scrollTop = objDiv.scrollHeight
 }}  
const final_button=<Button href={MAIN_ROUTE}>Конец</Button>
const answ_buttons = (answers.length!==0) ? answers.map((ans,index)=>{ 
  return <Button key={ans.id} onClick={()=>{
  fetchs(ans.Next_Quest,ans)
  }} 
  style={{marginTop:10,marginLeft:5}}>{index+1}</Button>
  }) : <div>pusto</div>
const buttons = visible===false ? answ_buttons : final_button

function toastMess(message){
  toast.info(message, {position: toast.POSITION.TOP_CENTER})
}

const result2 = messages.length === 0 ? <div>Pusto</div> : messages.map((message,index)=>{
const cnopcka = ((message.type ==='bot')&&(message.secondText!=='')) 
? <Button key={index} className="d-flex align-items-center" size="sm"
onClick={()=>{toastMess(message.secondText)}}>i
</Button> : null

return <Grid  container direction={"string"} alignItems={"flex-start"} className="d-flex align-items-center">
            <div style={{marginTop:10, marginLeft:message.type ==='bot' ? 5 : 'auto' ,
            width:'fit-content',maxWidth:'60vh', border: message.type ==='bot' ? '1px solid #a09eff' : '1px solid #ffabab'}}>
                {message.text}
                {prok()}
            </div>
            <div style={{marginTop:10,marginLeft:5}} className="d-flex align-items-center">
              {cnopcka}

            </div>
        </Grid>
})
  return (
    <Container className="d-flex justify-content-center align-items-center"
    fluid>
        <div xs='auto' md='auto' lg='auto'>
           Здесь будет Семен
        </div>
        <div xs='auto' md='auto' lg='auto'>
            <div id="div1" style={{width:'120vh',height:window.innerHeight-70,
              border:'1px solid #3ab2d6', overflow:'auto'}}>
              {result2}
            </div>
            <div >
              {buttons}
            </div>
        </div>
        <div xs='auto' md='auto' lg='auto'>
          Дополнительная<br/> информация
        </div>
        <ToastContainer />
    </Container>
    
  );
};

export default Chat;