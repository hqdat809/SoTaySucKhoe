import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getSourceBySubject = async (subjectId: any) => {
  try {
    let result: any[] = [];
    const querySource = await query(
      collection(db, "source"),
      where("subjectId", "==", subjectId)
    );
    const snapshot = await getDocs(querySource);
    snapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllSource = async () => {
  try {
    let result: any[] = [];
    const snapshot = await getDocs(collection(db, "source"));
    snapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchSource = async (searchText: string) => {
  try {
    let result: any[] = [];
    const querySource = await query(
      collection(db, "source"),
      orderBy("title"),
      startAt(searchText),
      endAt(searchText + "\uf8ff")
    );
    const snapshot = await getDocs(querySource);

    snapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
