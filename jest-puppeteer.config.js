module.exports = {
    launch: {
        headless: process.env.CI === 'true',
        ignoreDefaultArgs: [ '--disable-extensions' ],
        args: [ '--no-sandbox' ],
        executablePath: 'chrome.exe'
    },
    server: {
        command: 'npm run serve',
        port: 33333,
        launchTimeout: 180000
    }
};
