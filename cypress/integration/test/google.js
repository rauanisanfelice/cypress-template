/// <reference types="Cypress" />


describe ('My firts Test', function(){
    before(function () {
        cy.log('Iniciando o teste!!')
    })
    after(function() {
        cy.log('Teste finalizado com sucesso!!')
    })
    it('Acesse o site da Google', function(){
        cy.visit('https://www.google.com.br/')
    })
    it('Realizando uma busca', function(){
        cy.get('.gLFyf').type('Noticias de hoje')
        cy.get('.FPdoLc > center > .gNO89b').click()
    })
    it('Print Noticias', function(){
        cy.screenshot()
    })
})
