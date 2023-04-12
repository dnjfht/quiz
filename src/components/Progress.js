import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Wrap = styled.div`
  width: 100%;
  height: 16px;
  background: linear-gradient(
    90deg,
    rgb(255, 174, 135) 2%,
    rgb(227, 26, 128) 98%
  );
  border-radius: 50px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 50px;

  position: relative;

  transition: width 0.5s;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);

  position: absolute;
  right: -20px;
  top: 50%;
  margin-top: -20px;
`;

export default function Progress() {
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const select_answer = useSelector((state) => state.quiz.user_answer_list);

  let count = select_answer.length;

  return (
    <Wrap>
      <ProgressBar width={(count / quiz_list.length) * 100 + "%"}>
        <Circle />
      </ProgressBar>
    </Wrap>
  );
}
