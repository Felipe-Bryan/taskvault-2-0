import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../../services/api.service';
import UserType from '../../types/UserType';

export const loginAction = createAsyncThunk('loggedUser/login', async (props: UserToLogin) => {
  const result = await login(props);
  return result;
});

const userSlice = createSlice({
  name: 'loggedUser',
  initialState: {} as UserType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAction.pending, () => {
      console.log('Login started');
    });
    builder.addCase(loginAction.fulfilled, (_, action) => {
      return action.payload.data;
    });
  }
});

export default userSlice.reducer;
