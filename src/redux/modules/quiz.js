// action value
const ADDANSWER = "add_answer";

// action creator
export const addAnswer = (payload) => {
  return {
    type: ADDANSWER,
    payload: payload,
  };
};

// initialState
const initialState = {
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
    case ADDANSWER: {
      const new_user_quiz_list = [...state.user_answer_list, action.payload];
      return { ...state, user_answer_list: new_user_quiz_list };
    }
    default:
      return state;
  }
};

export default quiz;
