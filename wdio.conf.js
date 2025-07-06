import allure from 'allure-commandline';

export const config = {
    runner: 'local',
    specs: ['./tests/*.js'],
    maxInstances: 1,
    capabilities: [{
        'platformName': 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '16',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.appium.android.apis',
        'appium:appActivity': '.ApiDemos',
        'appium:noReset': false
    }],
    logLevel: 'info',
    framework: 'mocha',
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')

                const openReport = allure(['open', 'allure-report'])
                openReport.on('exit', function(openExitCode) {
                    if (openExitCode !== 0) {
                        console.error('Failed to open Allure report')
                    }
                    resolve()
                })
            })
        })
    },
    hostname: 'localhost',
    port: 4723,
    path: '/',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (_, __, { passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}
