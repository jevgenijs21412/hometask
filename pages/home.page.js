import { BasePage } from "./base.page.js"

export class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.welcomeHeadingText = page.locator('body h1')
        this.registerSuccessText = page.locator('body p')
    }

    async assertWelcomeMessage(){
        await this.assertText(this.welcomeHeadingText, "Welcome to the Home Page!")
    }


    async assertSuccessRegistrationMsg(){
        await this.assertText(this.registerSuccessText, "You have registered successfully!")
    }

    async PressOnGoToRegistrationBtn(){
        await this.clickByText("Go to Registration")
    }
    
}
