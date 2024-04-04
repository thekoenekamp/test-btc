import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Baskervville, Luxurious_Script } from 'next/font/google';
import Head from 'next/head';

const font = Luxurious_Script({
	subsets: ['latin'],
	weight: '400',
});

const fontText = Baskervville({
	subsets: ['latin'],
	weight: ['400'],
});

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100vw;
	max-width: 800px;
	height: 100vh;
	background-color: transparent;

	@media (max-width: 600px) {
		width: 95%;
	}
`;

const Title = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: ${fontText.style.fontFamily};
	color: #fff;
	text-transform: none;
	font-size: 3rem;
	cursor: default;
	margin-bottom: 1rem;

	a {
		font-size: 3rem;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;

		transition: all 0.5s ease-in-out;

		&:hover {
			color: #fff;
			background: none;
			// text-decoration: underline;
		}

		position: relative;

		&:hover::after {
			width: 100%;
		}

		&::after {
			content: '';
			position: absolute;
			width: 0; // Start with no width
			height: 1px; // Height of the underline
			bottom: 10px; // Position right below the text
			left: 0;
			background-color: #fff; // Color of the underline
			transition: width 0.5s ease-in-out; // Animate the width
		}
	}

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}
`;

const Text = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-family: ${fontText.style.fontFamily};
	color: #fff;
	cursor: default;
	text-transform: none;
	font-size: 1rem;

	&:hover {
		background-color: transparent;
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export default function Page() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
				<title>404 Not Found | Nerve Global GmbH</title>
				<meta property="og:title" content="404 Not Found | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="404 Not Found | Nerve Global GmbH" />
				<meta property="og:description" content="404 Not Found | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/404" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="404 Not Found | Nerve Global GmbH" />
				<meta name="twitter:description" content="404 Not Found | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a href={'/'} aria-label="Return to home page">
						Back home
					</a>
				</Title>
				<Text>
					<a>Sorry, we couldn't find that page.</a>
				</Text>
			</StyledBox>
		</>
	);
}
