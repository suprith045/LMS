/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.UPLOADTHING_ID}.ufs.sh`],
  },
}

module.exports = nextConfig
