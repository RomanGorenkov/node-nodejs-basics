import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
import { errorHandler, readdirPromisify } from "./utilities.js";

export const list = async () => {
    const filename = fileURLToPath(import.meta.url);
    const folderName = dirname(filename);
    const folderPath = `${folderName}/files`;
    const printFiles = (files => {
        files.forEach(file => {
            console.log(file);
        });
    });

    readdirPromisify(folderPath)
        .then(printFiles)
        .catch(errorHandler);
};

list();