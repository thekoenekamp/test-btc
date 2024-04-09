import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Button } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

// Define the keyframes for the slide-down animation
const slideDown = keyframes`
  from {
    transform: translateY(0); // Start from the top
  }
  to {
    transform: translateY(100%); // End below the screen
  }
`;

// Define the keyframes for the slide-up animation
const slideUp = keyframes`
  from {
    transform: translateY(100%); // Start from below the screen
  }
  to {
    transform: translateY(0); // End at the top
  }
`;

const StyledAppBar = styled(AppBar)<{ theme: any }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: auto;
	width: 100%;
	padding: 0;

	position: fixed;
	background-color: 'transparent';
	box-shadow: none;
	top: 0;
	left: 50%;
	transform: translateX(-50%); // This centers the AppBar in the viewport

	div {
		display: flex;
		width: 80%;
		margin: 1rem auto 1rem auto;
	}

	@media (max-width: 680px) {
		flex-direction: row;
		height: auto;
		padding: 1.5rem;
		width: 100%;

		div {
			width: 90%;
			margin: 0 auto 0 auto;
		}
	}
`;

const StyledSectionLeft = styled.section<{ theme: any }>`
	flex: 1;
	min-width: 50%;
	max-width: 50%;
	display: flex;
	justify-content: flex-start;

	@media (max-width: 1000px) {
		flex: 1;
		min-width: 50%;
		max-width: 50%;
		display: flex;
		justify-content: flex-start;
		align-items: left;
		text-align: left;

		margin: 0;
	}
`;

const StyledSectionMiddle = styled.section`
	display: flex;
	flex: 1;
	min-width: 1/3;
	max-width: 1/3;
	justify-content: center;
	align-items: center;
	visibility: hidden;
`;

const StyledSectionRight = styled.section`
	flex: 1;
	min-width: 50%;
	max-width: 50%;
	display: flex;
	justify-content: flex-end;
	// align-items: center;

	// & > *:not(:last-child) {
	// 	margin-left: 1rem;
	// }

	@media (max-width: 1000px) {
		display: none;
		visibility: hidden;
	}
`;

const StyledSectionRightMobile = styled.section`
	display: none;
	visibility: hidden;

	@media (max-width: 1000px) {
		display: flex;
		visibility: visible;
		flex: 1;
		min-width: 50%;
		max-width: 50%;
		justify-content: flex-end;
		align-items: center;
	}
`;

const StyledLinkTitle = styled(Link)<{ theme: any }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-decoration: none;
	width: 100%;

	h1 {
		display: flex;
		color: ${(props) => props.theme.palette.text.primary};
		font-size: 1.25rem;
		cursor: pointer;
		height: auto;
		margin: 0 0 0 0;
	}

	@media (max-width: 1000px) {
		h1 {
			display: flex;
			color: ${(props) => props.theme.palette.text.primary};
			font-size: 1rem;
			cursor: pointer;
			height: auto;
		}
	}
`;

const StyledLink = styled(Link)<{ theme: any }>`
	display: inline-flex;
	align-items: center;
	height: 100%;
	text-decoration: none;
	position: relative; // Add position relative here

	h1 {
		color: ${(props) => props.theme.palette.text.primary};
		font-size: 0.8rem;
		cursor: pointer;
		position: relative; // Ensure h1 has a position context
		padding-bottom: 1px; // Add padding to prevent overlap with the underline

		&:hover::after {
			width: 100%;
		}

		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 1px; // Height of the underline
			bottom: 0;
			left: 0;
			background-color: #000;
			transition: width 0.3s ease-in; // Animation effect
			transform: translateY(100%); // Position the underline below the text
		}
	}
`;

const StyledButton = styled(Button)<{ theme: any }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	// border: 1px solid rgba(0, 0, 40, 1);
	border: 1px solid ${(props) => props.theme.titleColor};
	border-radius: 0;
	padding: 0.5rem 1rem;
	background-color: transparent;
	transition: all 0.5s ease-in-out;
	color: ${(props) => props.theme.titleColor};
	font-size: 0.8rem;
	font-weight: bold;
	box-shadow: none;

	&:hover {
		color: #000;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: none;
	}
`;

const StyledButtonMobile = styled(Button)<{ theme: any }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	// border: 1px solid rgba(0, 0, 40, 1);
	border: 1px solid #fff;
	border-radius: 0;
	padding: 0.5rem 1rem;
	background-color: transparent;
	transition: all 0.5s ease-in-out;
	color: #fff;
	font-size: 0.8rem;
	font-weight: bold;
	box-shadow: none;

	&:hover {
		color: #000;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: none;
	}
`;

const MobileMenuButton = styled.div`
	display: none;
	visibility: hidden;

	@media (max-width: 1000px) {
		display: flex;
		visibility: visible;
		justify-content: flex-end;
		width: 50%;
	}
`;

const MobileSettings = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 100vw;
	min-height: 100vh;
	background-color: #000;
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	padding: 5rem;
	padding-bottom: 10rem;
	animation: ${(props) => (props.isClosing ? slideDown : slideUp)} 0.5s ease-out;
`;

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 80%;

	& > * + * {
		margin-top: 1rem;
	}
`;

const DesktopSettings = styled.div`
	display: block;
	visibility: visible;

	@media (max-width: 480px) {
		display: none;
		visibility: hidden;
	}
`;

const CloseButton = styled.button`
	display: flex;
	justify-content: center;
	border: none;
	color: #fff;
	// position: absolute;
	// bottom: 10rem;
	// left: 50%;
	// transform: translateX(-50%); // Adjust for centering
	background-color: transparent;
`;

export default function Header() {
	const theme = useTheme();
	const headerRef = useRef(null);
	const router = useRouter();

	const isHome = router.pathname === '/';

	// State declarations
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [titleColor, setTitleColor] = useState('white');

	const disableScrolling = () => {
		const body = document.body;
		body.style.overflow = 'hidden';
	};

	const enableScrolling = () => {
		const body = document.body;
		body.style.overflow = 'auto';
	};

	const toggleMenu = () => {
		if (isMenuOpen) {
			setIsClosing(true);
			setTimeout(() => {
				setIsMenuOpen(false);
				setIsClosing(false);
				enableScrolling();
			}, 500); // 500ms for the slide down duration
		} else {
			setIsMenuOpen(true);
			disableScrolling();
		}
	};

	useEffect(() => {
		// Update title color based on the route
		setTitleColor(isHome ? 'white' : 'white');
	}, [isHome]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const header = headerRef.current;
			if (header) {
				const headerHeight = header.clientHeight;
				const scrollThreshold = headerHeight / 2;
				const opacity = Math.min(scrollPosition / scrollThreshold, 1);
				const color = alpha(theme.palette.background.default, opacity);
				const shadow = alpha(theme.palette.secondary.main, opacity);

				header.style.backgroundColor = color;
				header.style.boxShadow = `0px 0.25px 0.25px ${shadow}`;

				// Update title color based on scroll position
				if (isHome) {
					const titleColor = opacity >= 1 ? 'white' : 'white';
					setTitleColor(titleColor);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [theme, isHome]);

	return (
		<>
			<StyledAppBar theme={theme} ref={headerRef}>
				<div>
					<StyledSectionLeft theme={theme}>
						<StyledLinkTitle theme={theme} href={`/`} passHref>
							<h1 style={{ color: titleColor }}>NERVE GLOBAL</h1>
						</StyledLinkTitle>
					</StyledSectionLeft>
					{/* <StyledSectionMiddle></StyledSectionMiddle> */}
					<StyledSectionRight>
						<Link href={`/contact`} passHref style={{ textDecoration: 'none' }}>
							<StyledButton theme={{ ...theme, titleColor }}>contact</StyledButton>
						</Link>
					</StyledSectionRight>
					<StyledSectionRightMobile>
						<MobileMenuButton style={{ color: titleColor }} onClick={toggleMenu}>
							<MenuOutlinedIcon />
						</MobileMenuButton>
						{isMenuOpen && (
							<MobileSettings isClosing={isClosing}>
								<MenuContainer>
									<Link onClick={toggleMenu} href={`/contact`} passHref style={{ textDecoration: 'none' }}>
										<StyledButtonMobile theme={theme}>contact</StyledButtonMobile>
									</Link>
									<CloseButton onClick={toggleMenu}>
										<CloseOutlinedIcon onClick={toggleMenu} />
									</CloseButton>
								</MenuContainer>
							</MobileSettings>
						)}
					</StyledSectionRightMobile>
				</div>
			</StyledAppBar>
		</>
	);
}
