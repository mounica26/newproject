import {Given, When, Then} from '@cucumber/cucumber';
import { after } from 'node:test';
import {type Browser, type Page, chromium} from 'playwright';

let browser:Browser;
let page:Page;

after(async function () {
    await browser.close();
} );

Given('User is on Facebook login page', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://www.facebook.com/');
});

When('User enters valid username and password', async function () {
    await page.pause();
    await page.getByRole('textbox', { name: 'Email or mobile number' }).fill('Mounica26@gmail.com')
    await page.getByRole('textbox', { name: 'Password' }).fill('Mounica@26');

});
Then('User should be redirected to the homepage', async function () {
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForLoadState('networkidle'); 
    
});
