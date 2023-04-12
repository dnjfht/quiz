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

import { useSelector } from "react-redux";

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
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100px;
`;

const MainTitle = styled.h3`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 18px;
`;

const Point = styled.span`
  width: 120px;
  height: 50px;
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

export default function Message() {
  const name = useSelector((state) => state.quiz.name);

  return (
    <Wrap>
      <IoIosArrowBack style={{ fontSize: 24, color: "gray" }} />

      <ContentWrap>
        <Img src={randomImgArr[randomNumber]} />

        <MainTitle>
          <Point>{name}</Point>에게 남기는 한 마디
        </MainTitle>
      </ContentWrap>
    </Wrap>
  );
}
