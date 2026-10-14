import LoginPage from '../e2e/pages/loginPage'
import NewHeroPage from '../e2e/pages/newHero'

const loginPage = new LoginPage()
const newHero = new NewHeroPage()

describe('Cadastro de um novo heroi',() => {
    it('Deve ter sucesso no novo cadastro de um heroi', () =>{
        loginPage.accessHomePage()
        loginPage.login('admin@test.com', 'test123')
        newHero.accessNewHeroPage()
        newHero.newHeroName('Ray')
        newHero.newHeroPrice('10')
        newHero.newHeroFans('1000')
        newHero.newHeroSaves('97')
        newHero.myNewHeroPowers('Super Speed')
        newHero.confirmNewHero()
        
    })
})

describe('Cadastro de um novo heroi',() => {
    it.only('Deve ter sucesso no novo cadastro de um heroi', () =>{
        loginPage.accessHomePage()
        loginPage.login('admin@test.com', 'test123')
        newHero.accessNewHeroPage()
        newHero.newHeroName('Ray')
        newHero.newHeroFans('1000')
        newHero.myNewHeroPowers('Super Speed')
        newHero.confirmNewHero()
        newHero.wrongMessageFields('saves')
        newHero.wrongMessageFields('price')
        
        
    })
})