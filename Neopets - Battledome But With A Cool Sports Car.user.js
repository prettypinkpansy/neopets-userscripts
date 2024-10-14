// ==UserScript==
// @name         Neopets - Battledome But With A Cool Sports Car
// @description  Puts your Battledome pet in a car (the Usuki Dream Car to be exact, whether you have that item equipped or not). Purely cosmetic, but it's really funny to see your pet ram an opponent with a vehicle. Edit carColor to change the car's color. May not look good with short pets, e.g. Jubjubs.
// @version      1.0
// @author       prettypinkpansy
// @match        *://*.neopets.com/dome/arena.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// IMPORTANT!!!!
// IMPORTANT!!!!
// IMPORTANT!!!!

// TO THE USER: Please CHANGE THE FOLLOWING VARIABLE to "pink", "red", "blue", or "black" to change the color of the car based on your preference. Those are the only colors available. Don't change anything else!

let carColor = "red"

// IMPORTANT!!!!
// IMPORTANT!!!!
// IMPORTANT!!!!

// Set default car images
let frontImage = "url(\"//i.imgur.com/bJe4CFF.png\")"
let backImage = "url(\"//images.neopets.com/cp/items/data/000/000/648/648698/usuki-dream-car-item_background.png?v=a6bf497634\")"

// Change based on user preferences. The imgur urls are slight edits of the default usuki dream car to fix the car being cut off at the end.
if (carColor == "pink") {
    frontImage = "url(\"//i.imgur.com/bJe4CFF.png\")"
    backImage = "url(\"//images.neopets.com/cp/items/data/000/000/648/648698/usuki-dream-car-item_background.png?v=a6bf497634\")"
}

if (carColor == "red") {
    frontImage = "url(\"//i.imgur.com/qPRVut4.png\")"
    backImage = "url(\"//images.neopets.com/cp/items/data/000/000/672/672791/aisha-item_background.png?v=981632daab\")"
}

if (carColor == "blue") {
    frontImage = "url(\"//i.imgur.com/WY3pRdN.png\")"
    backImage = "url(\"//images.neopets.com/cp/items/data/000/000/672/672323/aisha-item_background.png?v=6f2c4dcd42\")"
}

if (carColor == "black") {
    frontImage = "url(\"//i.imgur.com/tRE0RkK.png\")"
    backImage = "url(\"//images.neopets.com/cp/items/data/000/000/672/672325/aisha-item_background.png?v=0c29f18162\")"
}

// Create divs for the front and back of the car to display
let carFront = document.createElement('div');
carFront.style="position: absolute; display: block; z-index:26; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 30px 67px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + frontImage + ";";

let carBack = document.createElement('div');
carBack.style="position: absolute; display: block; z-index:2; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 25px 67px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + backImage + ";";

// Insert the divs around the pet in the Battledome
let petimg = document.getElementById("p1");
petimg.prepend(carBack);
petimg.prepend(carFront);
