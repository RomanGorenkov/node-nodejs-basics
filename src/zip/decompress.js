import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');

    readStream.pipe(unzip).pipe(writeStream);
    console.log("unzipped");
};

decompress()