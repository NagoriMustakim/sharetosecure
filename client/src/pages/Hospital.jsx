import React from 'react'
import { Label } from '../components/Label'

export const Hospital = () => {
  let hospital= "Hospital"
  return (
    <div>
      <Label name={hospital}/>

      <div className='border-2 w-60 ml-20'>
        
        <button>Confirm</button>

      </div>
    </div>
  )
}
