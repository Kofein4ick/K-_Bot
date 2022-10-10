import React, { useEffect, useState } from 'react';
import {Button,Container} from 'react-bootstrap';
import { fetchAnswer} from '../components/Api';
import { Grid} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MAIN_ROUTE,first_message,last_message } from '../utils/consts';

const Chat = () =>{
const [messages,setMessage] = useState([]) //стейт, хранящий все сообщения
const [flag,setFlag]=useState(false)//вспомогательный стейт для useEffect

useEffect(()=>{//При загрузке странице делаем один раз запрос на получение первого вопроса и его ответов
  if(flag===false)
    {
      fetchs(1,null)
      setFlag(true)
    }
    const objDiv = document.getElementById("div1");//прокрутка скролла вниз, чтобы новые сообщения были видны всегда
    if(objDiv!==null){ 
      objDiv.scrollTop = objDiv.scrollHeight
     }
  })

function fetchs(q_id, message){
if(q_id!==null){
fetchAnswer(q_id).then(data=>{//получение вопроса и ответов
  printMess(data,message,q_id)//вывод
})}
else{
  printMess(null,message,q_id)
}
  
}
//Рамзетка текста
const getFormatedText = (text) => {
  if (text.includes('\n')){
    return text.split('\n').map((str, i) => <p key={`p_${i}`}>{str}</p>)
  }
  else {
    return text
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
    if(i%2!==0){return <a href={Array.isArray(links) ? links[i/2] : links} key={`p_${i}`}>{str}</a>}
    else{return str}})
  }
  else {
    let temp=[]
    if(message.typeMess==='last'){
      temp.push(<a href={MAIN_ROUTE}>{text}</a>)
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
  if(q_id===1){temp2.push(first_message)}//Вывод приветсвенного сообщения(лежит в константах)
  temp3=temp2}

  if(message!==null){//Вывод выбора пользователя и финального ответа
    if(message.FinalAnswer!=='')
    {let ans={type:'bot',typeMess:'final',text:message.FinalAnswer,
    SecondText:'',Link:message.Link,Next_Quest:null,FinalAnswer:''}
    temp3.push(last_message)
    temp3.push(ans)}

    let ans={type:'',text:message.text,
    SecondText:'',Link:'',Next_Quest:null,FinalAnswer:'' }
    temp3.push(ans)
  }
  temp3=temp3.reverse()
  setMessage([...messages,...temp3])
}



//Функция вывода всплывающих сообщений(примечаний)
function toastMess(message){
  toast.info(message, {position: toast.POSITION.TOP_CENTER})
}
//Вывод сообщений
const outMessage =  messages.map((message,index)=>{
const cnopcka = ((message.type ==='bot')&&(message.SecondText!=='')) 
? <Button style={{height:25}} key={index} className="d-flex align-items-center" size="sm"
onClick={()=>{toastMess(message.SecondText)}}>i
</Button> : null

return <Grid style={{marginTop:10,marginBottom:10}}  container direction={"string"} alignItems={"flex-start"} className="d-flex align-items-center">
            <div onClick={(message.typeMess==='last')||(message.typeMess==='final') ? null : ()=>{fetchs(message.Next_Quest,message)}}  style={{ marginLeft:message.type ==='bot' ? 5 : 'auto' ,
            width:'fit-content',maxWidth:'60vh', border: message.type ==='bot' ? '1px solid #a09eff' : '1px solid #ffabab'}}>
                {getFormatedText(getHyperLink(message.text,message))}
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
        <div style={{marginLeft:20}} xs='auto' md='auto' lg='auto'>
          <b>Смотрите также:</b><br/>
          <li><a href=''>Документы для самозанятых</a></li>
          <li><a href=''>Налогообложение и социальные гарантии</a></li>
          <li><a href=''>Как стать самозанятым и как перестать им быть?</a></li>
          <li><a href=''>За что самозанятые могут получить штрафы?</a></li>
        </div>
        <ToastContainer />
    </Container>
    
  );
};

export default Chat;