import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat';
import Main from '../pages/Main';
import { CHAT_ROUTE, MAIN_ROUTE } from '../utils/consts';



const AppRouter = () =>{
  //Маршрутизация
  //При любом непредусмотренном пути, отправляет на главную страницу
  return (<Routes>
        <Route path={MAIN_ROUTE} element={<Main/>}/>
        <Route path={CHAT_ROUTE} element={<Chat/>}/>
        <Route
        path="*"
        element={<Navigate to={'/'}  replace />}
        />
        </Routes>);
};

export default AppRouter;