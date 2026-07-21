const {test, expect} = require("@playwright/test")

test("UI control",async({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const dropdown = page.locator("#dropdown-class-example");
    await dropdown.selectOption("Option3");
    //await page.pause();

    await page.locator("#checkBoxOption2").click();

    console.log(await page.locator("#checkBoxOption2").isChecked());

    await page.locator(".radioButton").first().click();

    await expect(page.locator(".radioButton").first()).toBeChecked();

    console.log(await page.locator(".radioButton").first().isChecked());
})