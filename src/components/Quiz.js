import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addAnswer } from "../redux/modules/quiz";
import { useNavigate } from "react-router-dom";

import img01 from "../img/img01.jpg";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.jpg";
import img04 from "../img/img04.jpg";
import img05 from "../img/img05.jpg";
import img06 from "../img/img06.jpg";
import img07 from "../img/img07.jpg";
import img08 from "../img/img08.jpg";
import img09 from "../img/img09.jpg";
import img10 from "../img/img10.jpg";
import { useEffect } from "react";

const QuizWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  width: 100%;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 28px;
`;

const Point = styled.div`
  width: 120px;
  height: 50px;
  margin-right: 10px;
  background: rgb(255, 174, 135);
  background: linear-gradient(
    0deg,
    rgba(255, 174, 135, 1) 2%,
    rgba(226, 22, 125, 1) 98%
  );
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 21px;
  font-weight: 500;
`;

const ImageWrap = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 30px;

  object-fit: cover;
`;

const Question = styled.h3`
  font-size: 22px;
`;

const SelectAnswerWrap = styled.div`
  width: 100%;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SelectAnswerButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 80px;
  color: #e2167d;

  transition: all 0.5s;

  &:hover {
    color: #000;
  }
`;

const QuestionWrap = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const randomImgArr = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img06,
  img07,
  img08,
  img09,
  img10,
];

const randomNumber = parseInt(10 * Math.random()) + 1;
console.log(randomNumber);

export default function Quiz() {
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  console.log(quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
  console.log(user_answer_list);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (quiz_list.length === user_answer_list.length) {
      navigate("/score");
      return;
    }
  }, [user_answer_list]);

  if (quiz_list.length === user_answer_list.length) {
    return null;
  }

  return (
    <QuizWrap>
      <Title>
        <Point>{user_answer_list.length + 1}번째</Point> 퀴즈
      </Title>

      <ImageWrap src={randomImgArr[randomNumber]} />

      <QuestionWrap>
        <Question>{quiz_list[user_answer_list.length].question}</Question>
      </QuestionWrap>

      <SelectAnswerWrap>
        <SelectAnswerButton
          onClick={() => {
            dispatch(addAnswer(true));
          }}
        >
          O
        </SelectAnswerButton>

        <SelectAnswerButton
          onClick={() => {
            dispatch(addAnswer(false));
          }}
        >
          X
        </SelectAnswerButton>
      </SelectAnswerWrap>
    </QuizWrap>
  );
}
