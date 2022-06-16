// UTILS
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"

// PAGES
import {Dashboard} from './Pages/Dashboard'
import {Navbar} from './Components/Navbar'
import { NotConnected } from './Pages/NotConnected'
import {Connect} from './Components/Connect'
import {Mint} from './Pages/Mint'
import {Gallery} from './Pages/Gallery'

// USEDAPP
import { getDefaultProvider, utils } from 'ethers'
import { ChainId, DAppProvider, OptimismKovan, Rinkeby, useEthers } from '@usedapp/core';

function App() {
  
  return (

    <DAppProvider config={{
      supportedChains: [ChainId.Rinkeby],
      readOnlyChainId: ChainId.Rinkeby,
      readOnlyUrls: {
        [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
      },
    }}>

            <div>
              <Navbar />
              <div className='container'>
                  <Routes>
                    <Route path='/' element={ <Dashboard /> }/>
                    <Route path='/mint' element={ <Mint /> }/>
                    <Route path='/gallery' element={ <Gallery /> }/>
                    
                  </Routes>
              </div>

            </div>

    </DAppProvider>

  );
}

export default App;
