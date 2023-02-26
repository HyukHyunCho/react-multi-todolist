import React, { ChangeEvent, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./Container/BoardContainer";
import ModalContainer from "./Container/ModalContainer";

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 1%;
`;

const BoardContainer = styled.div`
  flex-basis: 23.5%;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #e6eef4;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(todoState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const addList = () => {
    setModalOpen(true);
  };
  
  console.log(toDos)

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setToDos(allBoards => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos(allBoards => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <Layout>
      <button onClick={() => addList()}>AddList</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          {Object.keys(toDos).map(boardId => (
            <BoardContainer key={boardId}>
              <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
            </BoardContainer>
          ))}
        </Wrapper>
      </DragDropContext>
      {modalOpen && (
        <ModalContainer
          setModalOpen={setModalOpen}
        />
      )}
    </Layout>
  );
}

export default App;
