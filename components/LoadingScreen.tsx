import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { Baskervville } from 'next/font/google';
import React from 'react';

const fontText = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const LoadingSection = styled.section<{ theme: any; fadeOut: any }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: ${({ theme }) => theme.palette.background.default};
	background-image: ${({ theme }) => theme.components.MuiCssBaseline.styleOverrides.body.backgroundImage};
	font-family: ${fontText.style.fontFamily};
	font-size: 3rem;
	font-weight: 400;
	animation: pulse 2s infinite;
	z-index: 9999;
	cursor: default;
	// opacity: ${(props) => (props.fadeOut ? 0 : 1)};
	// transition: opacity 2.5s ease-in-out;

	a {
		display: none;
	}

	> * + * {
		margin-left: 2rem;
	}

	@keyframes pulse {
		0% {
			color: ${({ theme }) => theme.palette.secondary.main};
		}
		50% {
			color: ${({ theme }) => theme.palette.text.primary};
		}
		100% {
			color: ${({ theme }) => theme.palette.secondary.main};
		}
	}

	@media (min-width: 681px) {
		a:first-of-type {
			display: flex;
		}
	}

	@media (max-width: 680px) {
		flex-direction: column;

		a:not(:first-of-type) {
			display: flex;
		}

		> * + * {
			margin-left: 0;
		}
	}
`;

interface LoadingScreenProps {
	fadeOut: any;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ fadeOut }) => {
	const theme = useTheme();

	return (
		<>
			<LoadingSection theme={theme} fadeOut={fadeOut}>
				<a>NERVE GLOBAL</a>
				<a>NERVE</a>
				<a>GLOBAL</a>
			</LoadingSection>
		</>
	);
};

export default LoadingScreen;
