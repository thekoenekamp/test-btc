import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

const StyledDiv = styled.div`
	display: flex;
	width: 75%;
	height: 45rem;
	border: none;
	border-radius: 1rem;
	opacity: 0.75;

	// box-shadow: 0px 0px 150px rgba(191, 0, 255, 0.5);
	box-shadow: 0px 0px 150px rgba(255, 255, 255, 0.25);

	@media (max-width: 1200px) {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 100%;
		height: 20rem;
		margin: 0 auto 1rem auto;
	}
`;

const GoogleMap = ({ apiKey }) => {
	const mapRef = useRef(null);
	const googleMapsScriptId = 'google-maps-script';

	const grayscaleStyle = [
		{
			featureType: 'all',
			stylers: [
				{ saturation: -100 }, // Remove all color
			],
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{ lightness: 100 }, // Make roads much lighter
				{ visibility: 'simplified' }, // Simplify road appearance
			],
		},
		{
			featureType: 'road',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }, // Optionally, remove road labels for cleaner look
			],
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }, // Remove labels from land parcels
			],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry',
			stylers: [
				{ lightness: 40 }, // Lighten administrative areas
			],
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [
				{ lightness: 40 }, // Lighten water bodies
			],
		},
		// ... Add more styles as needed ...
	];

	const initializeMap = () => {
		const map = new google.maps.Map(mapRef.current, {
			center: { lat: 47.166664, lng: 8.524214 },
			zoom: 10,
			styles: grayscaleStyle,
			mapTypeControl: false,
			fullscreenControl: false,
			streetViewControl: false,
			// mapTypeId: google.maps.MapTypeId.TERRAIN,
		});

		new google.maps.Marker({
			position: { lat: 47.166664, lng: 8.524214 },
			map: map,
			animation: google.maps.Animation.DROP,
			title: 'Weinbergstrasse 26, Zug, Switzerland',
		});
	};

	useEffect(() => {
		// Check if the script is already added
		if (!document.getElementById(googleMapsScriptId)) {
			const script = document.createElement('script');
			script.id = googleMapsScriptId;
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
			script.async = true;
			document.head.appendChild(script);

			script.onload = initializeMap;
		} else if (window.google && window.google.maps) {
			// If script is already there and google.maps is available, initialize the map directly
			initializeMap();
		}
	}, [apiKey]);

	return <StyledDiv ref={mapRef} />;
};

export default GoogleMap;
