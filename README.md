# 🚀 WebdriverIO + Appium Android Test Automation

## 📖 Overview
This project is a test automation suite using WebdriverIO with Appium to run automated UI tests on an Android emulator. It leverages the Mocha test framework and generates detailed test reports using Allure.

## 📝 Project Description
The test suite targets the Android API Demos app running on an Android emulator (platform version 16). It uses the UiAutomator2 automation engine to interact with the app UI elements. The tests are written in JavaScript and executed locally using WebdriverIO.

## ⚙️ Installation
1. Ensure you have Node.js installed.
2. Clone this repository.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make sure you have Android SDK and an emulator configured with device name `emulator-5554`.
5. Start the Android emulator before running tests.

## ▶️ Usage
Run the test suite with the following command:
```bash
npm test
```
This will execute the tests defined in the `tests` folder using the configuration in `wdio.conf.js`.

## 📊 System Output
After test execution, an Allure report is generated automatically. The report provides detailed insights into test results, including screenshots on failure.

- The report is generated in the `allure-report` directory.
- The report will open automatically after test completion if the environment supports it.

## 🎨 Icons Legend
- 🚀 Project start
- 📖 Overview
- 📝 Description
- ⚙️ Installation
- ▶️ Usage
- 📊 System Output

---

Happy Testing! 🎉
