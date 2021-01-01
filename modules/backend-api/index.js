const { resolve } = require('path');

const backendApiModule = function (moduleOptions) {
  const options = Object.assign({}, this.options.backend, moduleOptions);

  /* eslint-disable no-console */
  console.log('backend api module config', options);

  // add backend-api client plugin
  this.addTemplate({
    src: resolve(__dirname, './templates/plugins/backend-api.ts'),
    fileName: 'backend-api.ts'
  });

  this.addPlugin({
    options,
    src: resolve(__dirname, './templates/plugins/index.ts')
  });
};

module.exports = backendApiModule;
module.exports.default = backendApiModule;
