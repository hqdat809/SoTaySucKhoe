import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllSubject = async () => {
  try {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(db, "subjects"));
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (error) {
    throw error;
  }
};
