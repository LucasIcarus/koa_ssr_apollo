const path = require('path');

const ROOT = path.join(process.cwd());
const SRC = path.join(ROOT, 'src');
const SERVER = path.join(SRC, 'server');
const DIST = path.join(ROOT, 'dist');

module.exports = {
  ROOT,
  SRC,
  DIST,
  SERVER,
};
