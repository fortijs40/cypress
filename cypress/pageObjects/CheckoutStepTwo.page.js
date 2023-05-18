import BasePage from "./Base.page";
class CheckoutStepTwo extends BasePage{

    static get url() {
        return "/checkout-step-two.html";
    }
    static get summaryTotal(){
        return cy.get('.summary_total_label');
    }
    static get finishButton(){
        return cy.get('[data-test="finish"]');
    }
}
export default CheckoutStepTwo;