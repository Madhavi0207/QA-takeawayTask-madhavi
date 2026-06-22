import { DataTable } from "@cucumber/cucumber";
import { expect, Locator, Page } from "playwright/test";
import path from "path";

export class SignUpPage {
  private readonly page: Page;
  public readonly baseUrl: String;

  //Get started with privacy terms and condition

  private readonly getStartedButton: Locator;
  private readonly policyCheckBox: Locator;
  private readonly contiuneButton: Locator;

  //Set up your account
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly emailField: Locator;
  private readonly phoneNumber: Locator;
  private readonly passwordSelector: Locator;
  private readonly confirmPassword: Locator;
  private readonly nextButtonSelector: Locator;

  //one time code verification

  private readonly codeVerification: Locator;

  //agency details

  private readonly agencyName: Locator;
  private readonly agencyRole: Locator;
  private readonly agencyEmail: Locator;
  private readonly agencyWebsite: Locator;
  private readonly agencyAddress: Locator;
  private readonly regionOfOperation: Locator;
  private readonly locationOptions: Locator;
  private readonly nextSubmitButton: Locator;

  //Professional Experience

  private readonly yearsOfExperience: Locator;
  private readonly recuritedStudentNo: Locator;
  private readonly focusArea: Locator;
  private readonly successMetrics: Locator;
  private readonly careerCounselingCheckbox: Locator;
  private readonly experienceNextBtn: Locator;

  //Verification and Preferences

  private readonly businessRegistrationNum: Locator;
  private readonly preferredCountries: Locator;
  private readonly preferredCountriesOptions: Locator;
  private readonly preferredInstitutionType: Locator;
  private readonly certificationDetails: Locator;
  private readonly uploadFile: Locator;
  private readonly submitButton: Locator;

  // navigation to profile page
  public readonly dashboardPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://authorized-partner.vercel.app/";

    // Get started with policy terms and condition

    this.getStartedButton = this.page.getByRole("link", {
      name: "Get Started",
    });
    this.policyCheckBox = this.page.locator('button[role="checkbox"]');

    this.contiuneButton = this.page.getByRole("button", { name: "Continue" });

    // Set up your account

    this.firstName = this.page.getByRole("textbox", { name: "First Name" });
    this.lastName = this.page.getByRole("textbox", { name: "Last Name" });
    this.emailField = this.page.getByRole("textbox", { name: "Email Address" });
    this.phoneNumber = this.page.getByRole("textbox", { name: "Phone Number" });
    this.passwordSelector = this.page.locator('input[name="password"]');
    this.confirmPassword = this.page.locator('input[name="confirmPassword"]');
    this.nextButtonSelector = this.page.getByRole("button", { name: "Next" });

    // One time code verification

    this.codeVerification = this.page.locator(
      'input[autocomplete="one-time-code"]',
    );

    //Agency Details

    this.agencyName = this.page.getByPlaceholder("Enter Agency Name");
    this.agencyRole = this.page.getByRole("textbox", {
      name: "Role in Agency",
    });
    this.agencyEmail = this.page.locator('input[name="agency_email"]');
    this.agencyWebsite = this.page.getByRole("textbox", { name: "Website" });
    this.agencyAddress = this.page.locator('input[name="agency_address"]');
    this.regionOfOperation = this.page.locator(
      "text=Select Your Region of Operation",
    );
    this.locationOptions = this.page.locator(
      'div[role="dialog"] span:text-is("Nepal")',
    );
    this.nextSubmitButton = this.page.getByRole("button", {
      name: "Next",
    });

    //Professional Details

    this.yearsOfExperience = this.page.getByRole("combobox", {
      name: "Years of Experience",
    });
    page.locator('input[type="file"]');
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

    // Business Details and Preferences

    this.businessRegistrationNum = this.page.getByRole("textbox", {
      name: "Business Registration Number",
    });
    this.preferredCountries = this.page.getByRole("combobox", {
      name: "Preferred Countries",
    });
    this.preferredCountriesOptions = this.page.getByRole("dialog");
    this.preferredInstitutionType = this.page.getByRole("checkbox", {
      name: "Universities",
    });
    this.certificationDetails = this.page.getByRole("textbox", {
      name: "Certification Details (Optional)",
    });
    this.uploadFile = this.page.locator('input[type="file"]');
    this.submitButton = this.page.getByRole("button", { name: "Submit" });

    // dasboard navigation

    this.dashboardPage = this.page.getByAltText("Logo");
  }

  async navigateToLandingPage(): Promise<void> {
    await this.page.goto(`${this.baseUrl}`);
    await this.getStartedButton.click();
    await this.policyCheckBox.click();
    await this.contiuneButton.click();
  }

  async enterUserDetails(dataTable: DataTable): Promise<void> {
    const user = dataTable.hashes()[0];

    await this.firstName.fill(user.firstname);
    await this.lastName.fill(user.lastName);
    await this.emailField.fill(user.Email);
    await this.phoneNumber.fill(user.phoneNumber);
    await this.passwordSelector.fill(user.password);
    await this.confirmPassword.fill(user.confirmPassword);

    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.nextButtonSelector.click(),
    ]);
  }

  async oneTimeCodeVerification(): Promise<void> {
    await this.codeVerification.click();
    await this.page.keyboard.type("");
    await this.page.keyboard.press("Enter");
  }

  async enterAgencyDetails(dataTable: DataTable) {
    const agency = dataTable.hashes()[0];

    await this.agencyName.fill(agency.agencyName);
    await this.agencyRole.fill(agency.Role);
    await this.agencyEmail.fill(agency.agencyEmail);
    await this.agencyWebsite.fill(agency.website);
    await this.agencyAddress.fill(agency.address);
    await this.regionOfOperation.click();
    await this.locationOptions.click();
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.nextSubmitButton.click(),
    ]);
  }
  async enterExperienceDetails(dataTable: DataTable) {
    const exp = dataTable.hashes()[0];

    await this.yearsOfExperience.fill(exp.yearsOfExperience);
    await this.recuritedStudentNo.fill(exp.numberOfStudents);
    await this.focusArea.fill(exp.focusArea);
    await this.successMetrics.fill(exp.successMetrics);
    await this.careerCounselingCheckbox.click();
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.experienceNextBtn,
    ]);
  }
  async enterBusinessDetails(dataTable: DataTable) {
    const filePath = path.resolve(
      __dirname,
      "../sample-file-upload/sample-file.pdf",
    );
    const biz = dataTable.hashes()[0];

    await this.businessRegistrationNum.fill(biz.RegistrationNum);
    await this.preferredCountries.click();
    await this.preferredCountriesOptions
      .filter({ hasText: "Australia" })
      .click();
    await this.preferredInstitutionType.click();
    await this.certificationDetails.click();
    await this.uploadFile.click();
    await this.page.setInputFiles('input[type="file"]', filePath);
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.submitButton,
    ]);
  }
}
