// action value

// 퀴즈 데이터를 가져온다
const GETQUIZ = "get_quiz";
// 유저의 응답(퀴즈 답)을 추가한다
const ADDANSWER = "add_answer";

const RESETANSWER = "reset_answer";

// action creator
export const addAnswer = (payload) => {
  return {
    type: ADDANSWER,
    payload: payload,
  };
};

export const getQuiz = (payload) => {
  return {
    type: GETQUIZ,
    payload: payload,
  };
};

export const resetAnswer = (payload) => {
  return {
    type: RESETANSWER,
    payload: payload,
  };
};

// initialState
const initialState = {
  name: "최현욱",
  score_text: {
    40: "다정하고 잘생긴 최현욱이랑 친해지기~^-^💛",
    60: "최현욱한테 입덕한지 얼마 안되셨군요?🧡",
    80: "최현욱을 조금 더 열성적으로 좋아해보세요!💕",
    100: "최현욱을 정말 좋아하시는군요!?💖",
  },
  quiz_list: [
    { question: "최현욱의 키는 175cm이다.", answer: false },
    { question: "최현욱은 25살이다.", answer: false },
    { question: "최현욱은 모범택시에 출현했다.", answer: true },
    { question: "최현욱은 운동선수 출신이다.", answer: true },
    { question: "최현욱은 부산 출신이다.", answer: false },
    { question: "최현욱은 2020년에 배우로 데뷔를 하였다.", answer: false },
    {
      question: "최현욱이 나온 초등학교의 이름은 인성초등학교 이다.",
      answer: true,
    },
    {
      question: "최현욱은 드라마에서 안수호라는 역할을 맡은 적이 있다.",
      answer: true,
    },
    {
      question:
        "최현욱은 박시연이라는 여배우와 드라마에서 합을 맞춘 적이 있다.",
      answer: false,
    },
    {
      question: "최현욱의 데뷔 작품은 리얼:타임:러브이다.",
      answer: true,
    },
  ],
  user_answer_list: [],
};

// reducer
const quiz = (state = initialState, action) => {
  switch (action.type) {
    case GETQUIZ: {
      return { ...state, quiz_list: action.payload };
    }
    case ADDANSWER: {
      const new_user_quiz_list = [...state.user_answer_list, action.payload];
      return { ...state, user_answer_list: new_user_quiz_list };
    }
    case RESETANSWER: {
      return { ...state, user_answer_list: [] };
    }
    default:
      return state;
  }
};

export default quiz;
