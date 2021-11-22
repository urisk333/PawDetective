import cy from 'cypress';

describe('paw detective app todo', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000')
  });

  it('sucessfully logs in and adds a new pet', () => {

    cy();

    expect(true).toBe(true);

  });


})

// check or click login
// login form
// pass fake user/pword
// submit (password)

// check number of pets in list
// click upload

