import { expect} from '@playwright/test'

export class BasePage {
    constructor(page) {
        this.page = page
    }

    async navigate(url) {
        await this.page.goto(url)
    }
    async assertText(locator, text){
         await expect(locator).toHaveText(text)
    }
    async clickByText(text) {
        const element = await this.page.locator(`text="${text}"`)
        await element.click()
    }
    async assertUrlContains(expectedText) {
        const currentUrl = await this.page.url()
        expect(currentUrl).toContain(expectedText)
    }
}