import fs from 'fs';

export const write = async () => {
    const filename = './files/fileToWrite.txt'
    const writeStream = fs.createWriteStream(filename);

    process.stdin.pipe(writeStream)
};

write();