/* Book Section */
const book_section = document.querySelector("#books");

/* Books */
const hp = document.querySelector("#hp");
const msk = document.querySelector("#msk");
const zoo = document.querySelector("#zoo");
const mr = document.querySelector("#mr");
const o = document.querySelector("#o");

/* Book Prices */
const hp_price = document.querySelector("#hp_price");
const msk_price = document.querySelector("#msk_price");
const zoo_price = document.querySelector("#zoo_price");
const mr_price = document.querySelector("#mr_price");
const o_price = document.querySelector("#o_price");

/* Checkout Button */
const checkout = document.querySelector("#checkout_button");

/* Total Section */
const total_section = document.querySelector("#cost-info");

/* Subtotal Section */
const subtotal = document.querySelector("#subtotal");

hp.addEventListener("click", function() {
    hp.style.display = "none";
    const hp_subtotal = hp_price.innerHTML;
    console.log(hp_subtotal);
});

msk.addEventListener("click", function() {
    msk.style.display = "none";
    console.log(msk_price.innerHTML);
});

zoo.addEventListener("click", function() {
    zoo.style.display = "none";
    console.log(zoo_price.innerHTML);
});

mr.addEventListener("click", function() {
    mr.style.display = "none";
    console.log(mr_price.innerHTML);
});

o.addEventListener("click", function() {
    o.style.display = "none";
    console.log(o_price.innerHTML);
});

checkout.addEventListener("click", function() {
    book_section.innerHTML = "<h2>Thank You For Your Purchase<br>View Your Receipt Below!</h2>";
    if (hp.style.display === "none") {
        checkout.style.display = "none";
        const hp_total = document.createElement("p");
        hp_total.setAttribute("id", "hp_total_cost");
        total_section.appendChild(hp_total);
        hp_total.innerHTML = "Harry Potter - " + hp_price.innerHTML;
    }
});


checkout.addEventListener("click", function() {
    book_section.innerHTML = "<h2>Thank You For Your Purchase<br>View Your Receipt Below!</h2>";
    if (msk.style.display === "none") {
        checkout.style.display = "none";
        const msk_total = document.createElement("p");
        msk_total.setAttribute("id", "msk_total_cost");
        total_section.append(msk_total);
        msk_total.innerHTML = "My Sister's Keeper - " + msk_price.innerHTML;
    }
});

checkout.addEventListener("click", function() {
    book_section.innerHTML = "<h2>Thank You For Your Purchase<br>View Your Receipt Below!</h2>";
    if (zoo.style.display === "none") {
        checkout.style.display = "none";
        const zoo_total = document.createElement("p");
        zoo_total.setAttribute("id", "zoo_total_cost");
        total_section.append(zoo_total);
        zoo_total.innerHTML = "Zoo - " + zoo_price.innerHTML;
    }
});

checkout.addEventListener("click", function() {
    book_section.innerHTML = "<h2>Thank You For Your Purchase<br>View Your Receipt Below!</h2>";
    if (mr.style.display === "none") {
        checkout.style.display = "none";
        const mr_total = document.createElement("p");
        mr_total.setAttribute("id", "zoo_total_cost");
        total_section.append(mr_total);
        mr_total.innerHTML = "Maze Runner - " + mr_price.innerHTML;
    }
});

checkout.addEventListener("click", function() {
    book_section.innerHTML = "<h2>Thank You For Your Purchase<br>View Your Receipt Below!</h2>";
    if (o.style.display === "none") {
        checkout.style.display = "none";
        const o_total = document.createElement("p");
        o_total.setAttribute("id", "o_total_cost");
        total_section.append(o_total);
        o_total.innerHTML = "Olympus - " + o_price.innerHTML;
    }
});

checkout.addEventListener("click", function() {
    if (total_section.childElementCount === 0) {
        const sub_total_zero = document.createElement("p");
        sub_total_zero.setAttribute("id", "zero_subtotal");
        subtotal.appendChild(sub_total_zero);
        sub_total_zero.innerHTML = "Subtotal $0";
    }
})











