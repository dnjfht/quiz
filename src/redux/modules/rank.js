// action value

// 유저의 이름을 변경
const ADDUSERNAMECHANGE = "add_user_name_change";
// 유저 메시지를 바꾼다
const ADDUSERMESSAGE = "add_user_message";
// 랭킹 정보를 추가한다
const ADDRANK = "add_rank";
// 랭킹 정보를 가져온다
const GETRANK = "get_rank";

// action creator

export const addUserNameChange = (payload) => {
  return {
    type: ADDUSERNAMECHANGE,
    payload: payload,
  };
};

export const addUserMessage = (payload) => {
  return {
    type: ADDUSERMESSAGE,
    payload: payload,
  };
};

export const addRank = (payload) => {
  return {
    type: ADDRANK,
    payload: payload,
  };
};

export const getRank = (payload) => {
  return {
    type: GETRANK,
    payload: payload,
  };
};

// initialState

const initialState = {
  user_name: "",
  user_message: "",
  user_score: "",
  score_text: {
    40: "다정하고 잘생긴 최현욱이랑 친해지기~^-^💛",
    60: "최현욱한테 입덕한지 얼마 안되셨군요?🧡",
    80: "최현욱을 조금 더 열성적으로 좋아해보세요!💕",
    100: "최현욱을 정말 좋아하시는군요!?💖",
  },
  ranking: [{ score: 40, name: "유승민", message: "촤현욱 존잘이야💖" }],
};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERNAMECHANGE: {
      return { ...state, user_name: action.payload };
    }
    default:
      return state;
  }
};

export default rank;
