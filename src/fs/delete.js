import { fileURLToPath } from "node:url";
import { dirname } from "path";
import { completeHandler, errorHandler, unlinkPromisify } from "./utilities.js";

export const remove = async () => {
    const filename = fileURLToPath(import.meta.url)
    const folderName = dirname(filename)
    const filePath = `${folderName}/fileToRemove.txt`

    unlinkPromisify(filePath)
        .then(completeHandler)
        .catch(errorHandler);
};

remove();