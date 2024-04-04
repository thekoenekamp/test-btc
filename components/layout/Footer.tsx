import styled from '@emotion/styled';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import { Breadcrumbs, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Discord from 'public/svg/socials/discord.svg';
import Facebook from 'public/svg/socials/facebook.svg';
import Instagram from 'public/svg/socials/instagram.svg';
import LinkedIn from 'public/svg/socials/linkedin.svg';
import Pinterest from 'public/svg/socials/pinterest.svg';
import Twitter from 'public/svg/socials/twitter.svg';
import React from 'react';

const BoxStyled = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	min-height: 30rem;
	margin: 0 auto 0 auto;
	background-color: #000;
	border-top: 0.1px solid #fff;
	// font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;

	@media (max-width: 680px) {
		width: 100%;
		height: auto;
		margin: 0 auto 0 auto;
	}
`;

const StyledSocialRow = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start; // Change here
	text-align: center;
	width: 80%;
	height: 100%;
	margin: 5rem auto 5rem auto;

	h1 {
		color: #fff;
		font-size: 1rem;
	}

	@media (max-width: 680px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 5rem auto 2rem auto;
	}
`;

const StyledLinkBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	width: 80%;
	margin-bottom: 7.5rem;

	@media (max-width: 680px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;

		& > * + * {
			margin-top: 5rem;
		}
	}
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: left;
	text-align: left;
	width: 100%;

	& > * + * {
		margin-left: 2.5rem;
	}

	@media (max-width: 680px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		// margin: 0 auto 0 auto;

		& > * + * {
			margin-left: 0;
		}
	}
`;

const StyledLink = styled(Link)<{ theme: any }>`
	display: flex;
	text-decoration: none;
	color: #fff;
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

	@media (max-width: 680px) {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		// width: 100%;
		// margin: 0 auto 0 auto;
	}
`;

const StyledCompanyBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-end; // aligns children to the bottom
	align-items: center; // keeps content centered horizontally
	width: 100%;
	height: 100%;
	padding-bottom: 2rem;
	cursor: default;

	h1 {
		color: #fff;
		font-size: 0.6rem;
	}

	a {
		color: #fff;
		font-size: 0.6rem;
		text-decoration: none;
	}

	@media (max-width: 680px) {
	}
`;

const StyledFooterTextBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	width: 40%;
	cursor: default;

	h1 {
		color: #fff;
		font-size: 1.25rem;
		text-align: left;
		margin: 0;
		margin-bottom: 1rem;
	}

	a {
		color: #fff;
		font-size: 0.925rem;
		text-decoration: none;
		text-align: left;
	}

	p {
		color: #fff;
		font-size: 0.925rem;
		text-decoration: none;
		text-align: left;
		margin: 0;
		padding: 0;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		text-align: left;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 680px) {
		width: 80%;
		margin-bottom: 2rem;

		h1 {
			text-align: center;
		}

		a {
			font-size: 0.8rem;
			text-align: center;
		}

		p {
			font-size: 0.8rem;
			text-align: center;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin: 0;
			padding: 0;
		}
	}
`;

const StyledBreadcrumbs = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	text-align: left;
	width: 80%;
	margin: 1rem auto 1rem auto;

	@media (max-width: 680px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		margin: 1rem auto 1rem auto;
	}
`;

const StyledDivider = styled(Divider)<{ theme: any }>`
	width: 100%;
	border-bottom: 0.1px solid #fff;
`;

const StyledContactBox = styled(Box)<{ theme: any }>`
	display: flex;
	flex-direction: column;
	justify-content: right;
	align-items: right;
	text-align: right;
	cursor: default;

	p {
		display: flex;
		align-items: left;
		color: #fff;
		margin: 0;
	}

	& > * + * {
		margin-top: 0.5rem;
	}

	& > :nth-of-type(2) {
		margin-top: 2rem;
	}

	@media (max-width: 680px) {
		// width: 80%;
		margin: 0 auto 0 auto;

		& > * + * {
			margin-top: 0;
		}

		& > :nth-of-type(2) {
			margin-top: 0;
		}
	}
`;

export default function NestedGrid() {
	const theme = useTheme();
	const router = useRouter();

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<BoxStyled theme={theme}>
			<StyledBreadcrumbs theme={theme}>
				<Breadcrumbs aria-label="breadcrumb" style={{ color: '#FFF' }}>
					<StyledLink theme={theme} href="/">
						Homepage
					</StyledLink>
					<StyledLink theme={theme} href={router.pathname} style={{ textTransform: 'capitalize' }}>
						{router.pathname
							.split('/')[1]
							.split('-')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}
					</StyledLink>
				</Breadcrumbs>
			</StyledBreadcrumbs>
			<StyledDivider theme={theme} />
			<StyledSocialRow theme={theme}>
				<StyledFooterTextBox theme={theme}>
					<h1>NERVE GLOBAL</h1>
					<a>
						We're committed to excellence, driving change and fostering a new era of digital transformation that goes beyond the conventional, making
						what was once thought impossible, possible.
					</a>
					<br />
					<br />
					<p>Nerve Global GmbH</p>
					<p>Weinbergstrasse 26</p>
					<p>6300 Zug</p>
					<p>Switzerland</p>
					<br />
					<div>
						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								color: '#fff',
								textTransform: 'none',
								textDecoration: 'none',
							}}
						>
							<LocalPhoneIcon style={{ color: '#fff', fontSize: '1rem', marginRight: '1rem' }} />
							+41 79 833 28 97
						</a>

						<a
							style={{
								display: 'flex',
								alignItems: 'center',
								color: '#fff',
								textTransform: 'none',
								textDecoration: 'none',
								width: 'fit-content',
							}}
							href="mailto:business@nerveglobal.com"
						>
							<EmailIcon style={{ color: '#fff', fontSize: '1rem', marginRight: '1rem' }} />
							business@nerveglobal.com
						</a>
					</div>
				</StyledFooterTextBox>
				<StyledContactBox theme={theme}>
					<Grid container>
						<Grid xs={12} container justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
							<Grid container columnSpacing={5} sx={{ order: { xs: 1, sm: 2 } }}>
								{/* <Grid>
									<a target="_blank" rel="noreferrer" href={'https://twitter.com/KoenekampC'}>
										<Twitter style={{ fontSize: '16px', fill: '#FFF' }} />
									</a>
								</Grid> */}
								<Grid>
									<a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/company/nerveglobal'}>
										<LinkedIn style={{ fontSize: '16px', fill: '#FFF' }} />
									</a>
								</Grid>
								{/* <Grid>
									<a target="_blank" rel="noreferrer" href={'https://www.instagram.com/christophkoenekamp'}>
										<Instagram style={{ fontSize: '16px', fill: '#FFF' }} />
									</a>
								</Grid> */}
							</Grid>
						</Grid>
					</Grid>
				</StyledContactBox>
			</StyledSocialRow>
			<StyledLinkBox theme={theme}>
				<StyledDiv>
					<StyledLink theme={theme} href={`/contact`} passHref style={{ textDecoration: 'none', width: 'fit-content' }}>
						Contact
					</StyledLink>
					<StyledLink theme={theme} href={`/terms`} passHref style={{ textDecoration: 'none', width: 'fit-content' }}>
						Terms of use
					</StyledLink>
					<StyledLink theme={theme} href={`/privacy-policy`} passHref style={{ textDecoration: 'none', width: 'fit-content' }}>
						Privacy
					</StyledLink>
					<StyledLink theme={theme} href={`/imprint`} passHref style={{ textDecoration: 'none', width: 'fit-content' }}>
						Imprint
					</StyledLink>
					<StyledLink theme={theme} href={`/cookie-policy`} passHref style={{ textDecoration: 'none', width: 'fit-content' }}>
						Cookie Policy
					</StyledLink>
				</StyledDiv>
				<VerticalAlignTopOutlinedIcon onClick={handleScrollToTop} style={{ color: '#fff', cursor: 'pointer' }} />
			</StyledLinkBox>
			<StyledCompanyBox theme={theme}>
				<h1>Nerve Global GmbH</h1>
				<a>© 2021 Nerve Global GmbH All rights reserved.</a>
			</StyledCompanyBox>
		</BoxStyled>
	);
}
