import React, { useEffect, useState } from "react"

export default function Relogio(){

    const[data, setData]=useState(Date) 
     const horario = data.split(" ")

     useEffect(()=>{

        
        const interval = setInterval(()=>{
            setData(Date)
        },1000);
        
        return() => clearInterval(interval);
        
        
     },[]);


    return(
        <div>
            <h1>Relogio: </h1>

              <p>Data: {horario[2]} {horario[1]} {horario[3]}</p>  
              <p>Horario: {horario[4]}</p>
        </div>
    )
}