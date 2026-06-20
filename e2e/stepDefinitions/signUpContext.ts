import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "playwright/test";

import { CustomWorld } from "../support/CustomWorld";
import { SignUpPage } from "../pageObject/SignUpPage";

Given("The user is in the sign up page", async function (this: CustomWorld) {
  console.log("okay");
});

When(
  "The user enters the given details for user details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    console.log("okay");
  },
);
When(
  "The user enters the agency details",
  async function (this: CustomWorld, dataTable: DataTable) {
    console.log("okay");
  },
);
When(
  "The user enters experience details: ",
  async function (this: CustomWorld, dataTable: DataTable) {
    console.log("okay");
  },
);
When(
  "The user enters following business details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    console.log("okay");
  },
);

Then("The user logs into the dashboard", async function (this: CustomWorld) {
  console.log("okay");
});
