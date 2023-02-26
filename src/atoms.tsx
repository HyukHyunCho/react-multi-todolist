import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const todoState = atom<IToDoState>({
  key: "toDo",
  default: {
    toDo: [],
    doing: [],
    done: [],
  },
});
