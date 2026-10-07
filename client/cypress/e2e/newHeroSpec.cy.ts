import LoginPage from '../e2e/pages/loginPage'
import NewHeroPage from '../e2e/pages/newHero'

const loginPage = new LoginPage()
const newHero = new NewHeroPage()

describe('Cadastro de um novo heroi',() => {
    it('Deve ter sucesso no novo cadastro de um heroi', () =>{
        loginPage.accessHomePage()
        loginPage.login('admin@test.com', 'test123')
        newHero.accessNewHeroPage()
        newHero.myNewHero('Ray', '10', '1000','97', 'Super Speed')
        newHero.confirmNewHero()
    })
})