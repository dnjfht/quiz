import React from "react";
import styled from "styled-components";
import img01 from "../img/404_error.png";
import { useNavigate } from "react-router-dom";

const NotPageWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.img`
  width: 360px;
`;

const HomeButton = styled.button`
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

export default function NotPage() {
  const navigate = useNavigate();

  return (
    <NotPageWrap>
      <ImageWrap src={img01} />

      <HomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 이동
      </HomeButton>
    </NotPageWrap>
  );
}
