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

const StyledDiv = styled.div<{ theme: any }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 auto 0 auto;
	gap: 5rem;
	width: 80%;
	height: 100%;
	filter: grayscale(100%);

	@media (max-width: 1200px) {
		flex-direction: column;
		width: 100%;
		gap: 0;
	}
`;

const Information = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-transform: none;
	// margin: 0 auto 0 auto;

	img {
		margin: 0 auto 2rem auto;
		width: auto;
		height: 300px;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		margin: 0 auto 0 auto;

		img {
			margin: 0 auto 2rem auto;
			width: auto;
			height: 200px;
		}
	}
`;

export default function Page() {
	const theme = useTheme();

	return (
		<>
			<Services theme={theme}>
				<h1>Who we are</h1>
				<a>true & radically authentic</a>
				<StyledDiv theme={theme}>
					{/* <Information>
						<img src="/img/people/koenekamp.jpeg" alt="who we are" />
						Christoph Könekamp
					</Information>
					<Information>
						<img src="/img/people/georg.jpeg" alt="who we are" />
						Philipp Eike Georg
					</Information> */}
				</StyledDiv>
			</Services>
		</>
	);
}
