// import cy from 'cypress';
import 'cypress-file-upload';

describe('login', () => {

  beforeEach(() => {
    cy.clearLocalStorage();
  })

  it('should successfully log into our app', () => {

    cy.visit('http://localhost:3000')
    cy.contains('Upload Pet')
    .click()
    // .get('#username')
    // .type('test@example.com')
    // .get('#password')
    // .type('easy123Z{enter}')
    .fixture('300.jpg')
    .then(fileContent => {
      cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: '300.jpg',
          mimeType: 'image/jpg'
      });
  }).get('div[class="pictures-button"]')
  .click()

    // get('input[type="file"]')
    // .click()
    // ??
    .get('input[placeholder="more details..."]')
    .type('These are my details')
    .get('input[placeholder="where?"]')
    .type('This is wehere we at')
    .get('div[class="map-container"]')
    .click()
    .get('button[type="submit"]')
    .click()
    .get('div[class="login-logo"]')
    .click()
  });
});


// check or click login
// login form
// pass fake user/pword
// submit (password)

// check number of pets in list
// click upload
