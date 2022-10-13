import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat';
import Main from '../pages/Main';
import FAQ_Priv from '../pages/FAQ_Priv';
import { CHAT_ROUTE, FAQ_PRIV_ROUTE, MAIN_ROUTE } from '../utils/consts';



const AppRouter = () =>{
  //Маршрутизация
  //При любом непредусмотренном пути, отправляет на главную страницу
  return (<Routes>
        <Route path={MAIN_ROUTE} element={<Navigate to={'/chat'}  replace />}/>
        <Route path={CHAT_ROUTE} element={<Chat/>}/>
        <Route path={FAQ_PRIV_ROUTE} element={<FAQ_Priv/>}/>
        <Route
        path="*"
        element={<Navigate to={'/chat'}  replace />}
        />
        </Routes>);
};

export default AppRouter;