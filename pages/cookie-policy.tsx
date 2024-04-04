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
	min-height: 100vh;
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
		a {
			width: 90%;
			font-size: 3rem;
			text-align: center;
		}
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
				<title>Cookie Policy | Nerve Global GmbH</title>
				<meta property="og:title" content="Cookie Policy | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Cookie Policy | Nerve Global GmbH" />
				<meta property="og:description" content="Cookie Policy | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/cookie-policy" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Cookie Policy | Nerve Global GmbH" />
				<meta name="twitter:description" content="Cookie Policy | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a>Cookie Policy</a>
				</Title>
				<Content>
					<p>
						<strong>Cookie Policy for Nerve Global GmbH</strong>
						<br />
						<br />
						<strong>1. What Are Cookies</strong>
						<br />
						As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your
						computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store
						these cookies.
						<br />
						<br />
						<strong>2. How We Use Cookies</strong>
						<br />
						We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling
						cookies without completely disabling the functionality and features they add to this site.
						<br />
						<br />
						<strong>3. Disabling Cookies</strong>
						<br />
						You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the
						functionality of this and many other websites that you visit.
						<br />
						<br />
						<strong>4. The Cookies We Set</strong>
						<br />
						- Account related cookies: If we provide account services, these cookies will be used to manage the signup process and general
						administration.
						<br />
						- Login related cookies: We use cookies when you are logged in so that we can remember this fact.
						<br />
						- Site preferences cookies: In order to provide you with a great experience on this site, we provide the functionality to set your
						preferences for how this site runs when you use it.
						<br />
						<br />
						<strong>5. Third-Party Cookies</strong>
						<br />
						In some special cases, we also use cookies provided by trusted third parties. This site uses Google Analytics which is one of the most
						widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your
						experience.
						<br />
						<br />
						<strong>6. More Information</strong>
						<br />
						Hopefully, that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need
						or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
						<br />
						<br />
						For more information on cookies, please contact us at{' '}
						<a style={{ color: 'white', fontWeight: 'bold' }} href="mailto:business@nerveglobal.com">
							business@nerveglobal.com
						</a>
						.
						<br />
					</p>
				</Content>
			</StyledBox>
		</>
	);
}
