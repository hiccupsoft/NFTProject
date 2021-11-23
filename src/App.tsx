import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Router } from './Routes';
import './App.css';
import _ from 'lodash'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {
            _.map(Router.container, each=>{
              const Component: any = each.Component;
              return <Route path={each.path} element={<Component />}/>
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
