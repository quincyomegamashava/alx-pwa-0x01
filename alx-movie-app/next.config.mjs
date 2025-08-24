import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: 'public', // location where service worker & manifest will be generated
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // allows movie poster images from IMDB
  },
};

export default withPWA({
  ...nextConfig,
});
