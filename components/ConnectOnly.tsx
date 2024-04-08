import styled from '@emotion/styled';
import { Button, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { get } from 'http';
import { useCallback, useEffect, useState } from 'react';
import { AddressPurpose, BitcoinNetworkType, Capability, getAddress, getCapabilities, getProviders, request } from 'sats-connect';
import SendBitcoin from './sendBitcoin';

const ConnectButton = styled(Button)<{ theme: any }>`
	color: ${({ theme }) => theme.palette.text.primary};
	text-transform: none;
	justify-content: flex-start;
	font-size: 16px;
	font-weight: 500;
	height: 50px;
	background-color: ${({ theme }) => theme.palette.background.default};
	border: 1px solid ${({ theme }) => theme.palette.secondary.main};
	border-radius: 12px;

	transition: all 0.75s ease;

	&:hover {
		// background-color: ${({ theme }) => theme.palette.warning.main};
		border: 1px solid ${({ theme }) => theme.palette.warning.main};
	}
`;

export function ConnectOnly({} = {}) {
	const theme = useTheme();
	const [error, setError] = useState<Error | undefined>();
	const [isActivating, setIsActivating] = useState(false);
	const [paymentAddress, setPaymentAddress] = useState<string | undefined>();
	const [paymentPublicKey, setPaymentPublicKey] = useState<string | undefined>();
	const [ordinalsAddress, setOrdinalsAddress] = useState<string | undefined>();
	const [ordinalsPublicKey, setOrdinalsPublicKey] = useState<string | undefined>();
	const [stacksAddress, setStacksAddress] = useState<string | undefined>();
	const [stacksPublicKey, setStacksPublicKey] = useState<string | undefined>();
	const [capabilityState, setCapabilityState] = useState<'loading' | 'loaded' | 'missing' | 'cancelled'>('loading');
	const [network, setNetwork] = useState(BitcoinNetworkType.Mainnet);
	const [capabilities, setCapabilities] = useState<Set<Capability>>();
	const [walletInfo, setWalletInfo] = useState<any>();

	const isReady = !!paymentAddress && !!paymentPublicKey && !!ordinalsAddress && !!ordinalsPublicKey && !!stacksAddress;

	useEffect(() => {
		const runCapabilityCheck = async () => {
			let runs = 0;
			const MAX_RUNS = 20;
			setCapabilityState('loading');

			// the wallet's in-page script may not be loaded yet, so we'll try a few times
			while (runs < MAX_RUNS) {
				try {
					await getCapabilities({
						onFinish(response) {
							setCapabilities(new Set(response));
							setCapabilityState('loaded');
						},
						onCancel() {
							setCapabilityState('cancelled');
						},
						payload: {
							network: {
								type: network,
							},
						},
					});
				} catch (e) {
					runs++;
					if (runs === MAX_RUNS) {
						setCapabilityState('missing');
					}
				}
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		};

		runCapabilityCheck();
	}, [network]);

	const onClick = async () => {
		await getAddress({
			payload: {
				purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment, AddressPurpose.Stacks],
				message: 'SATS Connect Demo',
				network: {
					type: network,
				},
			},
			onFinish: (response) => {
				const paymentAddressItem = response.addresses.find((address) => address.purpose === AddressPurpose.Payment);
				setPaymentAddress(paymentAddressItem?.address);
				setPaymentPublicKey(paymentAddressItem?.publicKey);

				const ordinalsAddressItem = response.addresses.find((address) => address.purpose === AddressPurpose.Ordinals);
				setOrdinalsAddress(ordinalsAddressItem?.address);
				setOrdinalsPublicKey(ordinalsAddressItem?.publicKey);

				const stacksAddressItem = response.addresses.find((address) => address.purpose === AddressPurpose.Stacks);
				setStacksAddress(stacksAddressItem?.address);
				setStacksPublicKey(stacksAddressItem?.publicKey);
			},
			onCancel: () => alert('Request canceled'),
		});
	};

	const toggleNetwork = () => {
		setNetwork(network === BitcoinNetworkType.Testnet ? BitcoinNetworkType.Mainnet : BitcoinNetworkType.Testnet);
		onWalletDisconnect();
	};

	const onWalletDisconnect = () => {
		setPaymentAddress(undefined);
		setPaymentPublicKey(undefined);
		setOrdinalsAddress(undefined);
		setOrdinalsPublicKey(undefined);
		setStacksAddress(undefined);
	};

	const handleGetInfo = async () => {
		try {
			const response = await request('getInfo', null);

			if (response.status === 'success') {
				console.log('WALLETINFO', response.result);
				setWalletInfo(response.result);
			} else {
				alert('Error getting info. Check console for error logs');
				console.error(response.error);
				setWalletInfo('Error getting info. Check console for error logs');
			}
		} catch (err) {
			console.log(err);
		}
	};

	// make an api fetch to get bitcoin wallet amount
	// const getBitcoinAmount = async () => {
	// 	try {
	// 		const response = await fetch(`https://api.covalenthq.com/v1/btc-mainnet/address/${paymentAddress}/?key=cqt_rQ7rbWxwcKMt7DBJXF6KJ4wV9Yqw`);
	// 		const data = await response.json();
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// getBitcoinAmount();

	const capabilityMessage =
		capabilityState === 'loading'
			? 'Checking capabilities...'
			: capabilityState === 'cancelled'
			? 'Capability check cancelled by wallet. Please refresh the page and try again.'
			: capabilityState === 'missing'
			? 'Could not find an installed Sats Connect capable wallet. Please install a wallet and try again.'
			: !capabilities
			? 'Something went wrong with getting capabilities'
			: undefined;

	if (capabilityMessage) {
		return (
			<>
				<a>Sats Connect Test App - {network}</a>
				<a>{capabilityMessage}</a>
			</>
		);
	}

	if (error) {
		return (
			// <div style={{ display: 'flex', flexDirection: 'column' }}>
			<ConnectButton theme={theme} style={{ justifyContent: 'center' }} onClick={onClick}>
				Try again?
			</ConnectButton>
			// </div>
		);
	} else if (!isReady) {
		return (
			// <div style={{ display: 'flex', flexDirection: 'column' }}>
			<>
				<ConnectButton
					theme={theme}
					style={{ justifyContent: 'center' }}
					// startIcon={<CircularProgress color="info" thickness={2.5} size={25} />}
					// disabled={false}
					onClick={onClick}
				>
					Connect {network === BitcoinNetworkType.Mainnet ? 'Mainnet' : 'Testnet'}
				</ConnectButton>
				<button style={{ height: 30, width: 180 }} onClick={toggleNetwork}>
					Switch Network
				</button>
				<br />
				<a>Get Wallet Info</a>
				<button onClick={handleGetInfo}>Request Wallet Info</button>
				{walletInfo && <div>Version {walletInfo.version}</div>}
			</>
			// </div>
		);
	} else {
		return (
			<>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>Payment Address: {paymentAddress}</div>
					<div>Payment PubKey: {paymentPublicKey}</div>
					<div>Ordinals Address: {ordinalsAddress}</div>
					<div>Ordinals PubKey: {ordinalsPublicKey}</div>
				</div>
				<button style={{ height: 30, width: 180 }} onClick={toggleNetwork}>
					Switch from {network} to {network === BitcoinNetworkType.Mainnet ? 'Testnet' : 'Mainnet'}
				</button>
				<br />
				<div className="container">
					<h3>Disconnect wallet</h3>
					<button onClick={onWalletDisconnect}>Disconnect</button>
				</div>
				<div className="container">
					<h3>Get Wallet Info</h3>
					<button onClick={handleGetInfo}>Request Wallet Info</button>
					{walletInfo && <div>Version {walletInfo.version}</div>}
				</div>
				<SendBitcoin address={paymentAddress} network={network} capabilities={capabilities!} />
			</>
		);
	}
}
