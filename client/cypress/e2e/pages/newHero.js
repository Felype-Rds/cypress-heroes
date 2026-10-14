class NewHeroPage {

    selectorsList() {
        const selectorsList = {
            buttonNewHero: "a > .undefined",
            nameHeroField: "[name='name']",
            priceHeroField: "[name='price']",
            fansHeroField: "[name='fans']",
            saveHeroField: "[name='saves']",
            selectPowers: "[data-cy='powersSelect']",
            submitButton: "[novalidate='']",
            wrongNameHeroField: ":nth-child(1) > .text-red-500",
            wrongPriceHeroField: ":nth-child(2) > .text-red-500",
            wrongFansHeroField: ":nth-child(3) > .text-red-500",
            wrongSavesHeroField: ":nth-child(4) > .text-red-500",
            wrongPowersHeroField: ":nth-child(5) > .text-red-500"
        }
        return selectorsList
    }

    accessNewHeroPage() {
        cy.get(this.selectorsList().buttonNewHero).click()
    }

    newHeroName(name){
        cy.get(this.selectorsList().nameHeroField).type(name)
    }

    newHeroPrice(price){
        cy.get(this.selectorsList().priceHeroField).type(price)
    }

    newHeroFans(fans){
        cy.get(this.selectorsList().fansHeroField).type(fans)
    }

    newHeroSaves(saves){
        cy.get(this.selectorsList().saveHeroField).type(saves)
    }

    myNewHeroPowers(powers) {
        cy.get(this.selectorsList().selectPowers).select(powers)
    }

    confirmNewHero() {
        cy.get(this.selectorsList().submitButton).contains('Submit').click()
    }

    wrongMessageFields(field) {
        const errors = {
            name: {
                selector: this.selectorsList().wrongNameHeroField,
                message: 'Name is required'
            },
            price: {
                selector: this.selectorsList().wrongPriceHeroField,
                message: 'Price is required'
            },
            fans: {
                selector: this.selectorsList().wrongFansHeroField,
                message: 'Fans is required'
            },
            saves: {
                selector: this.selectorsList().wrongSavesHeroField,
                message: 'Saves is required'
            },
            powers: {
                selector: this.selectorsList().wrongPowersHeroField,
                message: 'Powers is required'
            }
        }
        cy.get(errors[field].selector).should('contain', errors[field].message)
    }

}
export default NewHeroPage