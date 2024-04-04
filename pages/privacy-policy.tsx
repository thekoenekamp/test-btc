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
				<title>Privacy Policy | Nerve Global GmbH</title>
				<meta property="og:title" content="Privacy Policy | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Privacy Policy | Nerve Global GmbH" />
				<meta property="og:description" content="Privacy Policy | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/privacy-policy" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Privacy Policy | Nerve Global GmbH" />
				<meta name="twitter:description" content="Privacy Policy | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<Title>
					<a>Privacy Policy</a>
				</Title>
				<Content>
					<p>
						<strong>Privacy Policy for Nerve Global GmbH</strong>
						<br />
						<br />
						<strong>1. Introduction</strong>
						<br />
						At Nerve Global GmbH, accessible from{' '}
						<a style={{ color: 'white', fontWeight: 'bold' }} href="https://www.nerveglobal.ch">
							www.nerveglobal.ch
						</a>
						, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is
						collected and recorded by Nerve Global GmbH and how we use it.
						<br />
						<br />
						<strong>2. Information We Collect</strong>
						<br />
						We do not collect any personal data from our visitors. If you contact us directly, we may receive additional information about you such as
						your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may
						choose to provide.
						<br />
						<br />
						<strong>3. How We Use Your Information</strong>
						<br />
						We use the information we collect in various ways, including to:
						<br />
						- Provide, operate, and maintain our website
						<br />
						- Improve, personalize, and expand our website
						<br />
						- Understand and analyze how you use our website
						<br />
						- Develop new products, services, features, and functionality
						<br />
						<br />
						<strong>4. Log Files</strong>
						<br />
						Nerve Global GmbH follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting
						companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses,
						browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
						<br />
						<br />
						<strong>5. Cookies and Web Beacons</strong>
						<br />
						Like any other website, Nerve Global GmbH uses ‘cookies’. These cookies are used to store information including visitors' preferences, and
						the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing
						our web page content based on visitors' browser type and/or other information.
						<br />
						<br />
						<strong>6. Third-Party Privacy Policies</strong>
						<br />
						Nerve Global GmbH's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective
						Privacy Policies of these third-party ad servers for more detailed information.
						<br />
						<br />
						<strong>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</strong>
						<br />
						Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal
						data disclose the categories and specific pieces of personal data that a business has collected about consumers.
						<br />
						<br />
						<strong>8. GDPR Data Protection Rights</strong>
						<br />
						We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
						<br />
						- The right to access – You have the right to request copies of your personal data.
						<br />
						- The right to rectification – You have the right to request that we correct any information you believe is inaccurate.
						<br />
						<br />
						<strong>9. Children's Information</strong>
						<br />
						Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe,
						participate in, and/or monitor and guide their online activity.
						<br />
						<br />
						<strong>10. Changes to This Privacy Policy</strong>
						<br />
						We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
						<br />
						<br />
						<strong>11. Contact Us</strong>
						<br />
						If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
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
