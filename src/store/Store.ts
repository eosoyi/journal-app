import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth/AuthSlice";
import { journalSlice } from "./journal/journalSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    journal: journalSlice.reducer

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
