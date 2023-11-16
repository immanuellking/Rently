import { ref, getDownloadURL } from "firebase/storage";

import { storage } from "../config/firebase";

export const getImageUrl = (image) => {
  const imageRef = ref(storage, image);

  return getDownloadURL(imageRef)
    .then((url) => {
      console.log("Image Downloaded Successfully", url);
      return url;
    })
    .catch((error) => {
      console.log("Error Occured", error);
    });
};
