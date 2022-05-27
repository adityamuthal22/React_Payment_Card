import React from 'react'

export const Image = (props) => {
    // console.log(props.data.url);
  return (
      <>
      <div className='second_div'>
    <img src={props.data.url} alt="" srcset="" />
    <p>→</p>
    </div>
      </>
  )
}