/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_JWT_SECRET: "NEXT-JWT-SECRET",
        NEXTAUTH_SECRET: "NEXT-SECRET"
    }
}

module.exports = nextConfig
