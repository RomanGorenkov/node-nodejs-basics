import os from 'os'
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const cpuThreads = os.cpus()
    const workerPromiseArray = cpuThreads.map((_, index) => {
        const workerData = 10 + index;
        const worker = new Worker("./worker.js", {workerData});

        return new Promise((resolve, reject) => {
            worker
                .on('message', data => resolve({data}))
                .on('error', error => reject({error}))
        })
    });
    return await Promise.allSettled(workerPromiseArray)
}

console.log(await performCalculations())
