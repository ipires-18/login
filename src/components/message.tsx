import React from "react"

interface MessageProps {
  loginMessage:string
}

export const Message = ({ loginMessage }:MessageProps) => {
  return (
    <>
      {loginMessage && <p className="text-red-500" >{loginMessage}</p>}
    </>
  )
}