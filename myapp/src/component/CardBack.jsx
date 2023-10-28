import React from 'react'

const CardBack = ({cvc}) => {
  return (
    <>
     <div className='absolute top-5 right-6 w-[300px] md:left-[200px] md:top-[320px] md:w-[400px]'>
           <div className='relative'>
              <img src="./images/bg-card-back.png" alt="" />
              <p className='absolute md:text-base text-sm right-10 top-[70px] md:top-24 md:right-12 text-white tracking-wider font-medium'>{cvc!=null && cvc!=="" ? cvc: "000"}</p>
            </div>
           </div>
    </>
  )
}

export default CardBack