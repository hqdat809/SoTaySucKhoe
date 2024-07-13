import {
  getSourceBySubject,
  getAllSource,
  searchSource,
} from "../firebase/source";

export const getSourceBySubjectService = async (subjectId: string) => {
  return await getSourceBySubject(subjectId)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getAllSourceService = async () => {
  return await getAllSource()
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const searchSourceService = async (searchText: string) => {
  return await searchSource(searchText)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};
