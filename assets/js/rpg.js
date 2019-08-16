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

$("#wolverine").click(function() {   
    stats(wolvy,"spidyPlay","caseyPlay","raphyPlay","wolvyPlay");

 /*   if (element.classList.contains('spidyPlay')) {
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

    var statDiv = document.createElement('DIV');
    var insertStat = document.getElementById('playerArena');
    var statText = document.createTextNode(w.name);
    insertStat.appendChild(statDiv);
    statDiv.appendChild(statText); 

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
}