import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.isDragging ? "0px 2px 25px rgba(15, 15, 15, 0.5)" : "none"};
  background-color: ${props =>
    props.isDragging ? "#EAEAEA" : props.theme.cardColor};
`;

const CardTop = styled.div`
  
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface IBoardCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  onUpdate: any;
  onDelete: any;
}

function BoardCard({
  toDoId,
  toDoText,
  index,
  onUpdate,
  onDelete,
}: IBoardCardProps) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardTop>{toDoText}</CardTop>
          <CardBottom>
            <button onClick={() => onUpdate(toDoId)}>수정</button>
            <button onClick={() => onDelete(toDoId)}>X</button>
          </CardBottom>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(BoardCard);