describe('Actions no cypress', () => { 
    it('Deve preencher o email', () => { 
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('.action-email').type('test@email.com')
        cy.get('.action-email').should('have.value', 'test@email.com')

        cy.get('.action-email').clear()

        cy.get('.action-email').type('test@email.com', { delay: 100 })
        cy.get('.action-email').should('have.value', 'test@email.com')
    }) 

    it('Deve selecionar checkbox', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('.action-checkboxes [type="checkbox"]').first().not('[disabled]').check()
        cy.get('.action-checkboxes [type="checkbox"]').first().not('[disabled]').should('be.checked')
    })
}) 