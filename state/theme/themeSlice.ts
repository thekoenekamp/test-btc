import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		currentTheme: 'light', // This should be a default value if nothing is found in localStorage
		prefersSystemSetting: false,
	},
	reducers: {
		setTheme: (state, action) => {
			state.currentTheme = action.payload;
		},
		setUseSystemSetting: (state, action) => {
			state.prefersSystemSetting = action.payload;
		},
	},
});

export const { setTheme, setUseSystemSetting } = themeSlice.actions;

export default themeSlice.reducer;
