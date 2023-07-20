import './styles/tambolaTicket.css'
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";

const TambolaTicket = (props) => {

  const{calledNums} = useContext(AppContext)

  // Function to generate random numbers for a specific column range
  const generateticket =()=>{
    const generateColumnNumbers = (start, end) => {
      var columnNumbers = [];
      while (columnNumbers.length <= 9) {
        var randomNumber =
          Math.floor(Math.random() * (end - start + 1)) + start;
        
        if (!columnNumbers.includes(randomNumber)) {
          if( randomNumber.toString().length >1 && randomNumber.toString()[1].includes(3) || randomNumber.toString().length >1 && randomNumber.toString()[1].includes(4) || randomNumber.toString().length >1 && randomNumber.toString()[1].includes(6) || randomNumber.toString().length >1 && randomNumber.toString()[1].includes(5)){
            randomNumber = 0
          }
          columnNumbers.push(randomNumber);
        }
      }
      return columnNumbers.sort((a, b) => a - b);
    };
  
    // Generate numbers for each column of the ticket
    const column1 = generateColumnNumbers(1, 10);
    const column2 = generateColumnNumbers(11, 20);
    const column3 = generateColumnNumbers(21, 30);
    const column4 = generateColumnNumbers(31, 40);
    const column5 = generateColumnNumbers(41, 50);
    const column6 = generateColumnNumbers(51, 60);
    const column7 = generateColumnNumbers(61, 70);
    const column8 = generateColumnNumbers(71, 80);
    const column9 = generateColumnNumbers(81, 90);
  
    let x = Math.floor((Math.random() * 4) + 1);
    var col1 = [0,1,2,3,4,5,6,7,8,9]
    let y = Math.floor((Math.random() * 7) + 1);
    let z = Math.floor((Math.random() * 9) + 1);

    console.log(calledNums)

    // Repeat the pattern for the remaining columns...
      return (
        <div className={`tickets`}>
        
        <div className="tambola-ticket">
          <div className="tambola-row">
            <div className={`tambola-cell ${calledNums.includes(column1[x])?"yellow":null}`} >{column1[x]}</div>
            
            {console.log(calledNums.includes(column1[x]))}
            {console.log(calledNums)}
            {console.log(column1[x])}
            <div className={`tambola-cell ${col1.includes(column2[5])?"emp-cell":null} ${calledNums.includes(column2[5])?"yellow":null}`}>{column2[5]}</div>
            <div className={`tambola-cell ${col1.includes(column3[2])?"emp-cell":null} ${calledNums.includes(column3[2])?"yellow":null}`}>{column3[2]}</div>
            <div className={`tambola-cell ${col1.includes(column4[6])?"emp-cell":null} ${calledNums.includes(column4[6])?"yellow":null}`}>{column4[6]}</div>
            <div className={`tambola-cell ${col1.includes(column5[8])?"emp-cell":null} ${calledNums.includes(column5[8])?"yellow":null}`}>{column5[8]}</div>
            <div className={`tambola-cell ${col1.includes(column6[9])?"emp-cell":null} ${calledNums.includes(column6[9])?"yellow":null}`}>{column6[9]}</div>
            <div className={`tambola-cell ${col1.includes(column7[3])?"emp-cell":null} ${calledNums.includes(column7[3])?"yellow":null}`}>{column7[3]}</div>
            <div className={`tambola-cell ${col1.includes(column8[7])?"emp-cell":null} ${calledNums.includes(column8[7])?"yellow":null}`}>{column8[7]}</div>
            <div className={`tambola-cell ${col1.includes(column9[4])?"emp-cell":null} ${calledNums.includes(column9[4])?"yellow":null}`}>{column9[4]}</div>
            {/* Repeat for remaining columns */}
          </div>
          <div className="tambola-row">
            <div className={`tambola-cell ${calledNums.includes(column1[y])?"yellow":null}`}>{column1[y]}</div>
            <div className={`tambola-cell ${col1.includes(column2[6])?"emp-cell":null} ${calledNums.includes(column2[6])?"yellow":null}`}>{column2[6]}</div>
            <div className={`tambola-cell ${col1.includes(column3[5])?"emp-cell":null} ${calledNums.includes(column3[5])?"yellow":null}`}>{column3[5]}</div>
            <div className={`tambola-cell ${col1.includes(column4[9])?"emp-cell":null} ${calledNums.includes(column4[9])?"yellow":null}`}>{column4[9]}</div>
            <div className={`tambola-cell ${col1.includes(column5[3])?"emp-cell":null} ${calledNums.includes(column5[3])?"yellow":null}`}>{column5[3]}</div>
            <div className={`tambola-cell ${col1.includes(column6[1])?"emp-cell":null} ${calledNums.includes(column6[1])?"yellow":null}`}>{column6[1]}</div>
            <div className={`tambola-cell ${col1.includes(column7[8])?"emp-cell":null} ${calledNums.includes(column7[8])?"yellow":null}`}>{column7[8]}</div>
            <div className={`tambola-cell ${col1.includes(column8[2])?"emp-cell":null} ${calledNums.includes(column8[2])?"yellow":null}`}>{column8[2]}</div>
            <div className={`tambola-cell ${col1.includes(column9[7])?"emp-cell":null} ${calledNums.includes(column9[7])?"yellow":null}`}>{column9[7]}</div>
          </div>
          <div className="tambola-row">
            <div className={`tambola-cell ${calledNums.includes(column1[z])?"yellow":null}`}>{column1[z]}</div>
            <div className={`tambola-cell ${col1.includes(column2[1])?"emp-cell":null} ${calledNums.includes(column2[1])?"yellow":null}`}>{column2[1]}</div>
            <div className={`tambola-cell ${col1.includes(column3[7])?"emp-cell":null} ${calledNums.includes(column3[7])?"yellow":null}`}>{column3[7]}</div>
            <div className={`tambola-cell ${col1.includes(column4[5])?"emp-cell":null} ${calledNums.includes(column4[5])?"yellow":null}`}>{column4[5]}</div>
            <div className={`tambola-cell ${col1.includes(column5[5])?"emp-cell":null} ${calledNums.includes(column5[5])?"yellow":null}`}>{column5[5]}</div>
            <div className={`tambola-cell ${col1.includes(column6[4])?"emp-cell":null} ${calledNums.includes(column6[4])?"yellow":null}`}>{column6[4]}</div>
            <div className={`tambola-cell ${col1.includes(column7[5])?"emp-cell":null} ${calledNums.includes(column7[5])?"yellow":null}`}>{column7[5]}</div>
            <div className={`tambola-cell ${col1.includes(column8[5])?"emp-cell":null} ${calledNums.includes(column8[5])?"yellow":null}`}>{column8[5]}</div>
            <div className={`tambola-cell ${col1.includes(column9[5])?"emp-cell":null} ${calledNums.includes(column9[5])?"yellow":null}`}>{column9[5]}</div>
          </div>
          
          {/* Repeat for the remaining rows */}
        </div>
      </div>
    );
  }

  const [tickets, setTicket] = useState([])
  const [num,setNum]= useState()
  const tempTick = [...tickets]
  
  const gentick =()=>{
    setTicket([])
    for(let i =0; i<num; i++){
          var ticket = generateticket();
          tempTick.push(ticket)
          setTicket(tempTick)
        }
        // return tickets;
        setNum("")
  }
  
  return(
    <div className="tickets">
      <hr />
      <h1>Generate Tickets</h1>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" placeholder="number of tickets" value={num} onChange={e=>{setNum(e.target.value)}}/>
        <button onClick={gentick} disabled={tickets.length} disa>Generate ticket</button>
      </form>
        {tickets.length > 0  && <p>*Please restart the game to fetch new tickets*</p> }
      <div className='ticketu'>
      {tickets.map((ticket, index) => (
        <div className="ticketd" key={ticket}>
          <h2>Ticket {index + 1}</h2>
          {ticket}
        </div>
      ))}
      </div>
    </div>
  )

};

export default TambolaTicket;
