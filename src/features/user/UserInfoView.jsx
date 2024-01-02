import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { fetchUserInfo } from "./userInfoSlice";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

const UserInfoView = () => {
  const first = useSelector((state) => state.userInfo);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserEmail(user.email);
        fetchUserInfo(user.email);
      } else {
        setCurrentUserEmail(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("FIIIRRRRTTTSSSSS UUUSS", first);

  return <div>userInfoView</div>;
};

export default UserInfoView;
