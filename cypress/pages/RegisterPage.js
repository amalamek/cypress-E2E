 class RegisterPage{




    WebLocators={

   firstName:'#input-firstname',
   lastname:'#input-lastname',
   email:'#input-email',
   telephone:'#input-telephone',
   password:'#input-password',
   passwordConfi:'#input-confirm',
   policyCheck:'input[type="Checkbox"]',
   continu:'.btn.btn-primary',



    }

    openUrl()
    {
        cy.visit(Cypress.env('URL'))
    }


    enterfirstName(FName)
    {

        cy.get(this.WebLocators.firstName).type(FName)
    }
    enterlastName(LName)
    {

        cy.get(this.WebLocators.lastname).type(LName)
    }
    enterEmail(Email)
    {

        cy.get(this.WebLocators.email).type(Email)
    }
    enterPhone(Phone)
    {

        cy.get(this.WebLocators.telephone).type(Phone)
    }

    enterPassword(Password)
    {

        cy.get(this.WebLocators.password).type(Password)
        cy.get(this.WebLocators.passwordConfi).type(Password)
    }

    selectCheck()
    {
cy.get(this.WebLocators.policyCheck).check()
       
    }

    continu()
    {
 cy.get(this.WebLocators.continu).click()

    }

}

export default RegisterPage;