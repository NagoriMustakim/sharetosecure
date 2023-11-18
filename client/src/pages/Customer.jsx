import React, { useState } from 'react'
import { Label } from '../components/Label'
import { Activity } from '../components/Activity'
import { useFormik } from 'formik';
import { createNewContract, setActivity } from '../helper/api';
import toast, { Toaster } from 'react-hot-toast';
export const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const createContract = () => {
    setShowModal(true);
  }

  const closeCreateContract = () => {
    setShowModal(false)
  }

  const formik = useFormik({
    initialValues: {
      aadhar: '',
      sex: '',
      bank: '',
      accountnumber: '',
      insuranceprovider: '',
      policy: '',
      hospital: '',
      pan: '',
      assured: '',
      policyterm: '',
      payment: '',
      premium: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let contractPromises = createNewContract(values);
      toast.success('Contract created successfully');
      let username = localStorage.getItem("username")
      let valuess = {
          username,
          createcontract:true,
      }
      let activitystatus = setActivity(valuess);
      setShowModal(false)
    }

  })
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <h1 className='ml-20 mt-16 text-xl'>Customer: {localStorage.getItem("username")}</h1>
      <button type='button' className='bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-20 mt-6' onClick={createContract}>Create Contract</button>
      {showModal ? (
        <form onSubmit={formik.handleSubmit} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <div className="rounded-lg px-8 pb-8 w-full">
                  <label className="block text-black mb-2 text-xl">
                    New Contract
                  </label>
                  <input className="shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Aadhar card Number"
                    {...formik.getFieldProps('aadhar')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Sex M-F-O"
                    {...formik.getFieldProps('sex')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Bank Name"
                    {...formik.getFieldProps('bank')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Account Number"
                    {...formik.getFieldProps('accountnumber')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Insurance Provider Name"
                    {...formik.getFieldProps('insuranceprovider')}
                    required
                  />
                  <input className=" mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Policy Name"
                    {...formik.getFieldProps('policy')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Hospital Name"
                    {...formik.getFieldProps('hospital')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Pan Number"
                    {...formik.getFieldProps('pan')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Sum Assured INR"
                    {...formik.getFieldProps('assured')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Policy Term in years"
                    {...formik.getFieldProps('policyterm')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Payment Term (1-12/year)"
                    {...formik.getFieldProps('payment')}
                    required
                  />
                  <input className="mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-tt ${isCodeInvalid ? 'border-red-500' : 'border-gray-30"
                    type="text"
                    placeholder="Premimum payment paid (true/false)"
                    {...formik.getFieldProps('premium')}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mb-4  border-solid rounded-b">
                <button
                  className="bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                >
                  Create
                </button>
                <button
                  className="bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-4 mb-1"
                  type="button"
                  onClick={closeCreateContract}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : ""}
      <Activity />
    </div>
  )
}
