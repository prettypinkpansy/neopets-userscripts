// ==UserScript==
// @name         Neopets - Lore Accurate Maraquan Battledome
// @description  Puts your Battledome pet in a fishbowl.
// @version      1.0
// @author       prettypinkpansy
// @match        *://*.neopets.com/dome/arena.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Set fishbowl images
let frontImage = "url(\"//i.imgur.com/cDDo3Mw.png\")"
let backImage = "url(\"//i.imgur.com/4nAI5Yc.png\")"

// Create divs for the front and back of the bowl to display
let carFront = document.createElement('div');
carFront.style="position: absolute; display: block; z-index:26; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 30px 67px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + frontImage + ";";

let carBack = document.createElement('div');
carBack.style="position: absolute; display: block; z-index:2; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 30px 67px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + backImage + ";";

// Insert the divs around the pet in the Battledome
let petimg = document.getElementById("p1");
petimg.prepend(carBack);
petimg.prepend(carFront);
