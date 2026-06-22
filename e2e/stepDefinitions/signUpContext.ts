import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "playwright/test";

import { CustomWorld } from "../support/CustomWorld";
import { SignUpPage } from "../pageObject/SignUpPage";

Given("The user is in the sign up page", async function (this: CustomWorld) {
  if (!this.signUpPage) {
    this.signUpPage = new SignUpPage(this.page);
  }

  await this.signUpPage.navigateToLandingPage();
});

When(
  "The user enters the given details for user details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.signUpPage) {
      this.signUpPage = new SignUpPage(this.page);
    }
    await this.signUpPage.enterUserDetails(dataTable);

    this.signUpPage.oneTimeCodeVerification();
  },
);
When(
  "The user enters the agency details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.signUpPage) {
      this.signUpPage = new SignUpPage(this.page);
    }
    await this.signUpPage.enterAgencyDetails(dataTable);
  },
);
When(
  "The user enters experience details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.signUpPage) {
      this.signUpPage = new SignUpPage(this.page);
    }
    await this.signUpPage.enterExperienceDetails(dataTable);
  },
);
When(
  "The user enters following business details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.signUpPage) {
      this.signUpPage = new SignUpPage(this.page);
    }
    await this.signUpPage.enterBusinessDetails(dataTable);
  },
);

Then("The user logs into the dashboard", async function (this: CustomWorld) {
  if (!this.signUpPage) {
    this.signUpPage = new SignUpPage(this.page);
  }
  await expect(this.signUpPage.dashboardPage).toBeVisible();
});
