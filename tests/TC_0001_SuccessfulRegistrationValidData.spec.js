import { test } from '@playwright/test'
import { RegisterPage } from '../pages/register.page'
import { HomePage } from '../pages/home.page'

test('TC_0001: Successful Registration with Valid Data', async ({ page }) => {
    // Instantiate page objects
    const registerPage = new RegisterPage(page)
    const homePage = new HomePage(page)

    // Pre-condition:
    await homePage.navigate('https://auth-home-task.vercel.app/register')

    //  Fill the form
    const credentials = {
        username: "TestUser123",
        email: "test@example.com",
        password: "Password1231"
    }

    await registerPage.register(credentials)

    // Assert SuccessMessage
    await homePage.assertWelcomeMessage()

    // Press on Go To Registration Button
    await homePage.PressOnGoToRegistrationBtn()

    // Assert User on Registration page
    await registerPage.assertRegisterPage()
    await registerPage.assertRegistrationFormLabel()

});