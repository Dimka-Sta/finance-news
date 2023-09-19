import React from 'react';
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Index from "./components/Index/Index"
import Articles from './components/Articles';

function App() {

  return (

        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/articles' element={<Index />} /> 
            <Route path='/articles/:id' element={<Articles />} />
          </Route>
        </Routes>
  );
}

export default App;
