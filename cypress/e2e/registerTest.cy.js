describe('TC01_ticketazo', () => {
  it('Registro Ticketazo', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser');
    cy.get('[data-cy="input-nombres"]').type("Federico");
    cy.get('[data-cy="input-apellido"]').type("Papadá");
    cy.get('[data-cy="input-dni"]').type("37000935")
    cy.get('[data-cy="input-telefono"]').type("549113131999");
    cy.get('[data-cy="select-provincia"]').click();
    cy.get('[data-cy="option-provincia-6"]').contains("Buenos Aires").click();
    cy.get('[data-cy="select-localidad"]').click()
    cy.get('[data-cy="select-localidad"]').type('Quilmes{enter}');
    cy.contains('dd').type('04');
    cy.contains('mm').type('08');
    cy.contains('aaaa').type('1992');
    cy.get('[data-cy="input-email"]').type("ffff@prueba.com.ar");
    cy.get('[data-cy="input-confirmar-email"]').type("ffff@prueba.com.ar");
    cy.get('[data-cy="input-password"]').type("Contraseña_1234");
    cy.get('[data-cy="input-repetir-password"]').type("Contraseña_1234");
    cy.get('[data-cy="btn-registrarse"]').click();

    cy.wait('2500');
  })
})