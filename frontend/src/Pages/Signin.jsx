import React from 'react'
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import ButtonWarning from "../components/ButtonWarning"





function Signin() {
        return (
                <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-full sm:w-full p-5
                h-90 text-center">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your information to Login in your Account"}/> 
                    <InputBox placeholder={"Enter Your Email"} label={"Email"}/>
                    <InputBox placeholder={"Enter Your Password"} label={"Password"}/>
                    <Button Button={"Sign in"}/>
                    <ButtonWarning label={"Create an Account?"}  ButtonText={"Signin"} to={"/signup"}/>
                  </div>
                </div>
              </div>
        )
}

export default Signin