import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed, EyeOff, LockKeyhole, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  let loading = false;

  const [input, setinput] = useState({
    newpassword: "",
    confirmnewpassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

 
  return (
    <>
      <div className="container max-w-full bg-pastel min-w-[400px] p-5 h-screen flex flex-col justify-center items-center">
        <div className="border p-5 border-deep-teal  md:w-[50%] bg-white lg:w-[40%] shadow-2xl flex justify-center items-center">
          <form
            onSubmit={handlesubmit}
            className="border p-8 border-deep-teal  sm:w-full flex items-center flex-col"
          >
            <h1 className=" text-5xl text-deep-teal font-bold ">Bite_Box</h1>
            <div className="w-full relative mb-4">
              <Input
                className="w-full h-10 px-10 border mt-5 border-deep-teal  focus-visible:ring-deep-teal focus-visible:ring-1"
                type="password"
                name="newpassword"
                value={input.password}
                onChange={handlechange}
                placeholder="Create New Password"
              />
              <LockKeyhole className="absolute inset-y-0 text-deep-teal mt-7 ml-2" />
              <div className="w-full relative">
                <Input
                  className="w-full h-10 px-10 border mt-5 border-deep-teal  focus-visible:ring-deep-teal focus-visible:ring-1"
                  type="password"
                  name="confirmnewpassword"
                  value={input.password}
                  onChange={handlechange}
                  placeholder="Confirm New Password"
                />
                <LockKeyhole className="absolute inset-y-0 text-deep-teal mt-2 ml-2" />
              </div>
              <div className="flex justify-start items-center gap-2 mt-2">
                <Input type="checkbox" className="w-[20px] ml-2" />
                <h1>Show Password</h1>
              </div>
            </div>

            {loading ? (
              <Button className="w-full  cursor-pointer bg-deep-teal hover:bg-hover">
                <Loader className="animate-spin" /> Please Wait
              </Button>
            ) : (
              <Button className="w-full cursor-pointer bg-deep-teal hover:bg-hover">
                Reset Password
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
