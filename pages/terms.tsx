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
				<title>Terms and Conditions | Nerve Global GmbH</title>
				<meta property="og:title" content="Terms and Conditions | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Terms and Conditions | Nerve Global GmbH" />
				<meta property="og:description" content="Terms and Conditions | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/terms" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Terms and Conditions | Nerve Global GmbH" />
				<meta name="twitter:description" content="Terms and Conditions | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a>Terms</a>
				</Title>
				<Content>
					<p>
						<strong>Terms and Conditions for Nerve Global GmbH</strong>
						<br />
						<br />
						<strong>1. Introduction</strong>
						<br />
						These Terms and Conditions govern your use of our website located at{' '}
						<a style={{ color: 'white', fontWeight: 'bold' }} href="https://www.nerveglobal.ch">
							www.nerveglobal.ch
						</a>{' '}
						and form a legal agreement between you, the user, and Nerve Global GmbH, the owner of the website.
						<br />
						<br />
						<strong>2. Intellectual Property</strong>
						<br />
						The content, design, and information on this website are the exclusive property of Nerve Global GmbH and are protected under intellectual
						property laws. You may not reproduce, distribute, or use any content without written permission from Nerve Global GmbH.
						<br />
						<br />
						<strong>3. Acceptable Use</strong>
						<br />
						You agree not to use our website in a way that:
						<br />
						- Causes, or may cause, damage to the website or impairs the availability or accessibility of the website.
						<br />
						- Is in any way unlawful, fraudulent, or harmful, or in connection with any unlawful, fraudulent, or harmful purpose or activity.
						<br />
						<br />
						<strong>4. Privacy and Personal Information</strong>
						<br />
						Your use of our website is also governed by our{' '}
						<Link style={{ color: 'white', fontWeight: 'bold' }} href={`/privacy-policy`} passHref>
							Privacy Policy
						</Link>
						, which is incorporated into these Terms and Conditions by reference.
						<br />
						<br />
						<strong>5. No Warranties</strong>
						<br />
						This website is provided “as is,” with all faults, and Nerve Global GmbH makes no express or implied representations or warranties, of any
						kind related to this website or the materials contained on this website.
						<br />
						<br />
						<strong>6. Limitation of Liability</strong>
						<br />
						In no event shall Nerve Global GmbH, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in
						any way connected with your use of this website, whether such liability is under contract, tort, or otherwise.
						<br />
						<br />
						<strong>7. Indemnification</strong>
						<br />
						You hereby indemnify to the fullest extent Nerve Global GmbH from and against any and/or all liabilities, costs, demands, causes of
						action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms and Conditions.
						<br />
						<br />
						<strong>8. Severability</strong>
						<br />
						If any provision of these Terms and Conditions is found to be unenforceable or invalid under any applicable law, such unenforceability or
						invalidity shall not render these Terms and Conditions unenforceable or invalid as a whole, and such provisions shall be deleted without
						affecting the remaining provisions herein.
						<br />
						<br />
						<strong>9. Variation of Terms</strong>
						<br />
						Nerve Global GmbH is permitted to revise these Terms and Conditions at any time as it sees fit, and by using this website, you are
						expected to review such Terms and Conditions on a regular basis to ensure you understand all terms governing the use of this website.
						<br />
						<br />
						<strong>10. Governing Law & Jurisdiction</strong>
						<br />
						These Terms and Conditions will be governed by and construed in accordance with the laws of Switzerland, and you submit to the
						non-exclusive jurisdiction of the state and federal courts located in Switzerland for the resolution of any disputes.
						<br />
						<br />
						<strong>11. Contact Us</strong>
						<br />
						If you have any questions about these Terms and Conditions, please contact us at{' '}
						<a style={{ color: 'white', fontWeight: 'bold' }} href="mailto:business@nerveglobal.com">
							business@nerveglobal.com
						</a>
						.
					</p>
				</Content>
			</StyledBox>
		</>
	);
}
