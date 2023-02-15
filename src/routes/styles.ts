import { Button } from "@mui/material";
import styled from "styled-components";

export const DetailPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 500px;
  padding: 50px;

  border-radius: 50px;

  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const BackBtn = styled(Button)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainContainer = styled.div`
  margin: 30px 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 15px 0px;
`;

export const Input = styled.input`
  box-sizing: "border-box";
  border: 1px solid #000;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  :focus {
    outline: none;
    border: 3px solid #000;
  }
`;

export const ModalBackground = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: #000;
  opacity: 0.5;
`;

export const ModalBox = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 9999;
  padding: 20px;
`;

export const SelectContainer = styled(MainContainer)`
  border: 3px solid red;
`;
