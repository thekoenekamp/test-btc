import styled from '@emotion/styled';
import { Box, Typography, useTheme } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	// min-height: 100vh;
	margin: 10rem auto;
	background-color: transparent;

	@media (max-width: 600px) {
		width: 95%;
		flex-direction: column;
		justify-content: center;
		min-height: 100%;

		// & > div:nth-of-type(1) {
		// 	order: 2;
		// }
	}
`;

const Title = styled(Typography)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-transform: none;
	font-size: 4rem;
	cursor: default;
	margin-bottom: 2.5rem;

	a {
		font-size: 3rem;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
	}

	@media (max-width: 600px) {
		font-size: 3rem;
	}
`;

const Content = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	text-align: left;
	align-items: center;
	color: #fff;
	text-transform: none;
	font-size: 1rem;
	cursor: default;
	margin-bottom: 2.5rem;
	width: 75%;

	p {
		text-align: left;
	}

	a {
		text-decoration: none;
		position: relative;

		&:hover::after {
			width: 100%;
		}

		&::after {
			content: '';
			position: absolute;
			width: 0; // Start with no width
			height: 1px; // Height of the underline
			bottom: -1px; // Position right below the text
			left: 0;
			background-color: #fff; // Color of the underline
			transition: width 0.5s ease-in-out; // Animate the width
		}
	}

	@media (max-width: 600px) {
		font-size: 1rem;
		width: 90%;
	}
`;

export default function Page() {
	const theme = useTheme();

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
				<title>Imprint | Nerve Global GmbH</title>
				<meta property="og:title" content="Imprint | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Imprint | Nerve Global GmbH" />
				<meta property="og:description" content="Imprint | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/imprint" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Imprint | Nerve Global GmbH" />
				<meta name="twitter:description" content="Imprint | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a>Imprint</a>
				</Title>
				<Content>
					<p>
						<strong>Imprint for Nerve Global GmbH</strong>
						<br />
						<br />
						<strong>Operator of the Website:</strong>
						<br />
						Nerve Global GmbH
						<br />
						<br />
						<strong>Address:</strong>
						<br />
						Weinbergstrasse 26 <br />
						6300 Zug <br />
						Switzerland
						<br />
						<br />
						<strong>Contact Information:</strong>
						<br />
						Phone: +41 79 833 28 97
						<br />
						Email:{' '}
						<a href="mailto:business@nerveglobal.com" style={{ color: '#FFF', width: 'fit-content' }}>
							business@nerveglobal.com
						</a>
						<br />
						<br />
						<strong>Responsible for Content:</strong>
						<br />
						Nerve Global GmbH
						<br />
						<br />
						<strong>Company Registration Number:</strong>
						<br />
						CHE-342.256.765
						<br />
						<br />
						<strong>VAT Number:</strong>
						<br />
						CHE-342.256.765 MWST
						<br />
						<br />
						This Imprint also applies to our online presence on social media platforms including, but not limited to, Facebook, X, LinkedIn, Reddit,
						Snapchat, Twitch and Instagram.
						<br />
					</p>
				</Content>
			</StyledBox>
		</>
	);
}
