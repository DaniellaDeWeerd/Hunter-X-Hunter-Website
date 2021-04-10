/* 
   Hunter X Hunter Website main web page
   Filename: script.js
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
    if (document.getElementById("displayHunterExam").style.display === "block") {
        $("#displayHunterExam").slideUp("slow", function() {
            document.getElementById("displayHunterExam").style.display = 'none';
        });
    } else {
        $("#displayHunterExam").slideDown("slow", function() {
            document.getElementById("displayHunterExam").style.display = 'block';
        });

    }

}

function textHeavensArena() {
    if (document.getElementById("displayHeavensArena").style.display === "block") {
        $("#displayHeavensArena").slideUp("slow", function() {
            document.getElementById("displayHeavensArena").style.display = 'none';
        });
    } else {
        $("#displayHeavensArena").slideDown("slow", function() {
            document.getElementById("displayHeavensArena").style.display = 'block';
        });

    }

}

function textYorknewCity() {
    if (document.getElementById("displayYorknewCity").style.display === "block") {
        $("#displayYorknewCity").slideUp("slow", function() {
            document.getElementById("displayYorknewCity").style.display = 'none';
        });
    } else {
        $("#displayYorknewCity").slideDown("slow", function() {
            document.getElementById("displayYorknewCity").style.display = 'block';
        });

    }

}

function textGreedIsland() {
    if (document.getElementById("displayGreedIsland").style.display === "block") {
        $("#displayGreedIsland").slideUp("slow", function() {
            document.getElementById("displayGreedIsland").style.display = 'none';
        });
    } else {
        $("#displayGreedIsland").slideDown("slow", function() {
            document.getElementById("displayGreedIsland").style.display = 'block';
        });

    }



}

function textChimeraAnt() {
    if (document.getElementById("displayChimeraAnt").style.display === "block") {
        $("#displayChimeraAnt").slideUp("slow", function() {
            document.getElementById("displayChimeraAnt").style.display = 'none';
        });
    } else {
        $("#displayChimeraAnt").slideDown("slow", function() {
            document.getElementById("displayChimeraAnt").style.display = 'block';
        });

    }

}

function textHunterChairman() {
    if (document.getElementById("displayHunterChairman").style.display === "block") {
        $("#displayHunterChairman").slideUp("slow", function() {
            document.getElementById("displayHunterChairman").style.display = 'none';
        });
    } else {
        $("#displayHunterChairman").slideDown("slow", function() {
            document.getElementById("displayHunterChairman").style.display = 'block';
        });

    }

}

hunterExamImg.addEventListener("click", textHunterExam, false)
heavensArenaImg.addEventListener("click", textHeavensArena, false)
yorknewCityImg.addEventListener("click", textYorknewCity, false)
greedIslandImg.addEventListener("click", textGreedIsland, false)
chimeraAntImg.addEventListener("click", textChimeraAnt, false)
hunterChairmanImg.addEventListener("click", textHunterChairman, false)

$('.containerImg').hover(function() {
        $(this).stop().animate({ fontSize: '1.25em' });
    },
    function() {
        $(this).stop().animate({ fontSize: '1em' });
    });