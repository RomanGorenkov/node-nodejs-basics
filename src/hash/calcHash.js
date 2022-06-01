import crypto from 'crypto';
import * as fsPromises from 'fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from "path";

export const calculateHash = async () => {
    const filename = fileURLToPath(import.meta.url);
    const folderName = dirname(filename);
    const filePath = `${folderName}/files/fileToCalculateHashFor.txt`;

    fsPromises.readFile(filePath).then(fileBuffer => {
        const hashSum = crypto.createHash('sha256');

        hashSum.update(fileBuffer);
        console.log(hashSum.digest('hex'));
    });
};

calculateHash();