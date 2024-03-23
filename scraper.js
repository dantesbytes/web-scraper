const puppeteer = require("puppeteer");
const { Client } = require("pg");
require("dotenv").config();


async function run() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
  
    // Navigate to the website you want to scrape
    await page.goto("https://netflix.com/");
  
    // Extract data from the page
    const data = await page.evaluate(() => {
      const title = document.querySelector("h1").innerText;
      const url = window.location.href;
  
      return { title, url };
    });
  
    // Close the browser
    await browser.close();
  
    return data;
  }