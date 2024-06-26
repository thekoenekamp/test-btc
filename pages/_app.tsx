import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { getProviderById, getProviders, request } from 'sats-connect';
import RootLayout from '../components/layout/Layout';
import { store } from '../state/index';
import { themeSlice } from '../state/theme/themeSlice';

function Updaters() {
	const dispatch = useDispatch();

	useEffect(() => {
		// Load the theme, prefersSystemSetting, and testnets settings from localStorage when the app starts
		const savedTheme = localStorage.getItem('theme');
		const prefersSystemSetting = localStorage.getItem('prefersSystemSetting') === 'false'; // Convert string to boolean

		if (savedTheme) {
			dispatch(themeSlice.actions.setTheme(savedTheme));
		}

		// Dispatch the prefersSystemSetting from localStorage
		dispatch(themeSlice.actions.setUseSystemSetting(prefersSystemSetting));

		// Subscribe to store changes and persist them to localStorage
		const unsubscribe = store.subscribe(() => {
			const state = store.getState();
			localStorage.setItem('theme', state.theme.currentTheme);
			localStorage.setItem('prefersSystemSetting', state.theme.prefersSystemSetting.toString());
		});

		// Unsubscribe from the store when the component unmounts
		return () => unsubscribe();
	}, [dispatch]);

	return null;
}

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const providers = getProviders();
		console.log('providers', providers);

		const firstProvider = providers[0];
		console.log('firstProvider', firstProvider);

		const providerObject = getProviderById(firstProvider.id);
		console.log('providerObject', providerObject);

		const response = providerObject.request('getInfo', null);
		console.log('response', response);
	}, []);

	const handleGetInfo = async () => {
		try {
			const response = await request('getInfo', null);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	handleGetInfo();

	return (
		<Provider store={store}>
			<Updaters />
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</Provider>
	);
}
