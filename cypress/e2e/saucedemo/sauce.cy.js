//const { default: LoginPage } = require("../../pageObjects/Login.page");
import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/Home.page";
import CartPage from "../../pageObjects/Cart.page";
import CheckoutStepOne from "../../pageObjects/CheckoutStepOne.page";
import CheckoutStepTwo from "../../pageObjects/CheckoutStepTwo.page";
import CompletePage from "../../pageObjects/Complete.page";
describe("Saucedemo", () => {
    beforeEach(() => {
        LoginPage.visit();
    });
  
    it("1. Login scenario - Positive case", () => {
        //logins
       LoginPage.usernameField.type('standard_user');
       LoginPage.passwordField.type('secret_sauce');
       //checks if login button is visible
       LoginPage.loginButton.should("be.visible");
       LoginPage.loginButton.click();
       //login button shouldn't be visible anymore
       LoginPage.loginButton.should("not.exist");
    });

    it("2. Login scenarion - Negative case", () =>{
        //login uses incorrect password
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("xxxx");
        LoginPage.loginButton.click();
        //there should appear error : Epic sadface: Username and password do not match any user in this service
        LoginPage.errorMessage.should(
            "have.text",
            "Epic sadface: Username and password do not match any user in this service"
        );
    });
    
    it("3. Logout scenario", () => {
        //login in
        LoginPage.usernameField.type('standard_user');
        LoginPage.passwordField.type('secret_sauce');
        LoginPage.loginButton.click();
        //checks if sidebar is hidden
        HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "true");
        //presses stack icon
        HomePage.stackIcon.click();
        //checks if sidebar is now visible and no longer hidden
        HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
        //checks if logout button is visible
        HomePage.logoutButton.should("be.visible");
        HomePage.logoutButton.click();
        //checks if now login button is visible at login page
        LoginPage.loginButton.should("be.visible");
    });

    it("4. Add items to cart scenario", () => {
        //login
        LoginPage.usernameField.type('standard_user');
        LoginPage.passwordField.type('secret_sauce');
        LoginPage.loginButton.click();
        //add backpack, shirt and onsie to cart
        HomePage.addToCartBackpack.click();
        HomePage.addToCartBoltTshirt.click();
        HomePage.addToCartOnesie.click();
        //checks if shopping cart badge is visible and has 3 items in it
        HomePage.shoppingCartBadge.should("be.visible");
        HomePage.shoppingCartBadge.should("have.text","3");
        
    });

    it("5. Add item, remove item scenario", () =>{
        //login
        LoginPage.logIntoPage("standard_user","secret_sauce");
        //add backpack to cart and check if badge is 1
        HomePage.addToCartBackpack.click();
        HomePage.shoppingCartBadge.should("have.text","1");
        //remove backpack from cart and check if badge no longer exists
        HomePage.removeBackpack.click();
        HomePage.shoppingCartBadge.should("not.exist");
    });
    it("6. Open specific item, validate titlescenario", () =>{
        //login
        LoginPage.logIntoPage("standard_user","secret_sauce");
        //checks if sauce labs backpack from items array exists and opens it up
        HomePage.itemNames.contains("Sauce Labs Backpack").click();
        //check if correct item has been opened
        HomePage.specificItemTitle.should("have.text","Sauce Labs Backpack");
    });
    it("7. Full buy scenario", () =>{
        //login
        LoginPage.logIntoPage("standard_user","secret_sauce");
        //add to cart Backpack and bolt Tshirt
        HomePage.addToCartBackpack.click();
        HomePage.addToCartBoltTshirt.click();
        //opens shopping cart
        HomePage.shoppingCart.click();
        //checks if shopping cart contains the backpack and tshirt
        CartPage.itemNames.should("contain","Sauce Labs Backpack").and("contain","Sauce Labs Bolt T-Shirt");
        //validate that we see two items in cart
        CartPage.cartQuantity.should("have.length", 2);
        //proceeds to check out
        CartPage.checkout.click();
        //set firstname, lastname, postalcode
        CheckoutStepOne.firstName.type("Ralfs");
        CheckoutStepOne.lastName.type("Laipins");
        CheckoutStepOne.postalCode.type("LV-4101");
        //click continue
        CheckoutStepOne.continueButton.click();
        //checks if total is 49.66
        CheckoutStepTwo.summaryTotal.should('contain', '49.66');
        //cicks finish
        CheckoutStepTwo.finishButton.click();
        //validates that this text appears: Thank you for your order! 
        CompletePage.thankYouMsg.should('have.text','Thank you for your order!').and("be.visible");
    });


});