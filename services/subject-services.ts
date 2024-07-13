import { getAllSubject } from "../firebase/subject";

export const getSubjectService = async () => {
  return await getAllSubject()
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
