/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'res.cloudinary.com'
        },
        {
            hostname: 'utfs.io'
        }]
    },
    output: 'standalone',
};

export default nextConfig;
