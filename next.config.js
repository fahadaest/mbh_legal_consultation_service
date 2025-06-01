/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {},
    },
    images: {
        domains: [
            process.env.NEXT_PUBLIC_STRAPI_HOST
                ? new URL(process.env.NEXT_PUBLIC_STRAPI_HOST).hostname
                : 'http://localhost:1337/api',
        ],
    },
};

module.exports = nextConfig;  