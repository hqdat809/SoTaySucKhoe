import { ESourceAction } from "../actions/source-actions/constants";

type TAuthState = {
  sources: any[];
  popularSources: any[];
};

const initialState: TAuthState = {
  sources: [],
  popularSources: [],
};

const sourceReducer = (
  state = initialState,
  action: { type: string; payload: any }
): TAuthState => {
  switch (action.type) {
    case ESourceAction.GET_SOURCE_SUCCESS:
      return {
        ...state,
        sources: action.payload,
      };
    case ESourceAction.GET_ALL_SOURCE_SUCCESS:
      return {
        ...state,
        popularSources: action.payload,
      };
    case ESourceAction.SEARCH_SOURCE_SUCCESS:
      return {
        ...state,
        sources: action.payload,
      };
    default:
      return state;
  }
};

export default sourceReducer;
