import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Router } from './Routes';
import './App.css';
import _ from 'lodash'
import useMobile from './hooks/useMobile';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'

const App: React.FC = () => {
  const {isMobile} = useMobile();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Routes>
          { !isMobile &&
            _.map(Router.webRoute, (each, index)=>{
              const Component: any = each.Component;
              return <Route path={each.path} element={<Component />} key={index} />
            })
          }
          { isMobile &&
            _.map(Router.mobileRoute, (each, index)=>{
              const Component: any = each.Component;
              return <Route path={each.path} element={<Component />} key={index} />
            })
          }
        </Routes>
      </BrowserRouter>
    </Web3ReactProvider>
  )
}

export default App
