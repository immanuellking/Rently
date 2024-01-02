import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { fetchUserInfo } from "./userInfoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserInfoView = () => {
  const dispatch = useDispatch();

  const { firstName } = useSelector((state) => state.userInfo);

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

  return <div>{firstName}</div>;
};

export default UserInfoView;
