import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
    const zip = zlib.createGzip();
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');

    readStream.pipe(zip).pipe(writeStream);
    console.log("zipped");
};

compress();