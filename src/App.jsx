import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './components/Context'
import Board from './components/Board'
import NumGen from './components/NumGen'

import TambolaTicket from './components/TambolaTicket'
import Header from './components/Header'
import Reset from './components/Reset'


function App() {
  const {number, hello, calledNums} = useContext(AppContext)
  var x=25;
  if(calledNums.length==90){
    return <Reset/>
  }
  else{
    return(
      <div className='app'>
        <Header />
        <Board/>
        <NumGen />
        <TambolaTicket/>
      </div>
    )
  }
}
export default App
