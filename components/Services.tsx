import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';

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
	max-height: 100%;

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
		height: 100%;
		margin: 5rem auto 5rem auto;
	}
`;

const StyledDiv = styled.div<{ theme: any }>`
	display: flex;
	flex-direction: row;
	width: 80%;
	background: radial-gradient(circle at center, #627eea -250%, #000000 50%);

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

const ServiceBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-transform: none;
	margin: 1rem 1rem 1rem 0;
	background-color: rgba(51, 51, 51, 0.2);
	transition: all 0.5s ease-in-out;
	height: 100%;
	width: 100%;

	&:first-of-type {
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	&:last-of-type {
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	// :hover {
	// 	transform: scale(1.025);
	// }

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
		margin: 0 auto 0 auto;
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

export default function Page() {
	const theme = useTheme();

	return (
		<>
			<Services theme={theme}>
				<h1>Services</h1>
				<a>Tailored for you</a>
				<StyledDiv theme={theme}>
					<ServiceBox theme={theme}>
						<h2>Blockchain Consulting</h2>
						<a>Tokenomics</a>
						<a>Smart Contracts Audit + Security</a>
						<a>Token Launch</a>
						<a>Growth Airdrops</a>
						<a>investigations</a>
						<a>PREVENTION & Security</a>
						<a>FORENSIC</a>
						<a>MERKLE TREE</a>
					</ServiceBox>
					<ServiceBox theme={theme}>
						<h2>Smart Contracts</h2>
						<a>DeFi</a>
						{/* <a>custom wallet (Jan github?) Developing digital wallets for digital assets and everything crypto.</a> */}
						<a>Merkle Trees Development</a>
						<a>Farms</a>
						<a>Pools</a>
						<a>Raffle</a>
						<a>Lottery</a>
						<a>Staking</a>
						<a>Chainlink VRF</a>
						<a>Chainlink Oracle</a>
						<a>Chainlink Automation</a>
						<a>NFT Wrapper</a>
						{/* <a>Custom Wallet Solution (Jan?!)</a> */}
					</ServiceBox>
					<ServiceBox theme={theme}>
						<h2>Fullstack Development</h2>
						<a>DEX</a>
						<a>DeFi</a>
						<a>DAO</a>
						<a>Farms</a>
						<a>Pools</a>
						<a>Raffle</a>
						<a>Lottery</a>
						<a>Staking</a>
					</ServiceBox>
				</StyledDiv>
			</Services>
		</>
	);
}
