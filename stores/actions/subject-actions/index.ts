import { ESubjectAction } from "./constants";
import { TGetSubjectAction } from "./types";

export const getSubjectAction = (cb1?: () => void): TGetSubjectAction => ({
  type: ESubjectAction.GET_SUBJECT,
  cb1,
});

export const getSubjectRequestAction = () => ({
  type: ESubjectAction.GET_SUBJECT_REQUEST,
});

export const getSubjectSuccessAction = (payload: any) => ({
  type: ESubjectAction.GET_SUBJECT_SUCCESS,
  payload,
});

export const getSubjectFailureAction = (error: any) => ({
  type: ESubjectAction.GET_SUBJECT_FAILURE,
  payload: error,
});
