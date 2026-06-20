import { DataTable } from "@cucumber/cucumber";
import { Locator, Page } from "playwright/test";

export class SignUpPage {
  private readonly page: Page;
  public readonly baseUrl: String;

  private readonly getStartedButton: Locator;
  private readonly policyCheckBox: Locator;
  private readonly contiuneButton: Locator;

  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly emailField: Locator;
  private readonly phoneNumber: Locator;
  private readonly passwordSelector: Locator;
  private readonly confirmPassword: Locator;
  private readonly nextButtonSelector: Locator;

  private readonly codeVerification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://authorized-partner.vercel.app/";

    this.getStartedButton = page.getByRole("button", { name: "Get Started" });
    this.policyCheckBox = page.getByRole("checkbox", {
      name: "I agree to theTerms of Service and Privacy Policy",
    });

    this.contiuneButton = page.getByRole("button", { name: "Continue" });

    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.emailField = page.getByRole("textbox", { name: "Email Address" });
    this.phoneNumber = page.getByRole("textbox", { name: "Phone Number" });
    this.passwordSelector = page.locator('input[name="password"]');
    this.confirmPassword = page.locator('input[name="confirmPassword"]');
    this.nextButtonSelector = page.getByRole("button", { name: "Next" });

    this.codeVerification = page.locator('input[autocomplete="one-time-code"]');
  }
}
