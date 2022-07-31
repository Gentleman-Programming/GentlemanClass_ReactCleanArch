import { UserEmptyState } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return UserEmptyState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
