import BasePage from "./Base.page";
class CheckoutStepOne extends BasePage{

    static get url() {
        return "/checkout-step-one.html";
    }
    static get firstName(){
        return cy.get('[data-test="firstName"]');
    }
    static get lastName(){
        return cy.get('[data-test="lastName"]');
    }
    static get postalCode(){
        return cy.get('[data-test="postalCode"]');
    }
    static get continueButton(){
        return cy.get('[data-test="continue"]');
    }

}
export default CheckoutStepOne;