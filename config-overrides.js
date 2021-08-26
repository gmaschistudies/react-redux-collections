const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.join(__dirname, 'src/'),
    })
  ),
};
