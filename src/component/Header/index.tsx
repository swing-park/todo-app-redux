import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px;
  margin: 20px 0px;
`;

const Text = styled.div`
  font-size: 3rem;
  font-family: "Unbounded", cursive;
  background: linear-gradient(to right, blue, skyblue);
  color: transparent;
  -webkit-background-clip: text;
`;

const Header = () => {
  return (
    <Container>
      <Text>Swing's TODOLIST</Text>
      <Link to="/story">컴포넌트 모음집 보러가기</Link>
    </Container>
  );
};

export default Header;
