import path, { dirname } from 'path';
import { release, version }  from 'os';
import { createServer as createServerHttp}  from 'http';
import './files/c.js';
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const unknownObject =  random > 0.5 ? require('./files/a.json') : require('./files/b.json');

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

