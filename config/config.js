const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-youstart',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-youstart-development',
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-youstart',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-youstart-test',
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-youstart',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-youstart-production',
  },
};

module.exports = config[env];
