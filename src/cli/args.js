const getCustomArguments = () => process.argv.slice(2);

export const parseArgs = () => {
    const customArguments = getCustomArguments();
    const keys = customArguments.filter((_, index) => index % 2 === 0);
    const values = customArguments.filter((_, index) => index % 2 !== 0);
    const formatArgStrings = keys.map((key, index) => `${key} is ${values[index]},`);

    console.log(formatArgStrings.join(' '));
};

parseArgs();