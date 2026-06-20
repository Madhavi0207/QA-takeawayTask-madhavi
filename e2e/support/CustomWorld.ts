import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";

import { Browser, BrowserContext, Page } from "@playwright/test";
import { SignUpPage } from "../pageObject/SignUpPage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  signUpPage!: SignUpPage;

  users: Record<string, unknown> = {};
  meetings: Record<string, unknown> = {};
  scenarioData: Record<string, unknown> = {};

  constructor(options: IWorldOptions) {
    super(options);
  }

  initPages(): void {
    this.signUpPage = new SignUpPage(this.page);
  }

  setData(key: string, value: unknown): void {
    this.scenarioData[key] = value;
  }

  getData<T>(key: string): T {
    return this.scenarioData[key] as T;
  }
}

setWorldConstructor(CustomWorld);
