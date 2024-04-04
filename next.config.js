//ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,

	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/i,
				use: [{ loader: '@svgr/webpack', options: { icon: true } }],
			},
			{
				test: /\.mp3$/i,
				use: [{ loader: 'file-loader' }],
			}
		);

		return config;
	},

	env: {
		googleApiKey: process.env.GOOGLE_API_KEY,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
