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

  private readonly agencyName: Locator;
  private readonly agencyRole: Locator;
  private readonly agencyEmail: Locator;
  private readonly agencyWebsite: Locator;
  private readonly agencyAddress: Locator;
  private readonly regionOfOperation: Locator;
  private readonly nextSubmitButton: Locator;

  private readonly yearsOfExperience: Locator;
  private readonly recuritedStudentNo: Locator;
  private readonly focusArea: Locator;
  private readonly successMetrics: Locator;
  private readonly careerCounselingCheckbox: Locator;
  private readonly experienceNextBtn: Locator;

  private readonly businessRegistrationNum: Locator;
  private readonly preferredCountries: Locator;

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

    this.agencyName = page.getByPlaceholder("Enter Agency Name");
    this.agencyRole = page.getByRole("textbox", { name: "Role in Agency" });
    this.agencyEmail = page.locator('input[name="agency_email"]');
    this.agencyWebsite = page.getByRole("textbox", { name: "Website" });
    this.agencyAddress = page.locator('input[name="agency_address"]');
    this.regionOfOperation = page.getByRole("combobox", {
      name: "Select Your Region of Operation",
    });
    this.nextSubmitButton = page.getByRole("button", { name: "Next" });

    this.yearsOfExperience = this.page.getByRole("combobox", {
      name: "Years of Experience",
    });
    this.recuritedStudentNo = this.page.getByRole("spinbutton", {
      name: "Number of Students Recruited Annually",
    });
    this.focusArea = this.page.getByRole("textbox", { name: "Focus Area" });
    this.successMetrics = this.page.getByRole("spinbutton", {
      name: "Success Metrics",
    });
    this.careerCounselingCheckbox = this.page.getByRole("checkbox", {
      name: "Career Counseling",
    });
    this.experienceNextBtn = this.page.locator("button[type='submit']");

    this.businessRegistrationNum = this.page.getByRole("textbox", {
      name: "Business Registration Number",
    });
    this.preferredCountries = this.page.getByRole("combobox", {
      name: "Preferred Countries",
    });
  }
}
