import { Dispatch, SetStateAction } from "react";
import BoardModal from "../Components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface IForm {
  toDo: string;
}

function ModalContainer({ setModalOpen }: IModalProps) {
  const setToDos = useSetRecoilState(todoState);
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos(board => {
      return {
        ...board,
        [toDo]: [],
      };
    });
    setModalOpen(false);
  };

  return (
    <BoardModal setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`입력해주세요`}
        />
        <button>btn</button>
      </form>
    </BoardModal>
  );
}

export default ModalContainer;
