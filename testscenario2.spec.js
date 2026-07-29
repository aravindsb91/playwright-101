const {test, expect } = require('@playwright/test');

test('drag and drop slider',async({page})=>{

await page.goto("https://www.testmuai.com/selenium-playground/");
await page.locator("//a[normalize-space()='Drag & Drop Sliders']").click()
const slider = page.locator("//input[@value='15']").first();
await slider.fill("95");

await slider.evaluate((element)=>{
    element.value= 95;
    element.dispatchEvent(new Event('input',{bubbles: true}));
    element.dispatchEvent(new Event('change',{bubbles: true}));
});
await expect(slider).toHaveValue("95");
await page.waitForTimeout(5000);

});
