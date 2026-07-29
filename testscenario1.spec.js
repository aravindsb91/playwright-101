const {test, expect} = require('@playwright/test');

test('Simple Form Demo',async({ page }) =>{
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.locator("//a[normalize-space()='Simple Form Demo']").click()
    await expect(page).toHaveURL("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    
    await page.locator("//input[@id='user-message']").click()
    const message = "Welcome to TestMu";
    await page.locator("//input[@id='user-message']").fill(message);
    await page.waitForTimeout(2000);
    page.getByRole('button', { name: 'Get Checked Value' }).click()
    await page.waitForTimeout(3000);
    
});