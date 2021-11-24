import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface ModeState {
    isDark: boolean;
}

const initialState: ModeState = {
  isDark: false,
};


export const mode = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setDark:(state) => {
        state.isDark = !state.isDark;
    }
  },
  
});

export const { setDark } = mode.actions;

export const getMode = (state: RootState) => state.mode.isDark;


export default mode.reducer;
