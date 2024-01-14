/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_JWT_SECRET: "NEXT-JWT-SECRET",
        NEXTAUTH_SECRET: "NEXT-SECRET",
        GOOGLE_CLIENT_ID:"388199485898-dp0to6n8rq09kv8ptq0hh712a6dqn83q.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET:"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",
    }
}

module.exports = nextConfig
