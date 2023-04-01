// action value
const CHANGENAME = "change_name";

// action creator
export const changeName = (payload) => {
  return {
    type: CHANGENAME,
    payload: payload,
  };
};

// initialState
const initialState = { nickName: "" };

// reducer
const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGENAME: {
      return { ...state, nickName: action.payload };
    }
    default:
      return state;
  }
};

export default user;
