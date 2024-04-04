import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import AppStore from 'public/svg/tech/appstore.svg';
import Ethers from 'public/svg/tech/ethers.svg';
import GoogleMaps from 'public/svg/tech/googlemaps.svg';
import GooglePlay from 'public/svg/tech/googleplay.svg';
import IPFS from 'public/svg/tech/ipfs.svg';
import JavaScript from 'public/svg/tech/javascript.svg';
import NextJS from 'public/svg/tech/nextdotjs.svg';
import Redux from 'public/svg/tech/redux.svg';
import Remix from 'public/svg/tech/remix.svg';
import Solidity from 'public/svg/tech/solidity.svg';
import TheGraph from 'public/svg/tech/thegraph.svg';
import TypeScript from 'public/svg/tech/typescript.svg';
import UnrealEngine from 'public/svg/tech/unrealengine.svg';
import Vercel from 'public/svg/tech/vercel.svg';
import Web3React from 'public/svg/tech/web3-react.svg';
import { useEffect, useState } from 'react';

const Services = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-transform: none;
	margin: 0 auto 0 auto;
	width: 100%;
	max-width: 100%;
	height: 100%;
	min-height: 75vh;
	overflow: hidden;

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
		min-height: 0;
	}
`;

const TechBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-transform: none;
	background-color: transparent;
	width: 100%;
	height: 100%;
	margin: 0 auto 2rem auto;

	a {
		color: #c0c0c0;
		fill: #c0c0c0;
		transition: all 0.25s ease-in-out;
		flex-direction: row;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		text-transform: uppercase;
		margin: 0 auto 0 auto;

		:hover {
			color: #fff;
			fill: #fff;
			transform: scale(1.05);
		}
	}

	@keyframes scrollRightToLeft {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%); // Move by the entire width of the content
		}
	}

	@media (max-width: 1200px) {
		display: inline-flex;
		width: auto;
		white-space: nowrap;
		overflow: hidden;
		animation: scrollRightToLeft 10s linear infinite;

		&:first-of-type {
			animation: scrollRightToLeft 10s linear infinite;
		}

		&:last-of-type {
			animation: none;
		}

		a {
			margin: 0 3rem 0 0;
		}
	}

	@media (max-width: 400px) {
		display: inline-flex;
		width: auto;
		white-space: nowrap;
		overflow: hidden;
		animation: scrollRightToLeft 10s linear infinite;

		&:first-of-type {
			animation: scrollRightToLeft 10s linear infinite;
		}

		&:last-of-type {
			animation: none;
			flex-direction: column;
			margin: 0 auto 0 auto;

			a {
				margin: 0 0 2rem 0;
			}
		}

		a {
			margin: 0 3rem 0 0;
		}
	}
`;

export default function Page() {
	const theme = useTheme();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1200);
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Clean up event listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Services theme={theme}>
				<h1>Tech Stack</h1>
				<a>Simply the best</a>
				<div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
					<TechBox theme={theme}>
						<a target="_blank" rel="noreferrer" href={'https://nextjs.org'}>
							<NextJS style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							NextJS
						</a>
						<a target="_blank" rel="noreferrer" href={'https://vercel.com'}>
							<Vercel style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Vercel
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.typescriptlang.org'}>
							<TypeScript style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							TypeScript
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.javascript.com'}>
							<JavaScript style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							JavaScript
						</a>
						<a target="_blank" rel="noreferrer" href={'https://redux.js.org'}>
							<Redux style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Redux
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://nextjs.org'}>
									<NextJS style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									NextJS
								</a>
								<a target="_blank" rel="noreferrer" href={'https://vercel.com'}>
									<Vercel style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Vercel
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.typescriptlang.org'}>
									<TypeScript style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									TypeScript
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.javascript.com'}>
									<JavaScript style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									JavaScript
								</a>
								<a target="_blank" rel="noreferrer" href={'https://redux.js.org'}>
									<Redux style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Redux
								</a>
							</>
						)}
					</TechBox>
					<TechBox theme={theme}>
						<a target="_blank" rel="noreferrer" href={'https://www.unrealengine.com'}>
							<UnrealEngine style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Unreal Engine
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.google.com/maps/about/#!'}>
							<GoogleMaps style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Google Maps
						</a>
						<a target="_blank" rel="noreferrer" href={'https://pay.google.com/about'}>
							<GooglePlay style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Google Play
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.apple.com/app-store'}>
							<AppStore style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							App Store
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://www.unrealengine.com'}>
									<UnrealEngine style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Unreal Engine
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.google.com/maps/about/#!'}>
									<GoogleMaps style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Google Maps
								</a>
								<a target="_blank" rel="noreferrer" href={'https://pay.google.com/about'}>
									<GooglePlay style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Google Play
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.apple.com/app-store'}>
									<AppStore style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									App Store
								</a>
							</>
						)}
					</TechBox>
					<TechBox theme={theme}>
						<a target="_blank" rel="noreferrer" href={'https://ipfs.tech'}>
							<IPFS style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							IPFS
						</a>
						<a target="_blank" rel="noreferrer" href={'https://thegraph.com'}>
							<TheGraph style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							The Graph
						</a>
						<a target="_blank" rel="noreferrer" href={'https://remix-project.org'}>
							<Remix style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Remix
						</a>
						<a target="_blank" rel="noreferrer" href={'https://soliditylang.org'}>
							<Solidity style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Solidity
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://ipfs.tech'}>
									<IPFS style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									IPFS
								</a>
								<a target="_blank" rel="noreferrer" href={'https://thegraph.com'}>
									<TheGraph style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									The Graph
								</a>
								<a target="_blank" rel="noreferrer" href={'https://remix-project.org'}>
									<Remix style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Remix
								</a>
								<a target="_blank" rel="noreferrer" href={'https://soliditylang.org'}>
									<Solidity style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Solidity
								</a>
							</>
						)}
					</TechBox>
					{/* <TechBox theme={theme}>
						<a target="_blank" rel="noreferrer" href={'https://www.unrealengine.com'}>
							<UnrealEngine style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Unreal Engine
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.google.com/maps/about/#!'}>
							<GoogleMaps style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Google Maps
						</a>
						<a target="_blank" rel="noreferrer" href={'https://pay.google.com/about'}>
							<GooglePlay style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Google Play
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.apple.com/app-store'}>
							<AppStore style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							App Store
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://www.unrealengine.com'}>
									<UnrealEngine style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Unreal Engine
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.google.com/maps/about/#!'}>
									<GoogleMaps style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Google Maps
								</a>
								<a target="_blank" rel="noreferrer" href={'https://pay.google.com/about'}>
									<GooglePlay style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Google Play
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.apple.com/app-store'}>
									<AppStore style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									App Store
								</a>
							</>
						)}
					</TechBox> */}
					<TechBox theme={theme}>
						<a target="_blank" rel="noreferrer" href={'https://docs.ethers.org'}>
							<Ethers style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Ethers
						</a>
						<a target="_blank" rel="noreferrer" href={'https://github.com/Uniswap/web3-react'} style={{ textTransform: 'lowercase' }}>
							<Web3React style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							web3-react
						</a>
						{/* {isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://docs.ethers.org'}>
									<Ethers style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Ethers
								</a>
								<a target="_blank" rel="noreferrer" href={'https://github.com/Uniswap/web3-react'} style={{ textTransform: 'lowercase' }}>
									<Web3React style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									web3-react
								</a>
							</>
						)} */}
					</TechBox>
				</div>
			</Services>
		</>
	);
}
