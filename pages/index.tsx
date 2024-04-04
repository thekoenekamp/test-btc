import styled from '@emotion/styled';
import { Box, Typography, useTheme } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutUs from '../components/AboutUs';
import EVMChains from '../components/EVMChains';
import LoadingScreen from '../components/LoadingScreen';
import Serices from '../components/Services';
import TechStack from '../components/TechStack';
import { loadingSlice } from '../state/loading/loadingSlice';

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	// max-width: 800px;
	height: 100%;
	// margin: 5% auto;
	background-color: transparent;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

const Title = styled(Typography)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: none;
	cursor: default;
	width: 80%;

	@keyframes gradient-slide {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	h1 {
		font-size: 5rem;
		font-weight: 300;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		// background-image: linear-gradient(90deg, #e8b3e0, #a45b99, #9c27b0, #673ab7, #03a9f4, #00bcd4, #4caf50, #8bc34a, #ff9500, #e8b3e0, #a45b99);
		// background-size: 1100% 100%;
		// background-clip: text;
		// -webkit-background-clip: text;
		// animation: gradient-slide 30s linear infinite;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
	}

	a {
		font-size: 2.5rem;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
	}

	@media (max-width: 600px) {
		width: 95%;

		h1 {
			font-size: 3.5rem;
			margin: 0 auto 5rem auto;
		}

		a {
			font-size: 1.5rem;
		}
	}
`;

const Services = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-transform: none;
	margin: 0 auto 0 auto;
	width: 100%;
	max-width: 100%;
	height: 100vh;

	h1 {
		font-size: 2.5rem;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
		margin: 0 auto 0 auto;
	}

	h4 {
		font-size: 2rem;
		color: transparent;
		text-decoration: none;
		text-transform: uppercase;
		background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
		margin: 0 auto 0 auto;
	}

	a {
		font-size: 1.5rem;
		color: #c0c0c0;
		opacity: 0.8;
		text-decoration: none;
		text-transform: uppercase;
		margin: 0 auto 5rem auto;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		margin: 5rem auto 5rem auto;
	}
`;

const ServiceBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: none;
	margin: 1rem 1rem 1rem 0;
	background-color: rgba(51, 51, 51, 0.5);
	transition: all 0.5s ease-in-out;
	height: 11rem;
	width: 100%;

	&:first-of-type {
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	&:last-of-type {
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	:hover {
		transform: scale(1.025);
	}

	h2 {
		font-size: 1.5rem;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
	}

	a {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		text-transform: uppercase;
	}

	@media (max-width: 1200px) {
		margin: 1rem 0 1rem 0;

		&:first-of-type {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		&:last-of-type {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}
`;

const StyledHeader = styled(Box)<{ theme: any }>`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(circle at center, #627eea -250%, #000000 50%);
	// background: radial-gradient(circle at center, #bf00ff -250%, #000000 50%);

	@media (max-width: 600px) {
		background: radial-gradient(circle at center, #627eea -250%, #000000 50%);
	}
`;

export default function Page() {
	const theme = useTheme();

	// Redux
	const dispatch = useDispatch();
	const loadingValue = useSelector((state: { loading: boolean }) => state.loading);

	// State
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		// Check if this is the first load
		if (loadingValue) {
			const timer = setTimeout(() => {
				setFadeOut(true);
				dispatch(loadingSlice.actions.updateLoading(false));
			}, 2500);

			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Nerve Global GmbH</title>
				<meta property="og:title" content="Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Nerve Global GmbH" />
				<meta property="og:description" content="Business website of Nerve Global GmbH." />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Nerve Global GmbH" />
				<meta name="twitter:description" content="Business website of Nerve Global GmbH." />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			{loadingValue ? (
				<LoadingScreen fadeOut={fadeOut} />
			) : (
				<StyledBox>
					<StyledHeader theme={theme}>
						{/* <VideoBackground autoPlay loop muted playsInline preload="auto" poster="/img/alpsStartFrame.jpg">
							<source src="/video/alpsCompressed.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</VideoBackground> */}

						<Title>
							<h1>True to Web3</h1>
							<a>We exclusively work on unique ideas in the emerging sector of blockchain technology.</a>
						</Title>
					</StyledHeader>
					<TechStack />
					<Serices />
					{/* <TechStack /> */}
					<EVMChains />
					{/* <AboutUs /> */}
					{/* <StyledCTABox theme={theme}>
						<h1>Experience commitment to excellence</h1>
						<StyledDivider theme={theme} />
						<Link href={`/contact`} passHref style={{ textDecoration: 'none' }}>
							<StyledButton theme={theme}>Contact us</StyledButton>
						</Link>
					</StyledCTABox> */}
				</StyledBox>
			)}
		</>
	);
}
