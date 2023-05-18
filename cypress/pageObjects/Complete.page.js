import BasePage from "./Base.page";
class CompletePage extends BasePage{

    static get url() {
        return "/checkout-complete.html";
    }
    static get thankYouMsg(){
        return cy.get(".complete-header");
    }
}
export default CompletePage;