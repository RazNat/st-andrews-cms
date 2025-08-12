module.exports = {
    // Disable SWC compiler to avoid native binding errors on Railway
    bundler: 'webpack',
    webpack: (config) => {
      // Optimize for production deployment
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
      
      // Disable problematic plugins that cause Railway build issues
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
      
      return config;
    },
  };