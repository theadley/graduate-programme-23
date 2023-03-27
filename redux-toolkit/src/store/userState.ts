import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./models/user";

const initialState: IUserState = {
  name: '',
  surname: '',
  age: 0
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
});

export const { setName, setSurname, setAge } = userSlice.actions;
export default userSlice.reducer;
