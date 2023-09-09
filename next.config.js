/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            '127.0.0.1',
            'localhost',
            'char1ey.github.io',
            'www.notion.so',
            'https://nftin-wallet-bucket.s3.ap-northeast-2.amazonaws.com/',
            'prod-files-secure.s3.us-west-2.amazonaws.com',
            'user-images.githubusercontent.com',
            'github.com'],
    },
}

module.exports = nextConfig