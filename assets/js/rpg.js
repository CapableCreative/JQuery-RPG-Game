// =========== PLAYER OBJECTS ======================================== 
/*      Each player character needs to have name, health, counter,
        and attack properties
*/

$( document ).ready(function() {

var playerName = [];
var playerAttack = [];
var playerCounter = [];
var playerHealth = [];
var playerDiv = [];
var playerHealthCurr = [];

var opponentName = [];
var opponentAttack = [];
var opponentHealth = [];
var opponentCounter = [];
var opponentDiv = [];
var oppHealthCurr = [];

var graveYard = [];

$("#attackButton").click(function() {    
    let playerStrike = Math.floor(Math.random() * ((playerAttack[playerAttack.length - 1]) +10)) * 1;
    let currentOppHealth = opponentHealth[opponentHealth.length - 1];
    let opponentStrike = Math.floor(Math.random() * ((opponentCounter[opponentCounter.length - 1]) +10)) * 1;
    let currentPlayerHealth = playerHealth[playerHealth.length - 1];
    
    oppHealthCurr.push(currentOppHealth);
    opponentHealth.push(currentOppHealth - playerStrike);
    opponentCounter.push(opponentStrike);
    playerHealth.push(currentPlayerHealth - opponentStrike);
    playerHealthCurr.push(currentPlayerHealth);

    $( "#damagePoints" ).text(playerStrike); 
    $( "#damageDeets").text("DAMAGE!");
    $( "#counterDamagePoints").text(opponentCounter[opponentCounter.length - 1]);
    $( "#counterDamageDeets").text("COUNTER!");
    $("#onh").append('<div>');
    $("#pnh").append('<div>');
    $("#onh div").text(opponentHealth[opponentHealth.length - 1]);
    $("#pnh div").text(playerHealth[playerHealth.length - 1]);

    if (playerHealth[playerHealth.length - 1] <= 0) {
        document.getElementById("defeated").style.display = "block";
        document.getElementsByClassName("instructions").style.display = "none";
    }
    else if (opponentHealth[opponentHealth.length - 1] <= 0) {
        document.getElementById("roster-2").style.height = "200px";
        document.getElementById("roster-2").style.opacity = "1.0"; 
        document.getElementById("attackButton").style.display = "none";
        document.getElementById("attackButton").style.opacity = "0.0"; 
        $( "#onh div" ).remove();
        $( '#opponentArena ul').remove()
        var lost = graveYard[graveYard.length - 1];
        document.getElementById("" + lost + "").style.display = "none";
        document.getElementById("opponentArena").style.opacity = "0.3";
        if (graveYard.length > 3) {
            document.getElementById("victory").style.display = "block";
            document.getElementsByClassName("instructions").style.display = "none";
        }
    }
    document.getElementById("damage").style.display = "block";
    document.getElementById("counterDamage").style.display = "block";
    document.getElementById("damage").style.transform = "scale(1.0)";
    setInterval(function(){document.getElementById("counterDamage").style.transform = "scale(1.0)"},500);
    setInterval(function(){document.getElementById("damage").style.display = "none"},3000);
    setInterval(function(){document.getElementById("counterDamage").style.display = "none"},3000);   
});

const wolvy = {
    name: "Wolverine",
    health: 158,
    counter: 26,
    attack: 76,
    div: "wolverineOpp"
}
$("#wolverine .statlist").text("HEALTH:" + wolvy.health + " - " + " ATTACK:" + wolvy.attack + " - " + " COUNTER:" + wolvy.counter);
const casey = {
    name: "Casey Jones",
    health: 30,
    counter: 30,
    attack: 30,
    div: "caseyJonesOpp"
}
$("#caseyJones .statlist").text("HEALTH:" + casey.health + " - " + " ATTACK:" + casey.attack + " - " + " COUNTER:" + casey.counter);
const spidy = {
    name: "Dragon",
    health: 90,
    counter: 35,
    attack: 60,
    div: "spiderManOpp"
}
$("#spiderMan .statlist").text("HEALTH:" + spidy.health + " - " + " ATTACK:" + spidy.attack + " - " + " COUNTER:" + spidy.counter);
const raphy = {
    name: "Raphael",
    health: 136,
    counter: 45,
    attack: 46,
    div: "raphaelOpp"
}
$("#raphael .statlist").text("HEALTH:" + raphy.health + " - " + " ATTACK:" + raphy.attack + " - " + " COUNTER:" + raphy.counter);

// -- PLAYER CHOICES ------------------ //
$("#wolverine").click(function() {   
    stats(wolvy,"spidyPlay","caseyPlay","raphyPlay","wolvyPlay","\"wolverineOpp\"");
});
$("#caseyJones").click(function() {
    stats(casey,"spidyPlay","wolvyPlay","raphyPlay","caseyPlay","\"caseyJonesOpp\"");
});
 $("#spiderMan").click(function() {
    stats(spidy,"wolvyPlay","caseyPlay","raphyPlay","spidyPlay","\"spiderManOpp\"");
});
$("#raphael").click(function() {
    stats(raphy,"wolvyPlay","caseyPlay","spidyPlay","raphyPlay","\"raphaelOpp\""); 
});

// -- OPPONENT CHOICES -------------- //
$("#wolverineOpp").click(function() {   
    statsOpp(wolvy,"spidyPlay","caseyPlay","raphyPlay","wolvyPlay");
});
$("#caseyJonesOpp").click(function() {
    statsOpp(casey,"spidyPlay","wolvyPlay","raphyPlay","caseyPlay");
});
$("#spiderManOpp").click(function() {
    statsOpp(spidy,"wolvyPlay","caseyPlay","raphyPlay","spidyPlay");
});
$("#raphaelOpp").click(function() {
    statsOpp(raphy,"wolvyPlay","caseyPlay","spidyPlay","raphyPlay");
});

/* ==================================
--------- argument assignments ------
w = object
x = first nonplayer character
y = second nonplayer character
z = third nonplayer character
a = player profile image css class
b stats() = correlating opponent div (so player doesn't play themselves) 
================================== */

function stats(w, x, y, z, a, b) {
    var element = document.getElementById('playerArena');
    element.classList.add(a);
    var statDiv = document.createElement('UL');
    var ulLi = document.createElement('LI');
    var ulLi2 = document.createElement('LI');
    var ulLi3 = document.createElement('LI');
    var insertStat = document.getElementById('playerStats');
    var statText = document.createTextNode(w.name);
    var statHP = document.createTextNode("HEALTH: " + w.health);
    var statAT = document.createTextNode("ATTACK MAX: " + w.attack);
    insertStat.appendChild(statDiv);
    statDiv.appendChild(ulLi);
    statDiv.appendChild(ulLi2);
    statDiv.appendChild(ulLi3);
    ulLi.appendChild(statText);
    ulLi2.appendChild(statHP);
    ulLi3.appendChild(statAT);

    if (element.classList.contains(x)){
    element.classList.remove(x);
    }
    else if (element.classList.contains(y)) {
    element.classList.remove(y);
    }
    else if (element.classList.contains(z)) {
    element.classList.remove(z);
    }
    document.getElementById("roster-1").style.height = "20px";
    document.getElementById("roster-1").style.opacity = "0.0"; 
    document.getElementById("roster-2").style.height = "0px";
    document.getElementById("roster-2").style.opacity = "1.0";
    playerName.push(w.name);
    playerAttack.push(w.attack);
    playerHealth.push(w.health);
    playerCounter.push(w.counter);
    playerDiv.push(w.div);
    graveYard.push(w.div);
    document.getElementById(w.div).style.display = "none";
}

function statsOpp(w, x, y, z, a) {
    var element = document.getElementById('opponentArena');
    element.classList.add(a);

    var statDiv = document.createElement('UL');
    var ulLi = document.createElement('LI');
    var ulLi2 = document.createElement('LI');
    var ulLi3 = document.createElement('LI');
    var insertStat = document.getElementById('opponentStats');
    var statText = document.createTextNode(w.name);
    var statHP = document.createTextNode("HEALTH: " + w.health);
    var statAT = document.createTextNode("ATTACK MAX: " + w.attack);
    insertStat.appendChild(statDiv);
    statDiv.appendChild(ulLi);
    statDiv.appendChild(ulLi2);
    statDiv.appendChild(ulLi3);
    ulLi.appendChild(statText);
    ulLi2.appendChild(statHP);
    ulLi3.appendChild(statAT);

    if (element.classList.contains(x)){
    element.classList.remove(x);
    }
    else if (element.classList.contains(y)) {
    element.classList.remove(y);
    }
    else if (element.classList.contains(z)) {
    element.classList.remove(z);
    }
    document.getElementById("roster-2").style.height = "20px";
    document.getElementById("roster-2").style.opacity = "0.0"; 
    document.getElementById("attackButton").style.display = "block"; 
    document.getElementById("attackButton").style.opacity = "1.0";
    document.getElementById("opponentArena").style.opacity = "1.0";

    graveYard.push(w.div);

    opponentName.push(w.name);
    opponentAttack.push(w.attack);
    opponentHealth.push(w.health);
    opponentCounter.push(w.counter);
    opponentDiv.push(w.div);

}

});

/* 
--------- NON-CRITICAL ERRORS ----------------------------------

    - REMOVE DIV WRAPPER AROUND LI ITEMS IN PLAYER STATS - addressed! - SLF - 8/17/19
    - REMOVE REDUNDANT ELEMENTS FROM STATS & STATSOPP FUNCTIONS - addressed! - SLF 8/17/19

--------- SCRAPPED CODE ----------------------------------------
    // --- original player choice if-statement -- //

    if (element.classList.contains('spidyPlay')) {
    element.classList.remove('spidyPlay');
    }
    else if (element.classList.contains('caseyPlay')) {
    element.classList.remove('caseyPlay');
    }
    else if (element.classList.contains('raphyPlay')) {
    element.classList.remove('raphyPlay');
    }
    else (element.classList.add('wolvyPlay')); 
    

*/