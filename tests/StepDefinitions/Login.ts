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
    await page.fill('input[name="email"]', 'your_username');
    await page.fill('input[name="pass"]', 'your_password');
    await page.click('button[name="login"]');
});