Hi! I'm Red (prettypinkpansy) and these are my Neopets userscripts. Currently they're all centered around cosmetic changes to the Battledome. All of these should work on both normal Battledome pages and The Void Within, though they might get weird in 2p battles since I've not tested that.

# Battledome But With A Cool Sports Car

<img src="https://i.imgur.com/ixwk9c5.gif">

<a href="https://github.com/prettypinkpansy/neopets-userscripts/raw/refs/heads/main/Neopets%20-%20Battledome%20But%20With%20A%20Cool%20Sports%20Car.user.js">Download</a>

You will need a browser addon such as <a href="https://www.tampermonkey.net/">Tampermonkey</a> to install this.

This is a **purely cosmetic script that will not interfere with anything**. It's simple: it will **put any pet you're battling with in a car**, because that's really funny.

The car itself is a <a href="https://items.jellyneo.net/search/?name=usuki+dream+car">Usuki Dream Car</a>, a real item you can get and equip to your pet, but you don't need to have it equipped for the script to work. I made this script because the layer it's on does not show in the Battledome. My battledome pet loves his car, so I wanted him to be able to use it to run over the Giant Space Fungus as Fyora intended.

You can **change the color of the car to match your pet** by changing the indicated portion at the start of the script to pink, red, black, or blue, corresponding to the Dyeworks variations of this item.

<img src="https://i.imgur.com/Cvi7Fel.png">

Some shorter Battledome pets, e.g. babies or Jubjubs, may have trouble reaching the controls. Some extremely large pets (e.g. Mutant Chomby) may bulge out of the car itself. Sorry about that. I don't think there's a way to detect species/color and adjust the height manually. Maybe in a future version I'll try to fix this by adding a height toggle you can adjust.

# John Legend Fights Your Battles

<img src="https://i.imgur.com/eaG4hLM.gif">

<a href="https://github.com/prettypinkpansy/neopets-userscripts/raw/refs/heads/main/Neopets%20-%20John%20Legend%20Fights%20Your%20Battles.user.js">Download</a>

Where's that man been? What's he doing for Neopets? Finally answer that question and have John Legend do your fights so your Battledome pet doesn't have to. (Warning: John Legend's stats are the same as your Battledome pet and damage done to John Legend will still be done to your Battledome pet. Taking Battledome damage was not in John Legend's contract.)

Removes your Battledome sprite and replaces it with John Legend.

Again, this is **purely cosmetic**. You still have to like, pick your battledome weapons and do your fights as usual, sadly.

Does not replace your pet's top left portrait or username - I tried, but I think it doesn't let me because those elements load in later, and I'm not smart enough to accommodate that. Maybe I'll update this in the future if someone tells me how, ha ha.

**NERD STUFF:** You can edit the script as indicated (it's easy!) to put your own image and position it properly, if you want to have Miku do your battles or whatever.

# Lore Accurate Maraquan Battledome

<img src="https://i.imgur.com/JrndplW.gif">

<a href="https://github.com/prettypinkpansy/neopets-userscripts/raw/refs/heads/main/Neopets%20-%20Lore%20Accurate%20Maraquan%20Battledome.user.js">Download</a>

Do you have a Maraquan pet? Tired of seeing them float in midair? Put that thing in a bowl of water where it belongs.

This is basically the same as Battledome But With A Cool Sports Car, just using different images. It should work for pretty much any pet unless it's comically huge.

**NERD STUFF:** If there's a different item you want to encase your pet (e.g. lava lamp, Baby In A Pumpkin) you can go on Dress to Impress, dress up your pet, use Inspect Element to get the images that go below and above your pet, and replace the URLs.

# Replace The Gross Volunteering Image

<img src="https://i.imgur.com/LcgBSYS.png">

<a href="https://github.com/prettypinkpansy/neopets-userscripts/raw/refs/heads/main/Neopets%20-%20Replace%20The%20Gross%20Volunteering%20Image.user.js">Download</a>

You hate that spit trail, don't you? Or maybe you didn't notice it until I pointed it out just now. Sorry. Well! Here's something to replace it.

Purely cosmetic, just edits the CSS to replace a single image.

**NERD STUFF:** You can also edit the script easily if there's a different image you prefer, it just needs to be 450x150 in dimensions.

# Alternate Battledome Defeat Text

<img src="https://i.imgur.com/3KcyRLD.png" width="500px"> <img src="https://i.imgur.com/VYBulMK.png" width="500px">

<a href="https://github.com/prettypinkpansy/neopets-userscripts/raw/refs/heads/main/Neopets%20-%20Alternate%20Battledome%20Defeat%20Text.user.js">Download</a>

Another purely cosmetic script. By default will replace the "Defeat!" text in the Battledome with the Grand Theft Auto "wasted" text. Edit the script as directed in the code (very simple change) for Dark Souls "YOU DIED" instead.

**NERD STUFF:** By default Neopets' victory/draw/defeat text is a single image, so if you want to try and use your own images for this one, you'll have to edit <a href="https://images.neopets.com/bd2/ui/headers/winner.png">this image</a> as-needed.
