import fs from 'fs';

export const read = async () => {
    const filename = './files/fileToRead.txt'
    const readStream = fs.createReadStream(filename);

    readStream.pipe(process.stdout)
};

read();