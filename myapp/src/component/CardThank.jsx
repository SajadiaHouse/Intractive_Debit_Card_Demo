import React from 'react'

const CardThank = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <img src="./images/icon-complete.svg" alt="" />
                <p className='text-2xl font-semibold tracking-[.2em] text-violet-950 mt-10'>THANK YOU!</p>
                <p className='text-md text-slate-500 text-center my-4'>We've added your card details</p>
                <button type='submit'
                    className='w-full p-3 bg-violet-950 text-white rounded-lg mt-10'
                >Continue</button>
            </div>


        </>
    )
}

export default CardThank