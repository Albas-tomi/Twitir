/* eslint-disable linebreak-style */
/* eslint-disable max-len */
// *   - should display login page correctly
// *   - should display alert when username is empty
// *   - should display alert when password is empty
// *   - should display alert when username and password are wrong
// *   - should display homepage when username and password are correct
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should display login page correctly', () => {
    // cek elemen yang terdapat
    cy.get('input[placeholder="Email Address"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });
  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Masuk$/).click();

    // Verifikasi
    cy.on('Window:alert', (str) => {
      expect(str).to.equal('"id" is not allowed to be empty');
    });
  });
  it('should display alert when password is empty', () => {
    // isi email
    cy.get('input[placeholder="Email Address"').type('hay@gmail.com');
    // klik login
    cy.get('button').contains(/^Masuk$/).click();
    // verifikasi
    cy.on('Window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    // isi email
    cy.get('input[placeholder="Email Address"]').type('hay@gmail.com');
    // isi password salah
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // klik login
    cy.get('button').contains(/^Masuk$/).click();

    // verifikasi
    cy.on('Window:alert', (str) => {
      expect(str).to.equal('Email or Password is wrong');
    });
  });
  // Halaman muatHome
  // it('should display homepage when email and password are correct', () => {
  //   // isi email
  //   cy.get('input[placeholder="Email Address"]').type('hay@gmail.com');
  //   // isi password
  //   cy.get('input[placeholder="Password"]').type('passwordkunih');

  //   // klik login
  //   cy.get('button').contains(/^Masuk$/).click();
  //   // // Verifikasi
  //   cy.get('Header').should('be.visible');
  // });
});
