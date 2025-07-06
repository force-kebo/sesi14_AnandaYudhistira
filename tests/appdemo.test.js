describe('Appium test APP', () => {
    afterEach(async () => {

    await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });

    await browser.pause(1000);

    await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
  });

  it('input element text entry name dan password', async () => {
    
    const appMenu = await $('//android.widget.TextView[@content-desc="App"]')
    const alertDialogMenu = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
    const textEntryMenu = await $('//android.widget.Button[@content-desc="Text Entry dialog"]')
    await appMenu.click();
    await alertDialogMenu.click();
    await textEntryMenu.click();

    const namaField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')
    const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')
    await namaField.setValue('Nute');
    await passwordField.setValue('MangNute123');

  })
})