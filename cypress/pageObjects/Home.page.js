import BasePage from "./Base.page";
class HomePage extends BasePage{
    
    static get url() {
        return "/inventory.html";
    }
   
    static get stackIcon(){
        return cy.get("#react-burger-menu-btn");
    }
    static get sideBar(){
        return cy.get(".bm-menu-wrap");
    }
    static get logoutButton(){
        return cy.get("#logout_sidebar_link");
    }
    static get addToCartBackpack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    static get addToCartBoltTshirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    static get addToCartOnesie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    }
    static get shoppingCartBadge(){
        return cy.get(".shopping_cart_badge");
    }
    static get removeBackpack(){
       return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
    static get itemNames(){
        return cy.get(".inventory_item_name");
    }
    static get specificItemTitle(){
        return cy.get(".inventory_details_name");
    }
    static get allAddToCart(){
        return cy.get('.btn_inventory');
    }
    static get shoppingCart(){
        return cy.get(".shopping_cart_link");
    }
}  

export default HomePage;