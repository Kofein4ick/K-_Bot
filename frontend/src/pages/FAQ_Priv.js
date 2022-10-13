import React, { useEffect, useState } from 'react';
import {Button,Container,Accordion } from 'react-bootstrap';
import {fetchFAQ_Q_A} from '../components/Api';
import 'react-toastify/dist/ReactToastify.css';
import { CHAT_ROUTE } from '../utils/consts';

const FAQ_Priv = () =>{
const [flag,setFlag]=useState(false)//вспомогательный стейт для useEffect
const [tromp,setTromp]=useState([])

document.body.style = 'background: #8ad4ff'

useEffect(()=>{//При загрузке странице делаем один раз запрос на получение первого вопроса и его ответов
  if(flag===false)
    {
      let FAQ1=[]
      fetchFAQ_Q_A(1).then(data=>{
        FAQ1.push(faq(data))
        fetchFAQ_Q_A(2).then(data=>{
          FAQ1.push(faq(data))
          fetchFAQ_Q_A(3).then(data=>{
            FAQ1.push(faq(data))
            })
          })
        })
      setFlag(true)
    }
  })

function faq(data){
let el = data.post.q_a.map((element,index)=>{
    return <Accordion.Item eventKey={`${element.T_id*element.id*10}`}>
       <Accordion.Header style={{textAlign:'justify'}}>{element.Qtext}</Accordion.Header>
       <Accordion.Body style={{textAlign:'justify'}}>{getFormatedText(element.Atext,element)}</Accordion.Body>
    </Accordion.Item>
   })
  return el 
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

const FAQ =
<Accordion alwaysOpen>
<Accordion.Item eventKey='1'>
      <Accordion.Header style={{textAlign:'justify'}}>{'Пенсионное обеспечение'}</Accordion.Header>
      <Accordion.Body>{tromp[0]}</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='2'>
      <Accordion.Header style={{textAlign:'justify'}}>{'Налоги'}</Accordion.Header>
      <Accordion.Body>{tromp[1]}</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='3'>
      <Accordion.Header style={{textAlign:'justify'}}>{'Пенсионерам и инвалидам'}</Accordion.Header>
      <Accordion.Body>{tromp[2]}</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='4'>
      <Accordion.Header style={{textAlign:'justify'}}>{'Социальные пособия'}</Accordion.Header>
      <Accordion.Body>{tromp[3]}</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='5'>
      <Accordion.Header style={{textAlign:'justify'}}>{'Декрет'}</Accordion.Header>
      <Accordion.Body>{tromp[4]}</Accordion.Body>
</Accordion.Item>
</Accordion>
//Сама страница
  return (<div style={{textAlign:'center'}} >
    <h2 style={{marginTop:20,marginBottom:20}}>Социальные гарантии, льготы, пенсии.</h2>
    <Container className="d-flex justify-content-center align-items-center"
    fluid>
        <div xs='auto' md='auto' lg='auto'>
            <div id="div1" style={{width:'140vh',
              border:'1px solid #3ab2d6', overflowY:'auto', overflowX:'auto',borderRadius:10}}>
                {FAQ}
            </div>
        </div>
    </Container>
    <Button style={{marginTop:20}} href={CHAT_ROUTE}>Вернуться назад</Button> 
    </div>
  );
};

export default FAQ_Priv;