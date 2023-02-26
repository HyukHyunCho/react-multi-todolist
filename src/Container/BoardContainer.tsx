import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardCard from "../Components/BoardCard";
import { ITodo, todoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { useState } from "react";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
   */
  border-radius: 5px;
  //background-color: ${props => props.theme.boardColor};
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProp {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProp>`
  min-height: 50px;
  transition: background-color 0.3s ease-in-out;
  background-color: ${props =>
    props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "red" : "#E6EEF4"};
`;

const Form = styled.form`
  margin: 20px 3px;
  input {
    width: 95%;
    height: 25px;
    border-radius: 5px;
    padding: 5px;
  }
`;

const TextBtn = styled.div`
  padding: 0px 10px;
  cursor: pointer;
`;
const AddBtn = styled.button`
  margin-top: 5px;
  padding: 10px;
  color: #fff;
  border: 0;
  background-color: #0079bf;
  cursor: pointer;
  border-radius: 7px;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}


function Board({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(todoState);
  const { register, handleSubmit } = useForm<IForm>();
  const [visibleAddBtn, setVisibleAddBtn] = useState(false);

  const onSubmit = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos(allBoards => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
  };

  const onUpdate = (id: number) => {
  
    const index = toDos.findIndex(data => data.id === id);
    const newTodo = [...toDos];
    
    newTodo.splice(index, 1, {
      id: id,
      text: "kkk",
    });

    setToDos(allBoards => {
      return {
        ...allBoards,
        [boardId]: newTodo,
      };
    });

  };

  const onDelete = (id: number) => {

    const arr = toDos.filter(data => data.id !== id);
    setToDos(allBoards => {
      return {
        ...allBoards,
        [boardId]: arr
      };
    });
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <BoardCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
      {!visibleAddBtn && (
        <TextBtn onClick={() => setVisibleAddBtn(true)}>+ Add a Card</TextBtn>
      )}
      {visibleAddBtn && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("toDo", { required: true })}
            type="text"
            placeholder={`입력해주세요`}
          />
          <AddBtn>Add Card</AddBtn>
          <TextBtn onClick={() => setVisibleAddBtn(false)}>X</TextBtn>
        </Form>
      )}
    </Wrapper>
  );
}

export default Board;
