import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import GoogleMap from '../components/GoogleMapOffice';

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	width: 90%;
	min-height: 100vh auto;
	margin: 10rem auto;
	height: 100%;

	@media (max-width: 1200px) {
		width: 80%;
		flex-direction: column;
		justify-content: center;
		min-height: 100%;
		margin: 0 auto;

		// & > div:nth-of-type(1) {
		// 	order: 2;
		// }
	}
`;

const StyledMapBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: left;
	text-align: left;
	width: 50%;

	@media (max-width: 1200px) {
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		margin: 7.5rem auto 0 auto;
		min-height: auto;
	}
`;

const StyledContentBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	text-align: left;
	width: 50%;
	height: 100%;
	max-height: 45rem;
	overflow-y: scroll;
	cursor: default;

	& > div:nth-of-type(2) {
		margin-top: 5rem;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		height: 100%;
		max-height: 100%;
		width: 100%;
		text-align: center;
		margin: 2.5rem auto 5rem auto;

		& > div:nth-of-type(2) {
			margin-top: 0;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
		height: 100%;
		max-height: 100%;
		margin: 0 auto 5rem auto;

		& > div:nth-of-type(2) {
			margin-top: 5rem;
		}
	}
`;

const StyledMailBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	// width: 90%;
	max-width: 40%;
	height: 75vh;
	margin: 0 auto 5rem auto;
	padding: 0;
	background-color: transparent;

	@media (max-width: 1200px) {
		max-width: 80%;
		margin: 0 auto 5rem auto;
	}

	@media (max-width: 600px) {
		max-width: 80%;
		margin: 0 auto 5rem auto;
	}
`;

const StyledAddressBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	text-align: left;
	width: 100%;
	height: 100%;
	background-color: transparent;

	h1 {
		font-size: 2rem;
		font-weight: bold;
	}

	p {
		font-size: 1rem;
		margin: 0;
		padding: 0;
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
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
	}
`;

const StyledButton = styled(Button)<{ theme: any }>`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 0;
	padding: 0.5rem 1rem;
	background-color: #ff9500;
	transition: all 0.5s ease-in-out;
	color: #000;
	font-weight: bold;

	&:hover {
		color: #000;
		background-color: #fff;
	}
`;

const Title = styled(Typography)`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	cursor: default;
	font-size: 3rem;
	color: transparent;
	text-decoration: none;
	text-transform: uppercase;
	background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;
	margin-bottom: 2.5rem;

	@media (max-width: 600px) {
		font-size: 3rem;
		align-items: center;
		text-align: center;
	}
`;

const Title2 = styled(Typography)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: default;
	font-size: 2.5rem;
	color: transparent;
	text-decoration: none;
	text-transform: uppercase;
	background: linear-gradient(350.21deg, rgb(255, 255, 255) -13.99%, rgba(255, 255, 255, 0) 136.74%) text;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;

export default function Page() {
	const theme = useTheme();

	// State
	const [title, setTitle] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mailSent, setMailSent] = useState(false);

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();

		// Collect form data
		const formData = new FormData(event.target);
		const formTitle = formData.get('title'); // Use different variable names
		const formFirstName = formData.get('firstName');
		const formLastName = formData.get('lastName');
		const formCompany = formData.get('company');
		const formPosition = formData.get('position');
		const formSubject = formData.get('subject');
		const formMessage = formData.get('message');

		// Construct mailto link
		const body = encodeURIComponent(
			`Name: ${formTitle || ''} ${formFirstName} ${formLastName}\n\nCompany: ${formPosition} - ${formCompany}\n\n\n\n ${formMessage}`
		);
		const mailtoLink = `mailto:tim.lauterbach@timmy.group?subject=${encodeURIComponent(formSubject)}&body=${body}`;

		// Open mail client
		window.location.href = mailtoLink;

		// Update state for thank you message
		setTitle(formTitle);
		setFirstName(formFirstName);
		setLastName(formLastName);
		setMailSent(true);
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
				<title>Contact | Nerve Global GmbH</title>
				<meta property="og:title" content="Contact | Nerve Global GmbH" key="title" />
				<meta property="og:site_name" content="Contact | Nerve Global GmbH" />
				<meta property="og:description" content="Contact | Nerve Global GmbH" />
				<meta property="og:image" content="https://nerveglobal.ch/favicon.ico" />
				<meta property="og:url" content="https://nerveglobal.ch/contact" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@nerveglobal_" />
				<meta name="twitter:title" content="Contact | Nerve Global GmbH" />
				<meta name="twitter:description" content="Contact | Nerve Global GmbH" />
				<meta name="twitter:image" content="https://nerveglobal.ch/favicon.ico" />
			</Head>
			<StyledBox>
				<StyledMapBox theme={theme}>
					<GoogleMap apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} />
				</StyledMapBox>
				<StyledContentBox theme={theme}>
					<Title>HEAD OFFICE</Title>
					<StyledAddressBox>
						<p style={{ fontWeight: 'bold' }}>Nerve Global GmbH</p>
						<p>Weinbergstrasse 26</p>
						<p>6300 Zug</p>
						<p>Switzerland</p>
						<br />
						<p>Phone: +41 79 833 28 97</p>
						<div>
							Email:{' '}
							<a href="mailto:business@nerveglobal.com" style={{ color: '#FFF', width: 'fit-content' }}>
								business@nerveglobal.com
							</a>
						</div>
						<br />
						<p style={{ fontWeight: 'bold' }}>Authorized Representatives</p>
						<p>Lauterbach, Tim</p>
						<p>Georg, Philipp Eike</p>
						<br />
						<p style={{ fontWeight: 'bold' }}>Commercial Register</p>
						<p>Commercial register of the Canton of Zug</p>
						<p>Commercial register No: CHE-342.256.765</p>
						<br />
						<p>Company Registration Number or UID: CHE-342.256.765</p>
						<p>VAT Number: CHE-342.256.765 MWST</p>
					</StyledAddressBox>
				</StyledContentBox>
			</StyledBox>
			{/* {mailSent ? (
				<StyledMailBox>
					<Typography variant="h6">
						Dear {title} {firstName} {lastName},
					</Typography>
					<Typography variant="body1">
						<p>We acknowledge receipt of your correspondence. Your message is important to us, and we will address it with the utmost attention.</p>
						<p>Please expect a response at the earliest convenience.</p>
						<br />
						<br />
						<p>Sincerely,</p>
						<p>Nerve Global GmbH</p>
					</Typography>
				</StyledMailBox>
			) : (
				<StyledMailBox>
					<Title2>Contact Us</Title2>
					<form onSubmit={handleSubmit}>
						<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
							<TextField
								name="title"
								margin="normal"
								variant="outlined"
								InputProps={{ style: { borderRadius: 0 } }}
								// required
								placeholder="Title"
								style={{ flex: 1, border: '1px solid #FFF' }}
							/>
							<TextField
								name="firstName"
								margin="normal"
								variant="outlined"
								InputProps={{ style: { borderRadius: 0 } }}
								required
								placeholder="First Name"
								style={{ flex: 2, border: '1px solid #FFF' }}
							/>
							<TextField
								name="lastName"
								margin="normal"
								variant="outlined"
								InputProps={{ style: { borderRadius: 0 } }}
								required
								placeholder="Last Name"
								style={{ flex: 2, border: '1px solid #FFF' }}
							/>
						</div>
						<TextField
							name="position"
							fullWidth
							margin="normal"
							variant="outlined"
							InputProps={{ style: { borderRadius: 0 } }}
							// required
							placeholder="Position"
							style={{ flex: 1, border: '1px solid #FFF' }}
						/>
						<TextField
							name="company"
							fullWidth
							margin="normal"
							variant="outlined"
							InputProps={{ style: { borderRadius: 0 } }}
							// required
							placeholder="Company"
							style={{ flex: 1, border: '1px solid #FFF' }}
						/>
						<TextField
							name="subject"
							fullWidth
							margin="normal"
							variant="outlined"
							InputProps={{ style: { borderRadius: 0 } }}
							required
							placeholder="Subject"
							style={{ flex: 1, border: '1px solid #FFF' }}
						/>
						<TextField
							name="message"
							fullWidth
							margin="normal"
							multiline
							rows={4}
							variant="outlined"
							InputProps={{ style: { borderRadius: 0 } }}
							required
							placeholder="Message"
							style={{ flex: 1, border: '1px solid #FFF' }}
						/>
						<StyledButton theme={theme} type="submit" variant="contained">
							Send
						</StyledButton>
					</form>
				</StyledMailBox> 
			)} */}
		</>
	);
}
