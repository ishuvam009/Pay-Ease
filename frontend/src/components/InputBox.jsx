import React from 'react'

function InputBox({label, placeholder}) {
        return (
        <div>
        <div className='font-semibold text-sm text-start ml-1 mt-3 '>{label}</div>
        <input type="text" placeholder={placeholder} className="w-full text-sm rounded-lg border-gray-300 mt-1 h-8 border-2 px-4 py-2 
        focus:outline-none mr-10 focus:border-blue-500 "/>
        </div>
        )
}

export default InputBox