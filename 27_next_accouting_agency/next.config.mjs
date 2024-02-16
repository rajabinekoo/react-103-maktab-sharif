/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    pocketbaseUsername: "ali.rajabinekoo@protonmail.com",
    pocketbasePassword: "123123123123",
    pocketbaseUrl: "https://rajabi-nekoo.pockethost.io/",
    expirationTime: "3600",
    sessionCookieKey: "session-key",
  },
};

export default nextConfig;
