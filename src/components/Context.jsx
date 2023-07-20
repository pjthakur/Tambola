import React,  { createContext, useState } from "react"
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [hello, setHello] = useState("Tambola");
    const [number, setNumber] = useState();
    var [calledNums, setCalledNums ]= useState([]);

    const board_number = []
    for(let i =1; i<=90; i++){
        board_number.push(i)
    }

    return (
        <AppContext.Provider
          value={{
            hello,
            number,
            setNumber,
            calledNums,
            setCalledNums,
            board_number,
          }}
        >
          {children}
        </AppContext.Provider>
      );
}