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
