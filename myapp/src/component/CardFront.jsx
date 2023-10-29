import React from 'react'

const CardFront = ({cardNo, hName,  month, year}) => {
    const defaultCardNo = '0123 4567 8912 0000';
    const defaultName="JHON ALIYA"
    
    return (
        <>
            <div className='absolute w-[300px] top-[120px] left-6 z-50 md:left-[120px] md:top-14 md:w-[400px] '>
                <div className='relative text-white'>
                    <img src="./images/bg-card-front.png" alt="" />
                    <img src="./images/card-logo.svg" className='absolute top-6 left-6' alt="" />
                    <p className='absolute bottom-12 text-xl left-4 md:bottom-16 md:left-6 md:text-2xl tracking-[.15em]'>
                    {cardNo !== null && cardNo !== '' ? cardNo : defaultCardNo}
                        </p>
                    <div className='absolute bottom-4 left-4 md:bottom-6 md:left-6 w-full flex justify-between flex-row text-xs md:text-base'>
                        <p className='text-left tracking-widest'> {hName !== null && hName !== '' ? hName.toUpperCase() : defaultName}</p>
                        <p className='text-right me-12 tracking-widest'>
                            {month!=null && month !==""? month: "09"}/{year!=null && year !=="" ? year: "00"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFront