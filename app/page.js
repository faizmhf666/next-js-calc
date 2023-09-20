"use client"
import React, { useState } from "react"
import './globals.css'
import './page.module.css'

const calNum1=[
  {value:"c",},
  {value:"DEL"},
  {value:"%",},
  {value:"/",},

  {value:"7",},
  {value:"8",},
  {value:"9",},
  {value:"*",},
  
  {value:"4",},
  {value:"5",},
  {value:"6",},
  {value:"-",},
  
  {value:"1",},
  {value:"2",},
  {value:"3",},
  {value:"+",},

  {value:".",},
  {value:"0",},
  {value:"00",},
  {value:"=",}, 
]

export default function Home() {
const[input, setInput]=useState('')

  const handleClick=(val)=>{
    if(val==="c"){
      setInput("")
    }
    else if (val==="="){
      try{
        setInput(eval(input))
      }
      catch(err){
        alert("Enter Valid Input")
      }
    }
    else if(val==="DEL"){
      setInput(input.slice(0,-1))
    }
    else if(val==="%"){
      setInput(eval(input)/100)
    }
    else{
      setInput(input+val)
    }
  }
  return (
    <main className="main">
      <div className="calculator">
      <input className="input" value={input} placeholder="0"/>
      <ul className='list-container'>
        {calNum1.map(each=>
          <li key={each.value} className='list-button'>
            <button type="button" className="button" onClick={()=>handleClick(each.value)}>{each.value}
            </button>
          </li>
          )}
      </ul>
      </div>
    </main>
  )
}

