import React, { useEffect, useState } from 'react'
import { getActivity } from '../helper/api';
import useFetch from '../hooks/fetch.hook';

export const Activity = () => {
  const [{ apidata }, setDatta] = useFetch()
  return (
    <>
      <div className='mt-52 ml-32 text-2xl font-bold text-emerald-500'>Activity</div>
      {
        apidata ? (
          <div>
            <div className='ml-20 text-xl'>{apidata ? apidata.username : ""} created contract</div>
            <div className='ml-20 text-xl'>{apidata ? apidata.confirmbyinsuranceprovider ? "Insurance Provider confirm" : " " : ""} </div>
            <div className='ml-20 text-xl'>{apidata ? apidata.confirmbybank ? "Bank update financial health" : " " : ""} </div>

          </div>
        ) : null
      }
    </>

  )
}
