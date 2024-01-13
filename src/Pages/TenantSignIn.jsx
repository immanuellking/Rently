import React, { useState } from "react";
import { GoMail } from "react-icons/go";
import { LuLock } from "react-icons/lu";

import { auth, googleProvider } from "../config/firebase";
import { db } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const TenantSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
      const user = userCredentials?.user;
      console.log("User Signed In successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Error signing in user:", error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Sign In GOOOGle", user);

      const user_email = user.email;

      const userCollectionRef = collection(db, "users");
      const q = query(userCollectionRef, where("email", "==", user_email));

      const querySnapshot = await getDocs(q);
      console.log("Query Snapshot !!!", querySnapshot);

      if (!querySnapshot.empty) {
        console.log("User with this email already exists in the database.");
        console.log("User Signed In successfully!");
      } else {
        console.log(
          "User with this email does not exists in the database so we add them."
        );
        const firstName = user.displayName.split(" ")[0];
        const lastName = user.displayName.split(" ").slice(1).join(" ");
        const userId = user.uid;

        await addDoc(userCollectionRef, {
          firstName: firstName,
          lastName: lastName,
          email: user_email,
          userId: userId,
        });

        console.log("User Registered successfully!");
      }

      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(auth?.currentUser?.email);

  return (
    <div
      className="w-screen min-h-screen py-10 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <div className="bg-[rgba(255,255,255,0.71)] backdrop-blur-[5.9px] rounded-[16px] border-[1px] border-[rgba(255,255,255,0.5)] w-[95%] md:w-[50%] lg:w-[40%] m-auto py-5 px-5 md:py-10 md:px-6 lg:px-12">
        <div className="w-full flex flex-col items-center gap-y-3">
          <h1 className="text-[22px] md:text-2xl font-bold m-0 p-0">Welcome Back</h1>
          <p className="text-sm md:text-base text-center">
            Sign into your Rently account to continue.
          </p>
          <button
            className="flex items-center border-[1px] border-darkGrey bg-white px-4 py-3 rounded-3xl text-sm font-semibold"
            onClick={signInGoogle}
          >
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
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </div>
            Sign in with Google
          </button>
        </div>

        <form className="mt-10 md:mt-12 lg:mt-20" onSubmit={signIn}>
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:gap-y-5">
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold ml-4 md:ml-8">
                EMAIL ADDRESS
              </label>
              <div className="has-[:focus]:ring-2 has-[:focus]:ring-[rgb(118,134,228)] flex items-center px-6 py-3 md:py-4 space-x-4 ring-[1px] ring-[rgb(153,164,225)] rounded-full bg-[rgb(250,250,254)]">
                <GoMail size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="text-xs font-bold ml-4 md:ml-8">
                PASSWORD
              </label>
              <div className="has-[:focus]:ring-2 has-[:focus]:ring-[rgb(118,134,228)] flex items-center px-6 py-3 md:py-4 space-x-4 ring-[1px] ring-[rgb(153,164,225)]  rounded-full bg-[rgb(250,250,254)]">
                <LuLock size={25} />
                <input
                  className="bg-transparent border-0 outline-0 w-full text-sm placeholder:text-darkGrey"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="w-full text-center px-6 py-3 md:py-4 bg-[rgb(46,72,218)] text-white font-bold mt-8 rounded-full">
            Sign In
          </button>
        </form>
        <div className="w-full flex justify-center mt-2 md:mt-5">
          <p className="text-sm">
            New To Rently?{" "}
            <span
              className="text-[rgb(46,72,218)] cursor-pointer"
              onClick={() => navigate("/create-account")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenantSignIn;
