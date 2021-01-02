module.exports = {
  webpack(config) {
    require('./scripts/generate-stork-index');
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
