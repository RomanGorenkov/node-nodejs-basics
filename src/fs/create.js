import { fileURLToPath } from "node:url";
import { dirname } from "path";
import { completeHandler, errorHandler, writeFilePromisify } from "./utilities.js";

export const create = async () => {
    const filename = fileURLToPath(import.meta.url);
    const folderName = dirname(filename);
    const filePath = `${folderName}/files/fresh.txt`;

    writeFilePromisify(filePath, 'I am fresh and young', { flag: 'wx' })
        .then(completeHandler)
        .catch(errorHandler);
};

create();