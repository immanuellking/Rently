import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { fetchUserInfo } from "./userInfoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserInfoView = () => {
  const dispatch = useDispatch();

  const { firstName } = useSelector((state) => state.userInfo);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserEmail(user.email);
        dispatch(fetchUserInfo(user.email));
      } else {
        setCurrentUserEmail(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log("FIIIRRRRTTTSSSSS", first);
  console.log("FIIIRRRRTTTSSSSS Emmmmaiiiill", currentUserEmail);

  return <div>{firstName}</div>;
};

export default UserInfoView;
