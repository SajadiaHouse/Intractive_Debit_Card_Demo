import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
function Main() {
  const [cardNo, setcardNo] = useState("")
  const [month, setmonth] = useState("")
  const [year, setyear]=useState("")
  const [cvc, setcvc]=useState("")
  const [hName,sethName]=useState("")
  console.log(hName);
  return (
    <>
        <div className='flex flex-col md:flex-row'>
            <div className="flex-1"><Left cardNo={cardNo} month={month} year={year} cvc={cvc} hName={hName}  /></div>
            <div className="flex-1"><Right  setcardNo={setcardNo} setmonth={setmonth} setyear={setyear} setcvc={setcvc} sethName={sethName}  /></div>
        </div>
    </>
  )
}

export default Main