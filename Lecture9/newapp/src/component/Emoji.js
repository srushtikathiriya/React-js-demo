import React from 'react'

function Emoji(props) {
    let message;
    if(props.emoji1 === props.emoji2 && props.emoji2 === props.emoji3){
        message = "This Emoji Is Match";
    }
    else{
        message = "This Emoji Do Not Match!"
    }
  return (
    <div className='text-center'>
      <p className='rounded-2xl bg-white p-3'>{props.emoji1} {props.emoji2} {props.emoji3}</p>
      <h1 className='bg-white mt-10 rounded-2xl p-3'>{message}</h1>
    </div>
  )
}

export default Emoji;