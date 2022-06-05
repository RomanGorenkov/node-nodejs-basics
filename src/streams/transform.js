import { Transform } from 'stream'


export const transform = async () => {q
    const revers = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    })

    process.stdin.pipe(revers).pipe(process.stdout)
};

transform();