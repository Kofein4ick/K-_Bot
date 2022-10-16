import React, { useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';


function App() {
  useEffect(() => {
    document.title = 'Бот Семён';
  });
  return (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  );
}

export default App;