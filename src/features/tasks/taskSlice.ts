import type { Task, TaskPayload, TaskState } from "@/types";
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
    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const date = updatedTask.date;
      if (state[date]) {
        const taskIndex = state[date].findIndex(
          (task) => task.id === updatedTask.id
        );
        if (taskIndex !== -1) {
          state[date][taskIndex] = updatedTask;
        }
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      const { id } = task;
      const date = task.date;
      if (state[date]) {
        state[date] = state[date].filter((task) => task.id !== id);
        if (state[date].length === 0) {
          delete state[date];
        }
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
