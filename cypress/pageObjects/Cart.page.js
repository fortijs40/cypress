import BasePage from "./Base.page";
class CartPage extends BasePage{

    static get url() {
        return "/cart.html";
    }

    static get checkout(){
        return cy.get('[data-test="checkout"]');
    }
    static get itemNames(){
        return cy.get(".inventory_item_name");
    }
    static get cartQuantity(){
        return cy.get(".cart_quantity");
    }
}
export default CartPage;