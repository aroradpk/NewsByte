import React from 'react'
import loading1 from "../loading1.gif"

function Spinner() {
  
    return (
      <div className='text-center'>
        <img className="my-3" src={loading1} alt = "loading" width={'34'}/>
      </div>
    )
  
}

export default Spinner