// =========== PLAYER OBJECTS ======================================== 
/*      Each player character needs to have name, health, counter,
        and attack properties
*/

const wolvy = {
    name: "Wolverine",
    health: 128,
    counter: 6,
    attack: 76
}
const casey = {
    name: "Casey Jones",
    health: 30,
    counter: 30,
    attack: 30
}
const spidy = {
    name: "Spider-Man",
    health: 90,
    counter: 90,
    attack: 60
}
const raphy = {
    name: "Raphael",
    health: 136,
    counter: 25,
    attack: 66
}
// -- PLAYER CHOICES ------------------ //
$("#wolverine").click(function() {   
    stats(wolvy,"spidyPlay","caseyPlay","raphyPlay","wolvyPlay");
});

$("#caseyJones").click(function() {
    stats(casey,"spidyPlay","wolvyPlay","raphyPlay","caseyPlay");
   
 });

 $("#spiderMan").click(function() {
    stats(spidy,"wolvyPlay","caseyPlay","raphyPlay","spidyPlay");
 });

$("#raphael").click(function() {
    stats(raphy,"wolvyPlay","caseyPlay","spidyPlay","raphyPlay");  
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

================================== */

function stats(w, x, y, z, a) {
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
}

/* 

--------- NON-CRITICAL ERRORS ----------------------------------

    - REMOVE DIV WRAPPER AROUND LI ITEMS IN PLAYER STATS
    - REMOVE REDUNDANT ELEMENTS FROM STATS & STATSOPP FUNCTIONS

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