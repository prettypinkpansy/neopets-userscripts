// ==UserScript==
// @name         Neopets - Replace The Gross Volunteering Image
// @version      2024-10-21
// @description  Replaces the default image for when you volunteer. You know, the one with the doctor pulling a thermometer from the mouth of a young Kacheek, complete with spit trail.
// @author       prettypinkpansy
// @match        *://*.neopets.com/hospital/volunteer.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==


// Modifies the CSS to change the image to a picture of the same Gelert doctor on Neopets' servers, except he's holding up a vial with the Elephante nurse watching pleasantly.
// If you want a different image, just replace the url with a 450x150 image of your choice :)
GM_addStyle ( `
    .vc-popup .vc-popup-img {
        background: url('//images.neopets.com/images/t76r32vg/h7vt98.jpg') center / 100% no-repeat !important;;
    }
` );