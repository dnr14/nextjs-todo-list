const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = phase => (
  {
    reactStrictMode: true,
    webpack(config,{ webpack }){
      config.resolve = {
				alias: {
					'@components': path.resolve(__dirname, './components')
				},
				...config.resolve
			};
			return config;
    }
  }
)

module.exports = nextConfig;
