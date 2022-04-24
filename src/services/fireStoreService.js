import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase.config";
import _ from "lodash";

export const getData = async (dataUrl) => {
  const data = collection(db, dataUrl);
  const dataSnapshot = await getDocs(data);
  let pageContents = dataSnapshot.docs.map((doc) => {
    console.log({ _id: doc.id, ...doc.data() });
    return { _id: doc.id, ...doc.data() };
  });
  return pageContents;
};

export default getData;
