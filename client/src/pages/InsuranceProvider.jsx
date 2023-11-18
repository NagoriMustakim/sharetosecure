import React, { useEffect, useState } from 'react'
import { Label } from '../components/Label'
import { Activity } from '../components/Activity';
import { getContract, getbankdetails, setActivity, updateActivity } from '../helper/api';
import useFetch from '../hooks/fetch.hook';

export const InsuranceProvider = () => {
  const [{ apidata }, setDatta] = useFetch();
  // const [{apibankdata}, setbankData] = useBank() 
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState('');
  const [bankdata, setBankData] = useState('');

  const takeAction = async () => {
    const getcontractdata = getContract()
    getcontractdata.then((result) => {
      setData(result)
    }).catch((err) => {
      console.log(err);
    })
    setShowModal(true);
  }

  const closetakeAction = () => {
    setShowModal(false)
  }


  const Confirm = () => {
    let values = {
      username: localStorage.getItem("username"),
      confirmbyinsuranceprovider: true
    }
    let confirmStatus = updateActivity(values);
    setShowModal(false)
  }
  useEffect(()=>{
    async function getbankdata(){
      let bankpromises = getbankdetails()
      bankpromises.then((result) => {
        setBankData(result.data)
      }).catch((err) => {
        console.log(err);
      })
    }

    getbankdata() 
  }, [ ])

const bankconfirm = ()=>{
  let values = {
    username: localStorage.getItem("username"),
    confirmbankbyinsuranceprovider: true
  }
  let confirmStatus = updateActivity(values); 
}
  return (
    <div>
      <Label name={"InsuranceProvider"} />
      {apidata && apidata.confirmbyinsuranceprovider != true ? (
        <div className='border-2 w-60 ml-20'>
          <h3 className='mt-4  ml-2 text-xl'>{apidata ? `${apidata.username} Created Contract` : null}</h3>

          <button type='button' className='bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-2 mt-6' onClick={takeAction}>Take Action</button>
          {showModal ? (
            <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <div className="rounded-lg px-8 pb-8 w-full">
                      <label className="block text-black mb-2 text-xl">
                        Offer
                      </label>
                      <label className='text-xl'>Created by: Utsav</label>
                    </div>
                    <div>Addhar Card Number: {data.aadhar}</div>
                    <div>Sex: {data.sex}</div>
                    <div>Account Number: {data.accountnumber} </div>
                    <div>Insurance Provider Name:  {data.insuranceprovider}</div>
                    <div>Policy Name: {data.policy}</div>
                    <div>Hospital Name: {data.hospital} </div>
                    <div>Pan Card Number: {data.pan}</div>
                    <div>Sum Assured INR: {data.assured}</div>
                    <div>Policy Term in years: {data.policyterm}</div>
                    <div>Payment Term (1-12/year): {data.payment}</div>
                    <div>Premimum payment paid (true/false): {data.premium ? 'True' : 'False'}</div>
                  </div>
                  <div className="flex items-center justify-center mb-4  border-solid rounded-b">
                    <button
                      className="bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      onClick={Confirm}
                    >
                      Confirm
                    </button>
                    <button
                      className="bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-4 mb-1"
                      type="button"
                      onClick={closetakeAction}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : ""}
        </div>
      )
        : null}



      {bankdata ? (
        <div className='border-2 w-60 ml-20'>
        <h3 className='mt-4  ml-2 text-xl'>Confirm Request by Bank</h3>

          <h1 className='ml-2 mt-2'>Customer is Verified: {bankdata.verified? "True":null}</h1>
          <h1 className='ml-2'>Customer is ACtive{bankdata.active? "True": null}</h1>
          <h1 className='ml-2'>Customer Credit: {bankdata.credit}</h1>


        <button type='button' className='bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-2 mt-6' onClick={takeAction}>Take Action</button>
        </div> 
        ) : null}


        <Activity></Activity>
    </div>

  )
}
