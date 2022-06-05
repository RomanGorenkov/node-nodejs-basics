const getRssEnvironmentKeys = () => Object.keys(process.env).filter(key => key.startsWith('RSS_'));
const printEnvironmentVariables = (keys) => {
    const formatEnvironmentStrings = keys.map((key) => `${key}=${process.env[key]};`);

    console.log(formatEnvironmentStrings.join(' '));
}

export const parseEnv = () => {
    const rssEnvironmentKeys = getRssEnvironmentKeys();

    printEnvironmentVariables(rssEnvironmentKeys);
};

parseEnv();