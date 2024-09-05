import React from "react"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title:string
}

export const Button = ({ title, ...props }:ButtonProps) => {
  return (
    <button 
      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg" 
      {...props}
    >
      {title}
    </button>
  )
}