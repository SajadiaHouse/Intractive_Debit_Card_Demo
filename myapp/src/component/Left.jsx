import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Left = ({cardNo, hName, cvc, month, year}) => {
  return (
    <>
    <div>
        <div className='realtive w-full h-[250px] md:w-[400px] md:h-screen bg-[url("/images/bg-main-desktop.png")]'>
         <CardFront cardNo={cardNo} month={month} year={year}  hName={hName} />
          <CardBack cvc={cvc} />
        </div>
    </div>
</>
  )
}

export default Left