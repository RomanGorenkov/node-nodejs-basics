import cp from 'node:child_process'
import fs from 'fs'

export const spawnChildProcess = async (args) => {
    const spawnProcess = cp.fork('./files/script.js', args)
    const write = fs.createWriteStream
};

spawnChildProcess(['lol', 'kek'])
    .then(() => 'Successfully started child process')