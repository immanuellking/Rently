import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { LuLock } from "react-icons/lu";

const TenantSignUp = () => {
  return (
    <div
      className="w-screen h-screen pt-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <div className="bg-[rgba(255,255,255,0.71)] backdrop-blur-[5.9px] rounded-[16px] border-[1px] border-[rgba(255,255,255,0.5)] w-4/5 m-auto py-10 px-12">
        <div className="w-full flex flex-col items-center gap-y-3">
          <h1 className="text-2xl font-bold m-0 p-0">Become a Rently Member</h1>
          <p>Join Rently Today.</p>
          <button className="flex items-center border-[1px] border-darkGrey bg-white px-4 py-2 rounded-3xl text-sm font-semibold">
            <div className="w-4 h-4 mr-2">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path
                    fill="none"
                    d="M0 0h48v48H0z"
                  ></path>
                </g>
              </svg>
            </div>
            Sign up with Google
          </button>
        </div>

        <div className="mt-20">
          <form className="grid grid-cols-2 gap-x-10 gap-y-5" >
            <div className="space-y-1">
              <label htmlFor="first_name" className="text-xs font-bold ml-8" >FIRST NAME</label>
              <div className="flex items-center px-6 py-4 border-[1px] space-x-4 border-[rgb(153,164,225)] rounded-full bg-[rgb(250,250,254)]">
                <IoPersonOutline size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm "
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="last_name" className="text-xs font-bold ml-8" >LAST NAME</label>
              <div className="flex items-center px-6 py-4 border-[1px] space-x-4 border-[rgb(153,164,225)] rounded-full bg-[rgb(250,250,254)]">
                <IoPersonOutline size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm "
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold ml-8" >EMAIL ADDRESS</label>
              <div className="has-[:focus]:bg-red-500 flex items-center px-6 py-4 border-[1px] space-x-4 border-[rgb(153,164,225)] rounded-full bg-[rgb(250,250,254)]">
                <GoMail size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm focus:bg-blue-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-xs font-bold ml-8" >PASSWORD</label>
              <div className="flex items-center px-6 py-4 border-[1px] space-x-4 border-[rgb(153,164,225)] rounded-full bg-[rgb(250,250,254)]">
                <LuLock size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm placeholder:text-darkGrey"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TenantSignUp;
