import { ESubjectAction } from "../actions/subject-actions/constants";

type TAuthState = {
  subjects: any[];
};

const initialState: TAuthState = {
  subjects: [],
};

const subjectReducer = (
  state = initialState,
  action: { type: string; payload: any }
): TAuthState => {
  switch (action.type) {
    case ESubjectAction.GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subjects: action.payload,
      };

    default:
      return state;
  }
};

export default subjectReducer;
