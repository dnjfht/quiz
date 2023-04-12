import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

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

import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addRank } from "../redux/modules/rank";

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

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

const MainTitle = styled.h3`
  width: 100%;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 16px;
`;

const Point = styled.span`
  width: 106px;
  height: 44px;
  margin-right: 5px;
  background: linear-gradient(
    0deg,
    rgb(255, 174, 135) 2%,
    rgb(226, 22, 125) 98%
  );
  border-radius: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 76px;
  margin: 4px 0px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(227, 26, 128, 0.98);
  border-radius: 16px;

  outline: none;

  font-size: 14px;

  &::placeholder {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const GoRankingButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 60px;
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

export default function Message() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useSelector((state) => state.quiz.name);
  const select_answers = useSelector((state) => state.quiz.user_answer_list);
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const userName = useSelector((state) => state.rank.user_name);

  // 정답만 걸러내기
  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === select_answers[idx];
    }).length;

  console.log(_score);

  // 점수 계산하기
  const score = Math.round(_score);
  console.log(score);

  const commentInput = useRef(null);
  console.log(commentInput);
  // {current: input.sc-kGTyPW}

  const handleAddUserData = (event) => {
    event.preventDefault();

    let rank_info = {
      score: parseInt(score),
      name: userName,
      message: commentInput.current.value,
      current: true,
    };

    // 랭킹 정보 넣기
    dispatch(addRank(rank_info));

    navigate("/ranking");
  };

  return (
    <Wrap>
      <IoIosArrowBack style={{ fontSize: 24, color: "gray" }} />

      <ContentWrap>
        <Img src={randomImgArr[randomNumber]} />

        <MainTitle>
          <Point>{name}</Point>에게 남기는 한 마디
        </MainTitle>

        <CommentInput
          ref={commentInput}
          type="text"
          placeholder="내가 최현욱에게 하고 싶은 말은..."
          rows={5}
          cols={33}
        />

        <GoRankingButton onClick={handleAddUserData}>
          남기고 랭킹 보러가기
        </GoRankingButton>
      </ContentWrap>
    </Wrap>
  );
}
