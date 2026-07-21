const {test, expect} = require('@playwright/test')

test("pop up validation",async({page})=>{

await page.locator("#userEmail").fill("sachin147patil@gmail.com");
await page.locator("#userPassword").fill("sachin23");
await page.locator("#login").click();




   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await expect(page.locator("#displayed-text")).toBeVisible(); 
   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();
   await page.pause();
   page.on("dailog", dialog => dailog.accept());
   await page.locator("#confirmbtn").click();

   await page.locator("#mousehover").hover();

  const framePage =  page.frameLocator("#courses-iframe");
  await framePage.locator("li a[href*='lifetime-access']:visible").click();



})