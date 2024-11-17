import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface UserState {
  user: {
    // Add the user object structure here
    id?: string;
    name?: string;
    email?: string;
    picture?: string;
  } | null;
}

// Initial state of the user slice
const initialState: UserState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; name: string; email: string; picture: string }>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;