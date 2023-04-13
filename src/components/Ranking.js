import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAnswer } from "../redux/modules/quiz";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  & > p {
    text-align: center;
  }

  & > p > span {
    border-radius: 30px;
    background-color: #fef5d4;
    font-weight: 600;
    padding: 4px 8px;
  }
`;

const RankWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      0deg,
      rgba(255, 174, 135, 0.8) 2%,
      rgba(227, 26, 128, 0.8) 98%
    );
    border-radius: 6px;
  }
`;

const RankItem = styled.div`
  width: calc(100% - 20px);
  margin: 8px 10px;
  display: flex;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.highlight ? "#ffd6aa" : "#ffffff")};
`;

const RankNum = styled.div`
  width: 100px;
  height: 100%;

  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  border-right: 1px solid #ddd;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > span {
    color: rgb(227, 26, 128);
  }
`;

const RankUser = styled.div`
  width: 170px;
  padding: 8px 16px;
  box-sizing: border-box;
  text-align: left;
  & > p {
    &:first-child > b {
      border-bottom: 2px solid #212121;
    }
    margin: 0px 0px 8px 0px;
  }
`;

const Button = styled.button`
  position: fixed;
  bottom: 3vh;
  left: 0;
  width: 80vw;
  padding: 8px 24px;
  background-color: #000;
  border-radius: 30px;
  margin: 0px 10vw;

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

export default function Ranking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _ranking = useSelector((state) => state.rank.ranking);
  console.log(_ranking);

  // 스크롤 이동할 div의 ref를 잡아줄 것.
  const user_rank = useRef(null);
  console.log(user_rank);

  // Array 내장 함수 sort로 정렬
  const ranking = _ranking.sort((a, b) => {
    return b.score - a.score;
  });

  useEffect(() => {
    // current 가 없을 때는 바로 리턴.
    if (!user_rank.current) {
      return;
    }
    // offsetTop 속성을 이용해 스크롤을 이동.
    window.scrollTo({
      top: user_rank.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Wrap>
      <TopBar>
        <p>
          <span>{ranking.length}명</span>의 사람들 중 당신은?
        </p>
      </TopBar>

      <RankWrap>
        {ranking.map((r, idx) => {
          if (r.current) {
            return (
              <RankItem key={idx} highlight={true} ref={user_rank}>
                <RankNum>
                  <span>{idx + 1}</span>등
                </RankNum>
                <RankUser>
                  <p>
                    <b>{r.name}</b>
                  </p>
                  <p>{r.message}</p>
                </RankUser>
              </RankItem>
            );
          }
          return (
            <RankItem key={idx}>
              <RankNum>
                <span>{idx + 1}</span>등
              </RankNum>
              <RankUser>
                <p>
                  <b>{r.name}</b>
                </p>
                <p>{r.message}</p>
              </RankUser>
            </RankItem>
          );
        })}
      </RankWrap>

      <Button
        onClick={() => {
          dispatch(resetAnswer());
          navigate("/");
        }}
      >
        다시 하기
      </Button>
    </Wrap>
  );
}
