import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import Title from "./Title";
import Content from "./Content";

interface Props {
  id: number;
  isDone: boolean;
  title: string;
  content: string;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
  border: 3px solid #20c997;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
  gap: 10px;
`;

const Button = styled(MuiButton)`
  width: 100%;
`;

const Card = ({
  id,
  isDone,
  title,
  content,
  handleDelete,
  handleUpdate,
}: Props) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title title={title} />
        <Link to={`/${id}`}>
          <span style={{ textDecoration: "underline", color: "#339af0" }}>
            상세보기
          </span>
        </Link>
      </div>
      <Content content={content} />
      <ButtonWrapper>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(id)}
        >
          삭제하기
        </Button>
        {isDone ? (
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleUpdate(id)}
          >
            취소
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => handleUpdate(id)}
          >
            완료
          </Button>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default Card;
