import React from 'react'

type todoType = {
    text: string
    name: string
    age?: number 
}


function Todo ({name = 'unknow' , text= "..."  , age = 0 }:todoType) {
    return (
        <>
        <div> function </div>
        {text}
        <br/>
        <div className='bg-blue-500'>   
          {name}
        </div>
        <br/>
        {age}
        <br/>
        </>
    )
}

export default Todo