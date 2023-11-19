import React, { useEffect } from 'react'
import { Label } from '../components/Label'
import { useNavigate } from 'react-router-dom'

export const Doctor = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let istoken = localStorage.getItem('token')
    if (!istoken) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <Label name={"Doctor"} />
    </div>
  )
}
