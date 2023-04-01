import "./App.css";
import styled from "styled-components";
import Router from "./shared/Router";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(255, 174, 135);
  background: linear-gradient(
    0deg,
    rgba(255, 174, 135, 1) 2%,
    rgba(227, 26, 128, 1) 98%
  );

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 700px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 20px;

  box-shadow: 10px 10px 20px rgba(180, 13, 98, 0.4);
`;

const Deco = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e31a80;
  border-radius: 14px;
`;

function App() {
  return (
    <Wrap>
      <Container>
        <Deco>
          <Router />
        </Deco>
      </Container>
    </Wrap>
  );
}

export default App;
