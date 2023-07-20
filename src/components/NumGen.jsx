import React ,{useContext, useEffect} from 'react'
import { AppContext } from './Context'
import './styles/numGen.css'
const NumGen = () => {
    const {number, calledNums, setNumber, setCalledNums} = useContext(AppContext)

    const generate = () =>{
        let x = Math.floor((Math.random() * 90) + 1);
        if(!calledNums.includes(x)){
            calledNums.push(x)
            setNumber(x)
        }
        else{
            while(calledNums.includes(x)){
                x = Math.floor((Math.random() * 90) + 1);
            }
            calledNums.push(x)
            setNumber(x)
        }
        console.log(typeof(number.toString()))
        localStorage.setItem("calledNums", JSON.stringify(calledNums))
        localStorage.setItem("number", number.toString())
    }
    useEffect(()=>{
        const storedArray = localStorage.getItem('calledNums');
        if(storedArray){
            setCalledNums(JSON.parse(storedArray))
        }
    },[])

    const reset =() =>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className='num-gen'>
        <div className='content'>
            <h1>{number}</h1>
            <p onClick={generate}>generate</p>
            <button className='reset-button' onClick={reset}>Restart the game</button>
        </div>
    </div>
  )
}

export default NumGen