import { fileURLToPath } from "node:url";
import { dirname } from "path";
import { completeHandler, errorHandler, renamePromisify } from "./utilities.js";

export const rename = async () => {
    const filename = fileURLToPath(import.meta.url)
    const folderName = dirname(filename)
    const oldPath = `${folderName}/files/wrongFilename.txt`
    const newPath = `${folderName}/files/properFilename.md`

    renamePromisify(oldPath, newPath)
        .then(completeHandler)
        .catch(errorHandler);
};

rename();