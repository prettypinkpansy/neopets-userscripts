// ==UserScript==
// @name         Neopets - Skateboards For All
// @description  A skateboard for the deprived (e.g. 8-bit, baby). Does not work with Battledome But With A Cool Car.
// @version      1.0
// @author       prettypinkpansy
// @match        *://*.neopets.com/dome/arena.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Set default car images
let backImage = "url(\"//images.neopets.com/cp/items/data/000/000/694/694391/aisha-item_right_hand_back.png?v=23a098e180\")"

let carBack = document.createElement('div');
carBack.style="position: absolute; display: block; z-index:2; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 25px 67px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + backImage + ";";

// Insert the divs around the pet in the Battledome
let petimg = document.getElementById("p1");
petimg.prepend(carBack);
