import { fileURLToPath } from "node:url";
import { dirname } from "path";
import fs from "fs";
import { completeHandler, copyFilePromisify, errorHandler, mkdirPromisify, readdirPromisify } from "./utilities.js";

export const copy = async () => {
    const filename = fileURLToPath(import.meta.url);
    const folderName = dirname(filename);
    const folderPath = `${folderName}/files`;
    const newFolderPath =`${folderName}/files_copy`;

    const createFolder = () => mkdirPromisify(newFolderPath);
    const readFiles = () => readdirPromisify(folderPath)
    const copyFiles = (fileNames) => {
        fileNames.forEach(fileName => {
            const filePath = `${folderPath}/${fileName}`
            const newFilePath = `${newFolderPath}/${fileName}`

            return copyFilePromisify(filePath, newFilePath, fs.constants.COPYFILE_EXCL)
        })
    }


    createFolder()
        .then(readFiles)
        .then(copyFiles)
        .then(completeHandler)
        .catch(errorHandler);
};

copy();