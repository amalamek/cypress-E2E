import RegisterPage from "../pages/RegisterPage"; // Assuming RegisterPage is the default export
import RegisterData from "../fixtures/RegisterData.json"; // Assuming RegisterData.json contains your test data

const registerObj = new RegisterPage(); // Instantiating RegisterPage properly

describe('automation test', () => {
  it('registation test', () => {
    registerObj.openUrl();
    registerObj.enterfirstName(RegisterData.firstName);
    registerObj.enterlastName(RegisterData.lastName);
    registerObj.enterPhone(RegisterData.telephone);
    registerObj.enterEmail(RegisterData.email);
    registerObj.enterPassword(RegisterData.password);
    registerObj.selectCheck();
    registerObj.continu();
  });
});
