import React, { useEffect, useState } from 'react';
import {Button,Container,Alert} from 'react-bootstrap';
import { fetchAnswer} from '../components/Api';
import { Grid} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { first_message,last_message,themes,test_first_message } from '../utils/consts';

const Chat = () =>{
const [messages,setMessage] = useState([]) //стейт, хранящий все сообщения
const [flag,setFlag]=useState(false)//вспомогательный стейт для useEffect
const [show, setShow] = useState([false,false,false]);

useEffect(()=>{//При загрузке странице делаем один раз запрос на получение первого вопроса и его ответов
  if(flag===false)
    {
      fetchs(0,first_message)
      setFlag(true)
    }
    const objDiv = document.getElementById("div1");//прокрутка скролла вниз, чтобы новые сообщения были видны всегда
    if(objDiv!==null){ 
      objDiv.scrollTop = objDiv.scrollHeight
     }
  })

function fetchs(q_id, message){
if(q_id!==null){
  if(q_id<=0){
    switch(q_id){
      case -1:
        fetchs(1,message)
        break
      case -2:

        break
      case -3:

        break
      case -4:

        break
      case -5:

        break
      case 0:
        printMess(null,message,q_id)
        break
    }
  }
  else{
        fetchAnswer(q_id).then(data=>{//получение вопроса и ответов
          printMess(data,message,q_id)//вывод
})}}
else{
  printMess(null,message,q_id)
}
  
}
//Рамзетка текста
const getFormatedText = (text,message) => {
  if (text.includes('\n')){
    return text.split('\n').map((str, i) => {
      str=getHyperLink(str,message)
      
      return <p key={`p_${i}`}>{str}</p>})
  }
  else {
    return text=getHyperLink(text,message)
  }
}
//Вставка гиперссылок
const getHyperLink = (text,message) => {  
  if (text.includes('LINK')){
    let links=''
    if(message.Link.includes('\n')){
      links=message.Link.split('\n')}
    else {links=message.Link}
    return text.split('LINK').map((str, i) =>{
    if(i%2!==0){
      return <a href={Array.isArray(links) ? links[Math.trunc(i/2)] : links} key={`p_${i}`}>{str}</a>}
    else{return str}})
  }
  else {
    let temp=[]
    if(message.typeMess==='last'){
      temp.push(<a href={message.Link}>{text}</a>)
      return temp}
    else {return text}
  }
}

function printMess(data,message,q_id){
  let temp3=[]
  
  if(data!==null){//если есть массив ответов
  let temp2=data.post.answers.map((answer,index)=>{  
    let ans={type:'bot',text:'Ответ '+(index+1)+': '+answer.text,
    SecondText:answer.SecondText,Link:answer.Link, Next_Quest:answer.Next_Quest,FinalAnswer:answer.FinalAnswer}
    return ans
  })
  temp2=temp2.reverse()//переворачиваем массив ответов, чтобы вставить в начале вопрос
  temp2.push({type:'bot',text:data.post.quest.text,
  SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''})
  if(q_id===1){temp2.push(test_first_message)}
  temp3=temp2}

  if(q_id===0){let temp4=Object.assign([],themes)
    temp4.reverse()
    temp3.push(...temp4)}//Вывод приветсвенного сообщения(лежит в константах)

  if(message!==null){//Вывод выбора пользователя и финального ответа
    if(message.FinalAnswer!==''){
      let temp4=Object.assign([],themes)
      temp4.reverse()
      temp3.push(...temp4)
      let ans={type:'bot',typeMess:'final',text:'Может Вы хотите узнать что-нибудь еще?',
      SecondText:'',Link:message.Link,Next_Quest:null,FinalAnswer:''}
      temp3.push(ans)
      ans={type:'bot',typeMess:'final',text:message.FinalAnswer,
      SecondText:'',Link:message.Link,Next_Quest:null,FinalAnswer:''}
      temp3.push(ans)
    }

    let ans={type:'',text:message.text,
    SecondText:'',Link:'',Next_Quest:null,FinalAnswer:'' }
    if(q_id===0){ans.type='bot'}
    temp3.push(ans)
  }
  temp3=temp3.reverse()
  setMessage([...messages,...temp3])

}

function AlertDismissibleExample(message,index) {
  if (show[index]) {
    return (
      <Alert style={{width:'100vh',marginLeft:5,marginTop:5}} variant="primary" onClose={() => {
        let temp = Object.assign([],show)
        temp[index]=false
        setShow(temp)}} dismissible>
        {getFormatedText(message.SecondText,message)}
      </Alert>
    );
  }
  return <Button key={index} style={{height:25}} className="d-flex align-items-center" size="sm" 
    onClick={() => {
      let temp = Object.assign([],show)
      temp[index]=true
      setShow(temp)}}>
    i</Button>;
}


//Функция вывода всплывающих сообщений(примечаний)
function toastMess(message){
  toast.info(message, {position: toast.POSITION.TOP_CENTER})
}
let i=-1
//Вывод сообщений
const outMessage =  messages.map((message,index)=>{
if ((message.type ==='bot')&&(message.SecondText!=='')) {i++}
const cnopcka = ((message.type ==='bot')&&(message.SecondText!=='')) 
? AlertDismissibleExample(message,i)
 /*<Button style={{height:25}} key={index} className="d-flex align-items-center" size="sm"
onClick={()=>{
  
  toastMess(message.SecondText)}}>i
</Button>*/ : null

return <Grid style={{marginTop:10,marginBottom:10}}  container direction={"string"} alignItems={"flex-start"} className="d-flex align-items-center">
            <div onClick={(message.typeMess==='last')||(message.typeMess==='final') ? null : ()=>{fetchs(message.Next_Quest,message)}}  style={{ marginLeft:message.type ==='bot' ? 5 : 'auto' ,
            width:'fit-content',maxWidth:'60vh', border: message.type ==='bot' ? '1px solid #a09eff' : '1px solid #ffabab'}}>
                {getFormatedText(message.text,message)}
            </div>
            <div style={{marginLeft:5}} className="d-flex align-items-center">
              {cnopcka}
            </div>
        </Grid>
})//Сама страница
  return (
    <Container className="d-flex justify-content-center align-items-center"
    fluid>
        <div xs='auto' md='auto' lg='auto'>
            <div id="div1" style={{width:'140vh',height:window.innerHeight,
              border:'1px solid #3ab2d6', overflowY:'auto', overflowX:'auto'}}>
              {outMessage}
            </div>
        </div>
        <ToastContainer />
    </Container>
    
  );
};

export default Chat;