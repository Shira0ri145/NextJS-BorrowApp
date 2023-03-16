/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    JWT_SECRET:'access_secrete',
    BASE_URL_BACKEND:'http://localhost:8000'
  },
}

module.exports = nextConfig
