import React, { useEffect, useState } from 'react';
import '../App.css'

const Error_page = (type) =>{
  document.body.style = 'background: #38b6ff'
const element = type===400 ? <h2 style={{color:'white'}}>Возникла ошибка клиента. Обновите страницу или попробуйте позже</h2> 
: (type===500 ? <h2 style={{color:'white'}}>Возникла ошибка сервера. Обновите страницу или попробуйте позже</h2> 
: (<h2 style={{color:'white'}}>Возникла непредвиденная ошибка. Обновите страницу или попробуйте позже</h2>))
  return ( <div style={{height:window.innerHeight-1}} className="d-flex flex-column justify-content-center align-items-center">
    {element}
    </div>
  );
};

export default Error_page;