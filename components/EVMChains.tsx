import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import ArbitrumChain from 'public/svg/evm/arbitrum.svg';
import AuroraChain from 'public/svg/evm/aurora.svg';
import AvalancheChain from 'public/svg/evm/avalanche.svg';
import BNBChain from 'public/svg/evm/bnbchain.svg';
import EthereumChain from 'public/svg/evm/ethereum.svg';
import FantomChain from 'public/svg/evm/fantom.svg';
import LineaChain from 'public/svg/evm/linea.svg';
import MantleChain from 'public/svg/evm/mantle.svg';
import OptimismChain from 'public/svg/evm/optimism.svg';
import PolygonChain from 'public/svg/evm/polygon.svg';
import { useEffect, useState } from 'react';

const EVMBox = styled(Box)<{ theme: any; color: any }>`
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
	background: ${({ color }) => `radial-gradient(circle at center, ${color} -250%, #000000 50%)`};
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
		margin: 5rem auto 0 auto;
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
		min-height: 50vh;
	}
`;

const EVMChains = styled(Box)<{ theme: any; color: any }>`
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
		whith: 100%;

		:hover {
			color: #fff;
			fill: ${({ color }) => color};
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
			display: flex;
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

	// EVM Box Color
	const [bgColor, setBgColor] = useState('#627EEA');

	const chainColors = {
		Ethereum: '#627EEA',
		BNB: '#e2b82e',
		Polygon: '#7d36ce',
		Arbitrum: '#5f9eec',
		Optimism: '#da0626',
		Aurora: '#94d157',
		Mantle: '#fff',
		Linea: '#fff',
		Fantom: '#4069fb',
		Avalanche: '#c94343',
	};

	const handleHover = (chain) => {
		setBgColor(chainColors[chain]);
	};

	return (
		<>
			<EVMBox theme={theme} color={bgColor}>
				{/* <h4>Universal Compatibility Across 1,000+ EVM Chains</h4>
				<a>Experience unparalleled flexibility</a> */}
				{/* <h4>Universal Compatibility</h4> */}
				<h1>Versatile</h1>
				<a>unparalleled flexibility across 100+ EVM Chains</a>
				<div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
					<EVMChains theme={theme} color={bgColor}>
						<a target="_blank" rel="noreferrer" href={'https://ethereum.org'} onMouseEnter={() => handleHover('Ethereum')}>
							<EthereumChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Ethereum
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.bnbchain.org'} onMouseEnter={() => handleHover('BNB')}>
							<BNBChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							BSC
						</a>
						<a target="_blank" rel="noreferrer" href={'https://arbitrum.io'} onMouseEnter={() => handleHover('Arbitrum')}>
							<ArbitrumChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Arbitrum
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.avax.network'} onMouseEnter={() => handleHover('Avalanche')}>
							<AvalancheChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Avalanche
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.optimism.io'} onMouseEnter={() => handleHover('Optimism')}>
							<OptimismChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Optimism
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://ethereum.org'} onMouseEnter={() => handleHover('Ethereum')}>
									<EthereumChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Ethereum
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.bnbchain.org'} onMouseEnter={() => handleHover('BNB')}>
									<BNBChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									BSC
								</a>
								<a target="_blank" rel="noreferrer" href={'https://arbitrum.io'} onMouseEnter={() => handleHover('Arbitrum')}>
									<ArbitrumChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Arbitrum
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.avax.network'} onMouseEnter={() => handleHover('Avalanche')}>
									<AvalancheChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Avalanche
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.optimism.io'} onMouseEnter={() => handleHover('Optimism')}>
									<OptimismChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Optimism
								</a>
							</>
						)}
					</EVMChains>
					<EVMChains theme={theme} color={bgColor}>
						<a target="_blank" rel="noreferrer" href={'https://polygon.technology'} onMouseEnter={() => handleHover('Polygon')}>
							<PolygonChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Polygon
						</a>
						<a target="_blank" rel="noreferrer" href={'https://www.mantle.xyz'} onMouseEnter={() => handleHover('Mantle')}>
							<MantleChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Mantle
						</a>
						<a target="_blank" rel="noreferrer" href={'https://fantom.foundation'} onMouseEnter={() => handleHover('Fantom')}>
							<FantomChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Fantom
						</a>
						<a target="_blank" rel="noreferrer" href={'https://linea.build'} onMouseEnter={() => handleHover('Linea')}>
							<LineaChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Linea
						</a>
						{isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://polygon.technology'} onMouseEnter={() => handleHover('Polygon')}>
									<PolygonChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Polygon
								</a>
								<a target="_blank" rel="noreferrer" href={'https://www.mantle.xyz'} onMouseEnter={() => handleHover('Mantle')}>
									<MantleChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Mantle
								</a>
								<a target="_blank" rel="noreferrer" href={'https://fantom.foundation'} onMouseEnter={() => handleHover('Fantom')}>
									<FantomChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Fantom
								</a>
								<a target="_blank" rel="noreferrer" href={'https://linea.build'} onMouseEnter={() => handleHover('Linea')}>
									<LineaChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Linea
								</a>
							</>
						)}
					</EVMChains>
					<EVMChains theme={theme} color={bgColor}>
						<a target="_blank" rel="noreferrer" href={'https://aurora.dev'} onMouseEnter={() => handleHover('Aurora')}>
							<AuroraChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
							Aurora
						</a>
						{/* {isMobile && (
							<>
								<a target="_blank" rel="noreferrer" href={'https://aurora.dev'} onMouseEnter={() => handleHover('Aurora')}>
									<AuroraChain style={{ display: 'flex', fontSize: '25px', marginRight: '1rem' }} />
									Aurora
								</a>
							</>
						)} */}
					</EVMChains>
				</div>
			</EVMBox>
		</>
	);
}
