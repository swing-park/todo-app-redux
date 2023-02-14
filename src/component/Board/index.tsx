import styled from "styled-components";
import { Card as ICard } from "types";
import Input from "./Input";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/config";
import toDo from "redux/modules/toDo";

const BoardWrapper = styled.div`
  padding: 0px 30px;
  height: 300px;
`;

const BoardTitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0px;
`;

const CardList = styled.div`
  display: flex;
  gap: 10px;
  overflow: auto;
`;

const Board = () => {
  const cards = useSelector((state: RootState) => state.toDoReducer);
  const dispatch = useDispatch();

  const createCard = (e: React.FormEvent<HTMLFormElement>, card: ICard) => {
    e.preventDefault();
    dispatch(toDo.actions.add({ title: card.title, content: card.content }));
  };

  const deleteCard = (id: number) => dispatch(toDo.actions.delete({ id }));

  const updateCard = (id: number) => dispatch(toDo.actions.update({ id }));

  return (
    <>
      <Input handleSubmit={createCard} />
      <BoardWrapper>
        <BoardTitle>Working 🔥</BoardTitle>
        <CardList>
          {cards
            .filter((card) => !card.isDone)
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                isDone={card.isDone}
                title={card.title}
                content={card.content}
                handleDelete={deleteCard}
                handleUpdate={updateCard}
              />
            ))}
        </CardList>
      </BoardWrapper>
      <BoardWrapper>
        <BoardTitle>Done 🫡</BoardTitle>
        <CardList>
          {cards
            .filter((card) => card.isDone)
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                isDone={card.isDone}
                title={card.title}
                content={card.content}
                handleDelete={deleteCard}
                handleUpdate={updateCard}
              />
            ))}
        </CardList>
      </BoardWrapper>
    </>
  );
};

export default Board;
