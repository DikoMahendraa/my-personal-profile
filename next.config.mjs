import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'static-00.iconduck.com',
      },
      {
        protocol: 'https',
        hostname: 'via.assets.so',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pngtowebp.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.candycode.com',
      },
      {
        protocol: 'https',
        hostname: 'awesomedevin.github.io',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
}

export default withSentryConfig(nextConfig, {
  sourcemaps: {
    disable: true,
  },
  org: 'HiCoco',
  project: 'javascript-nextjs',

  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  hideSourceMaps: true,
  silent: false,
})
