import { Page } from "playwright/test";

class NavigationPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
