import { ESubjectAction } from "./constants";

export type TGetSubjectAction = {
  type: ESubjectAction.GET_SUBJECT;
  cb1?: () => void;
};
