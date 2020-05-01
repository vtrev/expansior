document.addEventListener('DOMContentLoaded', function () {

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
    //carousel
})


// Handlebars compilation for the partners caourosel
let generateAccounts = function (accounts) {
    var accountsElement = document.getElementById("cards");
    var accountsTemplateSource = document.getElementById("cards-template").innerHTML;
    var accountsTemplate = Handlebars.compile(accountsTemplateSource);
    var accountsHTML = accountsTemplate(accounts);
    accountsElement.innerHTML = accountsHTML;
};


let accounts = [{
    account: "Floe",
    price: "100"
}, {
    account: "Glaze",
    price: "300"
}, {
    account: "Aster",
    price: "500"
}, {
    account: "Jasper",
    price: "800"
}, {
    account: "Ablasia",
    price: "1500"
}, {
    account: "Enblast",
    price: "3000"
}, {
    account: "Sirius",
    price: "5000"
}]


generateAccounts({
    accounts
});