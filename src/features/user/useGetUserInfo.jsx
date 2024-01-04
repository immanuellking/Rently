import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { fetchUserInfo } from "./userInfoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { BsPersonCircle } from "react-icons/bs";

const useGetUserInfo = () => {
  const dispatch = useDispatch();

  const { first_name, last_name } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserInfo(user.email));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return {first_name, last_name}
};

export default useGetUserInfo;