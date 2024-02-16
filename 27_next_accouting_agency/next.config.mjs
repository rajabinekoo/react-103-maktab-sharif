/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    pocketbaseUsername: "",
    pocketbasePassword: "",
    pocketbaseUrl: "",
    expirationTime: "3600",
    sessionCookieKey: "session-key",
  },
};

export default nextConfig;
