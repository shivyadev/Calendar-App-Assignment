import type { TaskPayload, TaskState } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskState = {};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskPayload>) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(task);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
