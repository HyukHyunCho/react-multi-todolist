import {
  Dispatch,
  SetStateAction,
} from "react";
import {
  ModalContainer,
  ModalWrapper,
  Modal,
  ModalClose,
  Title,
  ModalContent,
} from "./styles";

interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function BoardModal({ setModalOpen, children }: IModalProps) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <Modal >
          <ModalClose onClick={() => setModalOpen(false)}>X</ModalClose>
          <ModalContent>
            <Title>Board 추가</Title>
            {children}
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </ModalContainer>
  );
}