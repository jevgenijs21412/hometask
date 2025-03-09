# Registration Form Testing & Improvement Tasks

## Task 1: Manual Test Cases

### Test Case 1: Successful Registration with Valid Data

- **Test Case ID**: TC_0001
- **Title**: Successful Registration with Valid Data
- **Description**: Verify that a user can register successfully using valid inputs.

#### Preconditions:
- The user is on the Registration page (`/register`).

#### Test Data:
| Field             | Value               |
|-------------------|---------------------|
| Username          | TestUser123         |
| Email             | test@example.com    |
| Password          | Password1231        |
| Confirm Pass      | Password1231        |

#### Test Steps & Expected Result:

| Test Step                                             | Expected Result                                                                 |
|-------------------------------------------------------|---------------------------------------------------------------------------------|
| Navigate to the Registration page.                   | Registration form visible                                                      |
| Enter "TestUser123" in the Username field.            | "TestUser123" entered                                                           |
| Enter "test@example.com" in the Email field.          | "test@example.com" entered                                                      |
| Enter "Password1231" in the Password field.           | "Password1231" entered                                                          |
| Enter "Password1231" in the Confirm Password field.   | "Password1231" entered                                                          |
| Click the Submit button.                              | The user is redirected to the Home Page.                                         |
|                                                       | Welcome message displayed: "Welcome to the Home Page!"                         |
|                                                       | A success message is displayed: "You have registered successfully!"            |
|                                                       | "Go To Registration" button is visible                                          |
| Press on "Go To Registration"                         | User returned to Registration Page                                             |

---

### Test Case 2: Validation Error for Invalid Email Format

- **Test Case ID**: TC_0002
- **Title**: Validation Error for Invalid Email Format
- **Description**: Verify that an error message appears when the email format is incorrect.

#### Preconditions:
- The user is on the Registration page (`/register`).

#### Test Data:
| Field             | Value           |
|-------------------|-----------------|
| Username          | TestUser123     |
| Email             | test.com        |
| Password          | Password1231    |
| Confirm Pass      | Password1231    |

#### Test Steps & Expected Result:

| Test Step                                             | Expected Result                                                              |
|-------------------------------------------------------|-------------------------------------------------------------------------------|
| Navigate to the Registration page.                   | Registration form visible                                                     |
| Enter "TestUser123" in the Username field.            | "TestUser123" entered                                                          |
| Enter "test.com" in the Email field.                  | "test.com" entered                                                            |
| Enter "Password1231" in the Password field.           | "Password1231" entered                                                         |
| Enter "Password1231" in the Confirm Password field.   | "Password1231" entered                                                         |
| Click the Submit button.                              | An error message pops up (e.g., "Email should contain @")                     |
|                                                       | The form does not submit.                                                     |

---

### Test Case 3: Password and Confirm Password Mismatch

- **Test Case ID**: TC_0003
- **Title**: Password and Confirm Password Mismatch
- **Description**: Verify that an error appears when the Confirm Password field does not match the Password field.

#### Preconditions:
- The user is on the Registration page (`/register`).

#### Test Data:
| Field             | Value            |
|-------------------|------------------|
| Username          | TestUser123      |
| Email             | test@test.com    |
| Password          | Password123     |
| Confirm Pass      | Password456     |

#### Test Steps & Expected Result:

| Test Step                                             | Expected Result                                                              |
|-------------------------------------------------------|-------------------------------------------------------------------------------|
| Navigate to the Registration page.                   | Registration form visible                                                     |
| Enter "TestUser123" in the Username field.            | "TestUser123" entered                                                          |
| Enter "test@test.com" in the Email field.             | "test@test.com" entered                                                        |
| Enter "Password1231" in the Password field.           | "Password1231" entered                                                         |
| Enter "Password4561" in the Confirm Password field.   | "Password4561" entered                                                         |
| Click the Submit button.                              | An error message appears under the Confirm Password field: "Passwords do not match." |
|                                                       | The Confirm Password field is highlighted in red.                             |
|                                                       | The form does not submit.                                                     |

---

## Task 2: Bug Reports

### Bug 1: Registration Form Allows Submission with Same Email

- **Bug ID**: BUG_0001
- **Description**: The registration form allows users to submit the form even when the email is already registered.
- **Priority**: High

#### Preconditions:
- The user is on the Registration page (`/register`).
- The user has already registered with the email `test@test.com`.

#### Steps to Reproduce:
1. Navigate to the Registration page.
2. Enter a valid Username.
3. Enter an already registered email (`test@test.com`).
4. Enter a valid Password.
5. Confirm password.
6. Click the Submit button.

#### Actual Result:
- The form submits successfully, and the user is redirected to the Home Page.

#### Expected Result:
- There is no exact requirement about registration. But I assume that registration should be valid once for one email.

---

### Bug 2: Registration Form Password Placeholder Allows Special Characters

- **Bug ID**: BUG_0002
- **Description**: The registration form allows users to enter special character symbols.
- **Priority**: High

#### Preconditions:
- The user is on the Registration page (`/register`).

#### Steps to Reproduce:
1. Navigate to the Registration page.
2. Enter a valid Username.
3. Enter a valid email.
4. Enter a Password with special characters (e.g., `$`, `.`, min 8 symbols).
5. Confirm password.
6. Click the Submit button.

#### Actual Result:
- The form submits successfully, and the user is redirected to the Home Page without validation.

#### Expected Result:
- The form should not submit and should display an error message: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."
Based on requirement - required, minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number. Special characters not mentioned.

---

### Bug 3: Cursor Blinking on Label When Clicked Instead of Focusing on Input Field

- **Bug ID**: BUG_0003
- **Description**: When the user clicks on the label (e.g., Username) or outside input, the text cursor blinks inside the label itself.
- **Priority**: High

#### Preconditions:
- The user is on the Registration page (`/register`).

#### Steps to Reproduce:
1. Navigate to the Registration page.
2. Press on any label (e.g., Username).

#### Actual Result:
- Blinking cursor appears inside the label.
- ![image](https://github.com/user-attachments/assets/9a5ab492-e53a-4f2d-8cf3-bdc69e0038da)
- ![image](https://github.com/user-attachments/assets/3b8736e6-e830-4db0-b186-bb80956271f1)

#### Expected Result:
- Blinking cursor should appear inside the corresponding text input field.

#### **Note**:

Set priority to High as:

User Experience Impact: Although the user can input text into the field, the blinking cursor in the label is visually confusing and goes against common form interaction patterns. This could confuse new users and cause unnecessary frustration.

UI Consistency: Labels should not behave as interactive elements, and this issue creates inconsistency in the UI design. It can cause the user to question whether the label is part of the input or not.

Form Functionality: While the form technically works, the improper behavior of the cursor creates a non-intuitive experience, making the user interaction less seamless.

Visibility: Since this bug occurs right when the user interacts with the form, it’s highly visible and could affect first impressions of the webapp

---

## Task 3: Repository

**Information**: In current repository

---

## Task 4: UX/UI Improvements

1. Implement real-time validation of each field to provide immediate feedback for the user.
2. Implement a password strength indicator so the user will be able to see if their password is weak or strong as they type it in.
3. Provide icon tips close to each field with requirements.

---

## Task 5: Requirement Improvements

1. Connect a database to record registered users.
2. Specify whether the username should be unique and display a message when the username is already taken.
3. Add email confirmation to avoid typos.
4. Include an "eye" icon to enable visibility of the password.
5. Create detailed error messages that indicate what the user missed in each field.

---

## Task 6: Additional Testing

1. **Cross Browser Testing**: Test the registration form on multiple browsers (e.g., Chrome, Mozilla, Safari).
2. **Multiple Device Testing**: Test the registration form on multiple devices (e.g., Desktop, Android, iOS).
3. **Security Testing**: Test for SQL and XSS injections.
4. **Load Testing**: Perform performance testing to handle high request loads.

--- 

