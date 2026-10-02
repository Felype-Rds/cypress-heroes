import LoginPage from '../e2e/pages/loginPage'

const loginPage = new LoginPage()

describe('Login valido', () => {
  it('Deve logar com sucesso', () => {
    loginPage.accessHomePage()
    loginPage.login('admin@test.com', 'test123')

  })
})