import path from 'path';
import linkPackage from 'link-package';
import config from './config';

// setup isomorphic module aliases
const rootPath = path.relative(path.resolve(__dirname, '..'), __dirname);
config().linkPackages.forEach((pkg) => {
  linkPackage(path.join(rootPath, pkg.path), pkg.alias);
});

