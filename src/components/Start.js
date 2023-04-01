import React from "react";
import styled from "styled-components";
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
import { changeName } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrap = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const QuizTitle = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;

const Point = styled.div`
  width: 120px;
  height: 50px;
  margin-left: 5px;
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
  font-size: 16px;
  font-weight: 500;
`;

const NameInputWrap = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #e31a80;
  border-radius: 50px;

  color: #e2167d;
  font-size: 15px;

  outline: none;

  &::placeholder {
    color: #e31a80;
    font-size: 14px;

    opacity: 0.5;
  }
`;

const QuizStartButton = styled.button`
  width: 120px;
  height: 60px;
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

export default function Start() {
  const name = useSelector((state) => state.user.nickName);
  console.log(name);

  const dispatch = useDispatch();

  const nameInput = useRef();
  console.log(nameInput);
  // { current : input }

  const handleNameChange = (event) => {
    event.preventDefault();

    dispatch(changeName(nameInput.current.value));

    nameInput.current.value = "";

    navigate("/quiz");
  };

  const navigate = useNavigate();

  return (
    <Wrap>
      <ImageWrap src={randomImgArr[randomNumber]} />

      <QuizTitle>
        <Title>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            나는 <Point>{name}</Point>에 대해서
          </div>
          얼마나 알고 있을까?
        </Title>

        <NameInputWrap>
          <NameInput ref={nameInput} type="text" placeholder="write name..." />
        </NameInputWrap>
      </QuizTitle>

      <QuizStartButton onClick={handleNameChange}>Start</QuizStartButton>
    </Wrap>
  );
}
