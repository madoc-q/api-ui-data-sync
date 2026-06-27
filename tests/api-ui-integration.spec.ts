import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const ARTICLES_API = 'https://api.realworld.show/api/articles';

test.describe('Project 1: API & UI Integration', () => {
  test('first article title on UI matches the backend API response', async ({
    page,
    request,
  }) => {
    // Step 1: fetch the latest articles from the backend API
    const response = await request.get(ARTICLES_API);
    expect(response.ok()).toBeTruthy();

    // Step 2: parse the JSON and grab the first article title
    const body = await response.json();
    expect(body.articles.length).toBeGreaterThan(0);

    const expectedTitle: string = body.articles[0].title;

    // Step 3: open the UI, load the homepage feed, and read the first title
    const homePage = new HomePage(page);
    await homePage.goto();

    const actualTitle = await homePage.getFirstArticleTitle();

    // Step 4: confirm the UI title matches the API data
    expect(actualTitle).toBe(expectedTitle);
  });
});
