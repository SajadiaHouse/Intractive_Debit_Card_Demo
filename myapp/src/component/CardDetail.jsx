import { Form, Formik } from 'formik'
import React from 'react'
import CustomInput from './CustomInput'
import * as Yup from 'yup' 

const CardDetail = ({setyear, setmonth, setcvc, sethName, setcardNo,setisLoading, cardNo}) => {
  function formatCardNo(input) {
    // Remove all non-numeric characters (e.g., spaces and dashes)
    input = input.replace(/\D/g, '');
    
    // Add a space every 4 characters
    input = input.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Set the formatted value in the state
    setcardNo(input);
  }
    const validate= Yup.object().shape({
        holderName:Yup.string().required("Card Holder Not Empty"),
        cardNo:Yup.string("Wrong format! number only").max(19, "Enter only 19 number").required("Can't be blank"),
        month:Yup.string().max(2,"only 2 number enter!").required("Can't be blank"),
        year:Yup.string().max(2, "only 2 number enter!").required("Can't be blank"),
        cvc: Yup.string("Wrong format! number only").max(3,"only 3 number enter!").required("Can't be blank")
    
      })
      console.log(Formik.valuses)
      return (
        <Formik
        initialValues={{
          holderName:"",
          cardNo:"",
          month:"",
          year:"",
          cvc:""
        }}
        validationSchema ={validate}
        onSubmit={()=>{
          setisLoading(true);
        }}
        >
       {(props)=>(
          <Form>
               <CustomInput 
                  label="CARDHOLDER NAME"
                  name="holderName"
                  type="text"
                  placeholder="e.g Zahid Mahboob"
                  onChange={(e)=>sethName(e)}
                  />
                  <CustomInput 
                   label="CARD NUMBER"
                   name="cardNo"
                   type="text"
                   onChange={(e) => formatCardNo(e)}
                   placeholder="e.g 9999 9999 9999 9999"
                  />
                  <div className='flex flex-row gap-3'>
                    <div className="flex-1">
                    <CustomInput 
                  label="EXP.DATE"
                  name="month"
                  type="text"
                  onChange={(e)=>setmonth(e)}
                  placeholder="MM"
                  />
                    </div>
                    <div className="flex-1">
                    <CustomInput 
                  label="(MM/YY)"
                  name="year"
                  type="text"
                  onChange={(e)=>setyear(e)}
                  placeholder="YY"
                  />
                    </div>
                    <div className="flex-2">
                    <CustomInput 
                  label="CVC"
                  name="cvc"
                  type="text"
                  onChange={(e)=>setcvc(e)}
                  placeholder="e,g 098"
                  />
                    </div>
                  </div>
                 <button type='submit'
                  className='w-full p-3 bg-violet-950 text-white rounded-lg'
                     >Confirm</button>
          </Form>
       )}
       
       </Formik>
      )
  
}

export default CardDetail