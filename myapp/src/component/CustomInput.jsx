import { useField } from 'formik'
import React from 'react'

const CustomInput = ({ label,onChange ,...props }) => {
  const [field, meta] = useField(props)
  const handleChange = (e) => {
    field.onChange(e);
    if (onChange) {
      onChange(e.target.value);
    }
  }
  return (
    <>
      <div>
        <label className='tracking-widest font-medium text-md' htmlFor={props.name}>{label}</label>
        <input 
        {...props} 
        {...field} 
        onChange={handleChange}
        className={meta.error && meta.touched ? 'input-error w-full rounded-md border block border-red-600 text-black focus:border-red-700 py-2 px-4' : 'w-full rounded-md border block border-slate-400 text-black focus:border-black py-2 px-4'} />
        <span>{meta.error && meta.touched ? <div className='text-red-600 mb-2'>{meta.error}</div> : <div className='mb-3'></div>}</span>
      </div>

    </>
  )
}

export default CustomInput