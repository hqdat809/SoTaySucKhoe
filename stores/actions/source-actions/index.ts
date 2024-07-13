import { ESourceAction } from "./constants";
import {
  TGetSourceAction,
  TGetAllSourceAction,
  TSearchSourceAction,
} from "./types";

export const getSourceAction = (
  payload: string,
  cb1?: () => void
): TGetSourceAction => ({
  type: ESourceAction.GET_SOURCE,
  payload,
  cb1,
});

export const getSourceRequestAction = () => ({
  type: ESourceAction.GET_SOURCE_REQUEST,
});

export const getSourceSuccessAction = (payload: any) => ({
  type: ESourceAction.GET_SOURCE_SUCCESS,
  payload,
});

export const getSourceFailureAction = (error: any) => ({
  type: ESourceAction.GET_SOURCE_FAILURE,
  payload: error,
});

export const getAllSourceAction = (cb1?: () => void): TGetAllSourceAction => ({
  type: ESourceAction.GET_ALL_SOURCE,
  cb1,
});

export const getAllSourceRequestAction = () => ({
  type: ESourceAction.GET_ALL_SOURCE_REQUEST,
});

export const getAllSourceSuccessAction = (payload: any) => ({
  type: ESourceAction.GET_ALL_SOURCE_SUCCESS,
  payload,
});

export const getAllSourceFailureAction = (error: any) => ({
  type: ESourceAction.GET_ALL_SOURCE_FAILURE,
  payload: error,
});

export const searchSourceAction = (payload: string): TSearchSourceAction => ({
  type: ESourceAction.SEARCH_SOURCE,
  payload,
});

export const searchSourceRequestAction = () => ({
  type: ESourceAction.SEARCH_SOURCE_REQUEST,
});

export const searchSourceSuccessAction = (payload: any) => ({
  type: ESourceAction.SEARCH_SOURCE_SUCCESS,
  payload,
});

export const searchSourceFailureAction = (error: any) => ({
  type: ESourceAction.SEARCH_SOURCE_FAILURE,
  payload: error,
});
