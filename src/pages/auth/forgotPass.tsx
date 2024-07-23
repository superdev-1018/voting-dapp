import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography,Input,Checkbox, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import InputWithPrefix from "../../components/input/Input_with_prefix";
import InputWithPreAndBehindfix from "../../components/input/Input_with_pre_and_back";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col flex-wrap justify-start items-start p-4 md:p-16 lg:p-10 xl:p-48 gap-6">
      <div>
        <Typography variant="h5" className="font-[Rubik,sans-self]">
        Sign In to your Account
      </Typography>
      <Typography className="text-sm font-[Rubik,sans-self]">
        Welcome back! please enter your detail
      </Typography>
      </div>
      
        <div className="w-full">
            <InputWithPrefix />
        </div>
        
        <div className="px-2 w-full">
            <Button variant="filled" className="w-full p-4"><Link to="/" className="font-[Rubik,sans-self] text-base normal-case">Continue</Link></Button>
        </div>
        <div className="flex flex-row w-full justify-center"><Typography ><Link to="/register" className="font-bold">Back to Sign In</Link></Typography></div>
        <div className="flex flex-row w-full h-full justify-center align-bottom"><Typography className="fixed bottom-8">Don’t have an account? <Link to="/register" className="font-bold">Sing Up</Link></Typography></div>
    </div>
  );
}
