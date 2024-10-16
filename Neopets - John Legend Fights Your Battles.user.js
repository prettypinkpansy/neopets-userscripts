// ==UserScript==
// @name         Neopets - John Legend Fights Your Battles
// @description  Where's that man been? What's he doing for Neopets? Finally answer that question and have John Legend do your fights so your Battledome pet doesn't have to. (Warning: John Legend's stats are the same as your Battledome pet and damage done to John Legend will still be done to your Battledome pet. Taking Battledome damage was not in John Legend's contract.)
// @version      1.0
// @author       prettypinkpansy
// @match        *://*.neopets.com/dome/arena.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Find your p1's image and remove it.
let deleteimage = document.getElementById("p1image");
if (deleteimage) { deleteimage.style.display = 'none'; };

// Set John Legend's image. If you wanted to, for SOME reason, have someone else fight your battles, you'd simply replace this URL. For best results, it should be square (equal height and width) dimensions, transparent, and at least 400px (so 400x400, 750x750, not 400x200 or 150x600).
let fighterImage = "url(\"//i.imgur.com/CmfzGdY.png\")";

// Create div for your fighter. If you've edited the image, you'd want to adjust the background-position numbers here if they're not aligned quite right (first number is horizontal position, second is vertical).
// If you want a larger image, like for some reason you want some kind of horrible massive video game sprite consuming half your Battledome screen, you'd adjust the height and width numbers.
let fighter = document.createElement('div');
fighter.style="position: absolute; display: block; z-index:3; overflow: hidden; height: 400px; width: 400px; left: 0px; top: 0px; background-position: 30px 35px; background-repeat: no-repeat; background-size: 240px 240px; background-image: " + fighterImage + ";";

// Insert the fighter in the Battledome.
let petimg = document.getElementById("p1");
petimg.prepend(fighter);