import React, {useContext}from 'react'
import { AppContext } from './Context'
import './styles/board.css'
const Board = () => {
    const {board_number, calledNums, number} = useContext(AppContext)
    
  return (
    <div className='board'>
        <ul>
            {board_number.map(number=>{
                var cal = calledNums.includes(parseInt(number))
                return<li key={number} className={cal?'yellow':null}>{number}</li>
            })}
        </ul>
    </div>
  )
}

export default Board