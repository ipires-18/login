import React, { useState } from "react";
import { HeaderLogoTipo } from "./header-logotipo";
import { useLogin } from "../hooks/useLogin";
import { Button } from "./button";
import { Input } from "./input";
import { Message } from "./message";

export const FormLogin = () => {
  const { loginMessage, setEmail, setPassword, email, password, handleSubmit } = useLogin()

  return (
    <section className="px-20 flex w-full max-w-screen-md">
      <div className=" p-8 rounded-l-lg  flex flex-col justify-center space-y-5">

        <div className="space-y-2">
          <HeaderLogoTipo />
          <h1 className="text-2xl text-white font-semibold flex items-center justify-center">Entre em sua conta</h1>
        </div>
      
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            loginMessage={loginMessage}  
          />

          <Input   
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              loginMessage={loginMessage}  
          />
          
          <Button type="submit" title="Entrar" />

          <Message loginMessage={loginMessage} />
        </form>
      </div>
    </section>
  )
}