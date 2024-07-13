import { ESourceAction } from "./constants";

export type TGetSourceAction = {
  type: ESourceAction.GET_SOURCE;
  payload: string;
  cb1?: () => void;
};

export type TGetAllSourceAction = {
  type: ESourceAction.GET_ALL_SOURCE;
  cb1?: () => void;
};

export type TSearchSourceAction = {
  type: ESourceAction.SEARCH_SOURCE;
  payload: string;
};
