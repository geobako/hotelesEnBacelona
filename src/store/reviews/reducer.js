import TYPES from './types';

const initialState = {
  distributions: {},
  distributionsLoading: false,
  userName: '',
  messages: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPES.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    case TYPES.SET_USER_NAME:
      return {
        ...state,
        userName: payload,
      };
    case TYPES.GET_REVIEW_DISTRIBUTIONS.START:
      return {
        ...state,
        distributionsLoading: true,
      };
    case TYPES.GET_REVIEW_DISTRIBUTIONS.SUCCESS:
      return {
        ...state,
        distributionsLoading: false,
        distributions: payload,
      };
    case TYPES.GET_REVIEW_DISTRIBUTIONS.ERROR:
      return {
        ...state,
        distributionsLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
