// ==UserScript==
// @name         Neopets - Alternate Battledome Defeat Text
// @version      2025-08-08
// @description  Replaces Battledome "Defeat" message with "Wasted" from Grand Theft Auto, or if you prefer, "YOU DIED" from Dark Souls (edit the script according to the guidelines in it).
// @author       prettypinkpansy
// @match        *://*.neopets.com/dome/arena.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Hi! This is the part where I ask you to change the code depending on what you want!

// If you want "wasted" from Grand Theft Auto, leave the script as-is. No changes needed.
// If you want "YOU DIED" from Dark Souls, change "gta" to "ds" on the following line so it appears like this: let game = "ds"
let game = "gta"



// PLEASE LEAVE THE CODE BELOW UNTOUCHED
// PLEASE LEAVE THE CODE BELOW UNTOUCHED
// PLEASE LEAVE THE CODE BELOW UNTOUCHED
// (unless you're an adventurous sort adding your own defeat screen, in which case go nuts - it's pretty easy, edit what you want into the image then upload it and replace the URL)

// Modifies the CSS to change the image for Defeat/Draw/Win.
if (game == "gta") {
GM_addStyle ( `
    .end_msg
        { background-image:url('https://i.imgur.com/wJnWk47.png') !important; }
` );
}
if (game == "ds") {
GM_addStyle ( `
    .end_msg
        { background-image:url('https://i.imgur.com/UfuD9lC.png') !important; }
` );
}