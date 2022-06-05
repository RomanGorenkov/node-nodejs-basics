import util from "util";
import fs from "fs";

export const errorHandler = (error) => {
    if (error) {
        const errorMessage = 'FS operation failed';

        throw new Error(errorMessage)
    }
}

export const completeHandler = () => console.log('Complete');

export const writeFilePromisify = util.promisify(
    (path, data, options, cb) => fs.writeFile(
        path,
        data,
        options,
        (error, ...results) => cb(error, results),
    )
);

export const unlinkPromisify = util.promisify(fs.unlink);
export const readFilePromisify = util.promisify(fs.readFile);
export const mkdirPromisify = util.promisify(fs.mkdir);
export const readdirPromisify = util.promisify(fs.readdir);
export const renamePromisify = util.promisify(
    (oldPath, newPath, callback) => fs.rename(
        oldPath,
        newPath,
        (error, ...results) => callback(error, results),
    )
);

export const copyFilePromisify = util.promisify(
    (src, dest, mode, callback) => fs.copyFile(
        src,
        dest,
        mode,
        (error, ...results) => callback(error, results),
    )
);
