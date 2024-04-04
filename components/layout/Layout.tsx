import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import { Baskervville } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { darkTheme, lightTheme } from './styles';

const fontText = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const StyledSection = styled.section<{ dynamicHeight: number | string }>`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: top;
	align-content: center;
	margin: 0 auto 0 auto;
	min-height: ${(props) => props.dynamicHeight}px;
	font-family: ${fontText.style.fontFamily};
	// max-height: 100vh;
	min-width: 100vw;
	max-width: 100vw;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [dynamicHeight, setDynamicHeight] = useState(0); // Initialize to 0 or a default height

	useEffect(() => {
		// Update the height once the component mounts
		setDynamicHeight(window.innerHeight);

		const adjustHeight = () => {
			setDynamicHeight(window.innerHeight);
		};

		window.addEventListener('resize', adjustHeight);

		// Cleanup
		return () => {
			window.removeEventListener('resize', adjustHeight);
		};
	}, []);

	return (
		<>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Header />
				<StyledSection dynamicHeight={dynamicHeight || '100vh'}>{children}</StyledSection>
				<Footer />
			</ThemeProvider>
		</>
	);
}
