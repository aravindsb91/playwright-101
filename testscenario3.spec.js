const {test, expect} = require('@playwright/test')

test('submit form',async({page})=>{
await page.goto("https://www.testmuai.com/selenium-playground/")

await page.locator("//a[normalize-space()='Input Form Submit']").click();
await page.getByRole('button',{name:'Submit'}).click();
const nameField = page.locator('#name');
await expect(nameField).toHaveJSProperty('validationMessage','Please fill out this field.');
await page.waitForTimeout(3000);

await page.locator('#name').fill('aravind');
await page.locator('#inputEmail4').fill('aravind@abc.com');
await page.locator('#inputPassword4').fill('pass@abc');
await page.locator('#company').fill('ABC Tech Solutions');
await page.locator('#websitename').fill('https://www.ABCTECHSOLUTIONS.com');
await page.locator('select[name="country"]').selectOption({label:'United States'});
await page.locator('#inputCity').fill('california');
await page.locator('#inputAddress1').fill('No.1,abc street');
await page.locator('#inputAddress2').fill('flat no.11');
await page.locator('#inputState').fill('california');
await page.locator('#inputZip').fill('54321');
await page.waitForTimeout(3000);

await page.getByRole('button',{name:'submit'}).click();

await expect(page.locator('.success-msg')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
await page.waitForTimeout(2000);

});