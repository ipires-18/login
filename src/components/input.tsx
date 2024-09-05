import React from "react"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  loginMessage:string
}

export const Input = ({ loginMessage, ...props }:InputProps) => {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
        loginMessage ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-green-500'
      } focus:outline-none focus:ring-2`}
      {...props}
    />
  )
}