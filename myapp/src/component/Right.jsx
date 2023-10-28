import React,{useState} from 'react'
import CardDetail from './CardDetail'
import CardThank from './CardThank'

const Right = ({setyear, setmonth, setcvc, sethName, setcardNo}) => {
  const [isLoading, setisLoading] = useState(false)
  return (
    <>
    <div className='flex justify-start items-center h-screen'>
      <div className='md:w-[350px] md:ms-12 w-full p-6'>
        {isLoading ?<CardThank /> :<CardDetail setcardNo={setcardNo} setmonth={setmonth} setyear={setyear} setcvc={setcvc} sethName={sethName} setisLoading={setisLoading} /> }
      </div>
    </div>
   
    </>
  )
}

export default Right