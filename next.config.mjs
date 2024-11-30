/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'], // Allow external image domains
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // Ensure OpenAI API key is available
  },
  experimental: {
    serverActions: true, // If you plan to use experimental features like server actions
  },
};

export default nextConfig;
