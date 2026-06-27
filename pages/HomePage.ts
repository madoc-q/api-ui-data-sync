import { type Locator, type Page, expect } from '@playwright/test';

// Page Object for the Conduit RealWorld homepage
export class HomePage {
  readonly page: Page;
  readonly globalFeedTab: Locator;
  readonly articleCards: Locator;
  readonly articleTitles: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main feed tab and article elements on the homepage
    this.globalFeedTab = page.getByRole('link', { name: 'Global Feed' });
    this.articleCards = page.locator('.article-preview');
    this.articleTitles = page.locator('.article-preview h1');
  }

  // Opens the Conduit homepage
  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  // Waits for the feed to load and returns the first article title
  async getFirstArticleTitle(): Promise<string> {
    await expect(this.globalFeedTab).toBeVisible();
    await expect(this.articleCards.first()).toBeVisible();
    await expect(this.articleTitles.first()).toBeVisible();

    const title = await this.articleTitles.first().textContent();
    return (title ?? '').trim();
  }
}
