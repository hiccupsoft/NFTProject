import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Router } from './Routes';
import './App.css';
import _ from 'lodash'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          _.map(Router.container, (each, index)=>{
            const Component: any = each.Component;
            return <Route path={each.path} element={<Component />} key={index} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
