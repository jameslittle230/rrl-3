import createMDX from '@next/mdx'
const nextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({})

export default withMDX(nextConfig);
