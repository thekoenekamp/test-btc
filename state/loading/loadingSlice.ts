import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
	name: 'loading',
	initialState: true,
	reducers: {
		updateLoading: (state, action) => {
			return action.payload;
		},
	},
});
