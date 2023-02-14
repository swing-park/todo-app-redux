import { RootState } from "redux/config";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const Detail = () => {
  const toDos = useSelector((state: RootState) => state.toDoReducer);
  const id = useParams().id;
  const navigate = useNavigate();
  const toDo = id ? toDos.find((todo) => todo.id === parseInt(id)) : null;

  const handleOnClickBackBtn = () => navigate(-1);

  return (
    <S.DetailPageLayout>
      <S.DetailBox>
        <S.Wrapper>
          <span>ID : {toDo?.id}</span>
          <S.BackBtn
            variant="outlined"
            color="inherit"
            onClick={handleOnClickBackBtn}
          >
            Back
          </S.BackBtn>
        </S.Wrapper>
        <S.Title>{toDo?.title}</S.Title>
        <span>{toDo?.content}</span>
      </S.DetailBox>
    </S.DetailPageLayout>
  );
};

export default Detail;
