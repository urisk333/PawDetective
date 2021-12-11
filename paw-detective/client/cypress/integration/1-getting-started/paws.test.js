import 'cypress-file-upload';

describe('login', () => {

  beforeEach(() => {
    cy.clearLocalStorage();
  })

  it('should successfully log into our app', () => {

    cy.visit('http://localhost:3000')
    cy.contains('Upload Pet')
    .click()
    .fixture('300.jpg')
    .then(fileContent => {
      cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: '300.jpg',
          mimeType: 'image/jpg'
      });
  }).get('div[class="pictures-button"]')
  .click()
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
