class NewHeroPage {

    selectorsList() {
        const selectorsList = {
            buttonNewHero: "a > .undefined",
            nameHeroField: "[name='name']",
            priceHeroField: "[name='price']",
            fansHeroField: "[name='fans']",
            saveHeroField: "[name='saves']",
            selectPowers: "[data-cy='powersSelect']",
            submitButton: "[novalidate='']"
        }
        return selectorsList
    }

    accessNewHeroPage() {
        cy.get(this.selectorsList().buttonNewHero).click()
    }

    myNewHero(name, price, fans, saves, powers) {
        cy.get(this.selectorsList().nameHeroField).type(name)
        cy.get(this.selectorsList().priceHeroField).type(price)
        cy.get(this.selectorsList().fansHeroField).type(fans)
        cy.get(this.selectorsList().saveHeroField).type(saves)
        cy.get(this.selectorsList().selectPowers).select(powers)
    }

    confirmNewHero() {
        cy.get(this.selectorsList().submitButton).contains('Submit').click()
    }


}

export default NewHeroPage