import { BasePage } from "./base.page.js"

export class RegisterPage extends BasePage {
    constructor(page) {
        super(page)
        this.formLabel = page.locator('body h1')
        this.usernameInput = page.locator('[name="username"]')
        this.emailInput = page.locator('[name="email"]')
        this.passwordInput = page.locator('[name="password"]')
        this.confirmPasswordInput = page.locator('[name="confirmPassword"]')
        this.submitButton = page.locator('[type="submit"]')
    }

    async assertRegisterPage(){
        await this.assertUrlContains('/register')
    }

    async assertRegistrationFormLabel(){
        await this.assertText(this.formLabel, "Registration Form")
    }

    async register(credentials) {
        const { username, email, password } = credentials
        
        await this.assertRegistrationFormLabel()
        await this.usernameInput.fill(username)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.confirmPasswordInput.fill(password)
        await this.submitButton.click()
    }
}