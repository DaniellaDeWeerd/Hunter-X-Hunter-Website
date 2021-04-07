/* 
   Lakeland Reeds Bed and Breakfast menu toggle script 
   Filename: script.js
   HTML5 and CSS3 Illustrated Unit I, Skills Review
 */

var navButton = document.querySelector(".navigation-menu-button img");

if (navButton.addEventListener) {
    navButton.addEventListener("click", function() {
        var nav = document.querySelector(".sitenavigation ol");
        if (nav.style.display === "block") {
            nav.style.display = "";
        } else {
            nav.style.display = "block";
        }
    }, false);
} else if (navButton.attachEvent) {
    navButton.attachEvent("onclick", function() {
        var nav = document.querySelector(".sitenavigation ol");
        if (nav.style.display === "block") {
            nav.style.display = "";
        } else {
            nav.style.display = "block";
        }
    });
}

var hunterExamImg = document.querySelector("#hunterExam1");
var heavensArenaImg = document.querySelector("#heavensArena");
var yorknewCityImg = document.querySelector("#yorknewCity");
var greedIslandImg = document.querySelector("#greedIsland")
var chimeraAntImg = document.querySelector("#chimeraAnt")
var hunterChairmanImg = document.querySelector("#HunterChairman")


function textHunterExam() {
    document.getElementById("displayText").innerHTML = '<h3>Hunter Exam</h3>' +
        '<p style="text-align:center;"><img src="OtherImages/hunterExamRunning.jpg" alt="The Running Phase of the Hunter Exam"></p>' +
        '<p>The Hunter Exam (ハンター試験, Hantā Shiken) is a yearly event which an applicant must pass in order to become a Hunter, an elite member of humanity and a part of the Hunter Association. These exams consist of several tests and stages which can vary drastically. Thus far, 289 Hunter Exams have taken place. The Head of the Exam Commission is the Chairman of the Hunter Association themselves.</p>' +
        '<p style="text-align:center;"><img src="OtherImages/hunterExamHanging.jfif" alt="The Egg Capturing Phase of the Hunter Exam"></p>';
}

function textHeavensArena() {
    document.getElementById("displayText").innerHTML = '<h3>Heavens Arena</h3>' +
        "";
}

function textYorknewCity() {
    document.getElementById("displayText").innerHTML = '<h3>Yorknew City</h3>' +
        "";
}

function textGreedIsland() {
    document.getElementById("displayText").innerHTML = '<h3>Greed Island</h3>' +
        '<p style="text-align:center;"><img src="OtherImages/greedIslandMap.png" alt="Map of Greed Island"></p>' +
        '<p>Locations:</p>' +
        '<ul><li>Shiso Tree: This is the starting point of the game.</li><li>Magic City of Masadora: This is the only place on the island where Spell Cards can be purchased.</li>' +
        '<ul><li>Spell Card Shop: Where players can purchase spell cards at a given price. When spell cards are used or players leave the game, the inventory of cards is replenished.</li></ul>' +
        '<li>Port City Soufrabi: A place where the player can find a method to leave Greed Island and return to the real world. It can be attained by bribing or knocking out the Harbor Master.</li><li>The City of Love, Aiai: Filled with almost every romantic scenario. Hisoka considers it a nice place to spend time.</li><li>City of Prizes, Antokiba: Every month a different contest is held, with differing prizes for each month. Specified Slot Card can be won during the even months. It is one of the two starting cities.</li>' +
        '<li>Gambling City Dorias: Plenty of casinos are located here, and this is also where some cards can only be acquired by playing in here. The item "Risky Dice" can be useful here.</li><li>Rubicuta: Another starting town in the game because of its short distance from the islands main entrance.</li><li>Capital City, Limeiro: The capital of Greed Island that can only be accessed by those who have completed the Specified Slot Cards and won the End of Game Quiz to receive card #000 "Rulers Blessing". Dwun and List live here.</li><li>Port: The only port on the island and home of the Harbormaster; by defeating him the player gets a "Transport Ticket" card to leave the game. Elena, a Game Master, operates from a tower in the port city teleporting players out of the game.</li><li>Badlands: A series of hills (composed of eroded sedimentary rocks) in dry terrain with minimal vegetation and inhabited by many monsters. It is where Gon and Killua were trained by Biscuit. Within its area, there is an abandoned town/camp and tunnels dug by Gon and Killua.</li>' +
        '<li>Village of the Bandits from the Mountains: Where the Sick Villagers, that pose as bandits in the mountains, reside. Everyone in the village suffers from a curse, similar to an endemic disease that increases from a low to a high fever, fatal after one month. Once the player heals all of them, card #075 "Wild Luck Alexandrite" is given as a reward for the achievement.</li><li>Bunzen: Little is known about this town or village to which Abengane returns after talking with Gon and Biscuit; his purpose there was, apparently, mainly to use the forest nearby the city entrance to perform the ritual involved in his Exorcism Nen ability.</li><li>Trade Shops: Where players can buy information, deposit money, sell cards, and purchase cards (other than the spell ones, including all the rank-B cards).</li></ul>' +
        '<p>Location on the world map:</p>' +
        '<p style="text-align:center;"><img src="OtherImages/greedIslandLocationOnMap.jpg" alt="Map of Greed Island" class="center"></p>';
}

function textChimeraAnt() {
    document.getElementById("displayText").innerHTML = '<h3>Chimera Ants</h3>' +
        "";
}

function textHunterChairman() {
    document.getElementById("displayText").innerHTML = '<h3>13th Hunter Chairman Election</h3>' +
        "";
}

hunterExamImg.addEventListener("click", textHunterExam, false)
heavensArenaImg.addEventListener("click", textHeavensArena, false)
yorknewCityImg.addEventListener("click", textYorknewCity, false)
greedIslandImg.addEventListener("click", textGreedIsland, false)
chimeraAntImg.addEventListener("click", textChimeraAnt, false)
hunterChairmanImg.addEventListener("click", textHunterChairman, false)