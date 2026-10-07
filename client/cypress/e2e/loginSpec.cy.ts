import LoginPage from '../e2e/pages/loginPage'

const loginPage = new LoginPage()

describe('Login valido', () => {
  it.only('Deve logar com sucesso', () => {
    loginPage.accessHomePage()
    loginPage.login('admin@test.com', 'test123')
    cy.contains('[data-cy="name"]', 'Cyonic').should('exist')
  })
})

describe('Email e senha nao cadastrados', () => {
  it('Deve exibir mensagem de erro ao tentar logar com usuario e senha invalidos', () => {
    loginPage.accessHomePage()
    loginPage.login('teste@test.com', '123456')
    loginPage.wrongError()
  })
})

describe('Email cadastrado e senha incorreta', () => {
  it('Deve exibir mensagem de erro ao tentar logar com apenas a senha invalida', () => {
    loginPage.accessHomePage()
    loginPage.login('admin@test.com', '123456')
    loginPage.wrongError()
  })
})

describe('Email nao cadastrado e senha correta',() => {
  it('Deve exibir mensagem de erro ao tentar logar com apenas o email nao cadastrado', () => {
    loginPage.accessHomePage()
    loginPage.login('teste@test.com', 'test123')
    loginPage.wrongError()
  })
})

describe('Email invalido e senha correta', () =>{
  it('Deve exibir mensagem de erro no campo email ao tentar logar com email invalido', () => {
    loginPage.accessHomePage()
    loginPage.login('teste', 'test123')
    loginPage.wrongEmailError()
  })
})