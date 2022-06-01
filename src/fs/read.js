import { fileURLToPath } from "node:url";
import { dirname } from "path";
import { errorHandler, readFilePromisify } from "./utilities.js";

export const read = async () => {
    const filename = fileURLToPath(import.meta.url);
    const folderName = dirname(filename);
    const filePath = `${folderName}/files/fileToRead.txt`;
    const printFile = (fileData) => console.log(fileData.toString());


    readFilePromisify(filePath)
        .then(printFile)
        .catch(errorHandler);
};

read();