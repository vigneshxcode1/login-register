import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashbroad = () => {
  const [success,setsuccess]=useState('')
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
useEffect(()=>{

axios.get("http://localhost:8000/dashbroad")
.then(response=>{
  if(response.data==="success"){
   setsuccess("successfull ok")
  }else{
    navigate("/login")
  }
})
.catch(err=>console.log(err))
},[])
  return (
   <div>
    <h2>dashbroad hello</h2>
    <p>{success}</p>
   </div>
  )
}

export default Dashbroad