import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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

const ScoreWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const GoMessageButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 40px;
  background-color: #000;

  border-radius: 50px;

  color: #e5308c;
  font-size: 15px;

  outline: none;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    background-color: white;
    border: 2px solid #e5308c;

    font-weight: 600;
  }
`;

const ImageWrap = styled.img`
  width: 200px;
  height: 200px;
`;

const ScoreTitle = styled.h3`
  font-size: 22px;
  text-align: center;
`;

const Point = styled.div`
  width: 110px;
  height: 40px;
  margin-right: 5px;
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
  font-size: 18px;
  font-weight: 500;
`;

const Point2 = styled.div`
  width: 120px;
  height: 50px;
  margin-right: 5px;
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
  font-size: 30px;
  font-weight: 500;
`;

const ScoreNumber = styled.h3`
  margin-top: -2px;

  font-size: 30px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #3b3a3b;
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

export default function Score() {
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  console.log(quiz_list);
  console.log(quiz_list[0].answer);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
  console.log(user_answer_list);
  const name = useSelector((state) => state.quiz.name);
  console.log(name);
  const score_texts = useSelector((state) => state.quiz.score_text);
  console.log(score_texts);

  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === user_answer_list[idx];
    }).length;

  console.log(_score);

  const score = Math.round(_score);
  console.log(score);

  // 점수별로 텍스트를 띄워줄 준비!
  let score_text = "";

  // Object.keys는 딕셔너리의 키값을 배열로 만들어주는 것.
  // [40, 60, 80, 100]
  Object.keys(score_texts).map((s, idx) => {
    // 첫번째 텍스트 넣어주기
    if (idx === 0) {
      score_text = score_texts[s];
    }
    // 실제 점수와 기준 점수(키로 넣었던 점수) 비교해서 텍스트를 넣자!
    score_text = parseInt(s) <= score ? score_texts[s] : score_text;
  });

  const navigate = useNavigate();

  return (
    <ScoreWrap>
      <ImageWrap src={randomImgArr[randomNumber]} />
      <ScoreTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Point>{name}</Point> 퀴즈에 대한
        </div>
        내 점수는?
      </ScoreTitle>

      <ScoreNumber>
        <Point2>{score}</Point2>점
      </ScoreNumber>

      <Comment>{score_text}</Comment>

      <GoMessageButton
        onClick={() => {
          navigate("/message");
        }}
      >
        {name}에게 한 마디
      </GoMessageButton>
    </ScoreWrap>
  );
}
