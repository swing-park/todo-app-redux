import { useRef, useState } from "react";
import { ArrowForward, NotificationImportant } from "@mui/icons-material";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as S from "./styles";

const Story = () => {
  const [modal_1, setModal_1] = useState<boolean>(false);
  const [modal_2, setModal_2] = useState<boolean>(false);
  const [selectValue_1, setSelectValue_1] = useState<string>("리엑트");
  const [selectValue_2, setSelectValue_2] = useState<string>("리엑트");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const changeInputFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = Number(e.target.value.replaceAll(",", "")).toLocaleString(
      "ko-KR"
    );
  };

  const handleOnClickSaveBtn = () => {
    alert(
      `{name : ${
        nameInputRef.current?.value
      }, price : ${priceInputRef.current?.value.replace(",", "")}}`
    );
  };

  const handleShowModal_1 = () => setModal_1(!modal_1);
  const handleShowModal_2 = () => setModal_2(!modal_2);

  const handleChangeSelect_1 = (e: SelectChangeEvent) =>
    setSelectValue_1(e.target.value as string);
  const handleChangeSelect_2 = (e: SelectChangeEvent) =>
    setSelectValue_2(e.target.value as string);
  return (
    <>
      <S.MainContainer>
        <S.Title>Button</S.Title>
        <S.Container>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => alert("버튼을 만들어보세요")}
          >
            Large Primary Button
          </Button>
          <Button variant="contained">Medium</Button>
          <Button variant="contained" size="small">
            Small
          </Button>
        </S.Container>
        <S.Container>
          <Button
            color="warning"
            variant="outlined"
            size="large"
            endIcon={<NotificationImportant />}
            onClick={() => prompt("어렵나요?")}
          >
            Large Negative Button
          </Button>
          <Button color="warning" variant="contained">
            Medium
          </Button>
          <Button color="warning" variant="contained" size="small">
            Small
          </Button>
        </S.Container>
      </S.MainContainer>

      <S.MainContainer>
        <S.Title>Input</S.Title>
        <S.Container>
          <label htmlFor="name">이름</label>
          <S.Input type="text" id="name" ref={nameInputRef} />
          <label htmlFor="price">가격</label>
          <S.Input
            type="text"
            id="price"
            onChange={changeInputFormat}
            ref={priceInputRef}
          />
          <Button
            variant="contained"
            size="small"
            onClick={handleOnClickSaveBtn}
          >
            저장
          </Button>
        </S.Container>
      </S.MainContainer>

      <S.MainContainer>
        <S.Title>Modal</S.Title>
        <S.Container>
          <Button variant="contained" size="small" onClick={handleShowModal_1}>
            Open Modal
          </Button>
          <Button
            color="warning"
            variant="outlined"
            size="large"
            onClick={handleShowModal_2}
          >
            Open Modal
          </Button>
          <S.ModalBackground isShow={modal_1} />
          <S.ModalBox isShow={modal_1}>
            <span>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </span>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                color="warning"
                onClick={handleShowModal_1}
              >
                닫기
              </Button>
              <Button variant="contained">확인</Button>
            </div>
          </S.ModalBox>

          <S.ModalBackground isShow={modal_2} onClick={handleShowModal_2} />
          <S.ModalBox isShow={modal_2}>
            <span>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</span>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                color="warning"
                onClick={handleShowModal_2}
              >
                닫기
              </Button>
            </div>
          </S.ModalBox>
        </S.Container>
      </S.MainContainer>

      <S.SelectContainer>
        <S.Title>Select</S.Title>
        <S.Container>
          <Select
            value={selectValue_1}
            onChange={handleChangeSelect_1}
            style={{ width: "300px", textAlign: "center" }}
          >
            <MenuItem value="리엑트">리엑트</MenuItem>
            <MenuItem value="자바">자바</MenuItem>
            <MenuItem value="스프링">스프링</MenuItem>
            <MenuItem value="리엑트 네이티브">리엑트 네이티브</MenuItem>
          </Select>

          <Select
            value={selectValue_2}
            onChange={handleChangeSelect_2}
            style={{ width: "300px", textAlign: "center" }}
          >
            <MenuItem value="리엑트">리엑트</MenuItem>
            <MenuItem value="자바">자바</MenuItem>
            <MenuItem value="스프링">스프링</MenuItem>
            <MenuItem value="리엑트 네이티브">리엑트 네이티브</MenuItem>
          </Select>
        </S.Container>
      </S.SelectContainer>
    </>
  );
};

export default Story;
