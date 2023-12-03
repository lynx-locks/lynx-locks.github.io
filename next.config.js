/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
    target: 'severless'
  },
});

const withUnoptimizedImage = {
  images: {
    unoptimized: true
  }
}

module.exports = withPlugins([withUnoptimizedImage,withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})],nextConfig)

