Feature: Sign Up
As a user
I want to sign up into the website
So that I can use the website

Scenario: Sign up
Given The user is in the sign up page

When The user enters the given details for user details:
 | firstname | lastName | Email                 | phoneNumber | password   | confirmPassword |
 | Madhavi   | Paudel   | papoxa9232@hotkev.com | 9823180082  | Hellow@123 | Hellow@123      |

And the user enters one time verification code 

And The user enters the agency details:
 | agencyName  | Role    | agencyEmail             | website         | address | regionOfOperation |
 | KanyaCampus | Student | info@kanyacampus.edu.np | kanyacampus.com | Pokhara | Nepal             | 

And The user enters experience details: 
 |yearsOfExperience | numberOfStudents | focusArea  | successMetrics | serviceProvided       |
 | 10+ years        | 300              | Management | 80             | Admission Application |

And The user enters following business details:
  |RegistrationNum | PreferredCountry | PreferredInstitution | certificationDetails |
  |01234578        | Australia        | Universities         | hello this is test   | 

Then The user logs into the dashboard