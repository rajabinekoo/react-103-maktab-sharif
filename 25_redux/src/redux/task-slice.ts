import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";
import { ITask } from "../libs/types";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [] as ITask[],
  },
  reducers: {
    createTask(state, { payload }: PayloadAction<ITask>) {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!state.list.find((el) => el.title === payload.title)) {
        throw new Error("Already exist");
      }
      state.list.push({ ...payload, id: uuidV4() });
    },
    removeTask(state, action: PayloadAction<{ id: string }>) {
      state.list = state.list.filter((el) => el.id !== action.payload.id);
    },
    updateTask(state, action: PayloadAction<ITask>) {
      if (
        // eslint-disable-next-line no-extra-boolean-cast
        !!state.list.find(
          (el) =>
            el.title === action.payload.title && el.id !== action.payload.id
        )
      ) {
        throw new Error("Already exist");
      }
      state.list = state.list.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return el;
      });
    },
  },
});

export const { createTask, removeTask, updateTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
