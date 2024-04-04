import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { loadingSlice } from './loading/loadingSlice';
import { themeSlice } from './theme/themeSlice';

export const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
		loading: loadingSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
