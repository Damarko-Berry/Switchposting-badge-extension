const Mario = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Dummies.txt";
const Zelda = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Zelda.txt";
const Kirby = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Kirby.txt";
const Pokemon = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Pokemon.txt";

function FindMemb() {
    console.log("Mario");
    CheckFLare(Mario, "Mario🍄", "white", "red");
    console.log("Zelda");
    CheckFLare(Zelda, "Zelda⚔", "#005A39", "#F8DE55");
    console.log("Kirby");
    CheckFLare(Kirby, "Kirby🍲", "#CE1756", "#E3B968");
    console.log("Pokemon");
    CheckFLare(Pokemon, "Pokémon⛹🏻‍♂️", "#4773F6", "#FEFD0F");
    
}

async function CheckFLare(url, text, bg, tc) {

    fetch(url).then(response => response.text()).then(data => {
        const namesArray = data.split('\n');
        const filteredNames = namesArray.filter(name => name.trim() !== '');
        for (var i = 0; i < filteredNames.length; i++) {
            creatFlare(ChecSpans(filteredNames[i]), text, bg, tc);
        }
    }).catch(error => {
        console.error('Error fetching the file:', error);
        
    });
}

function ChecSpans(name) {
    var spans = document.querySelectorAll('span');
   
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].textContent.includes(name) & spans[i].querySelectorAll('span').length<1) {
            return spans[i];
        }
    }
    return null;
}
function creatFlare(span, Flare, bg, tc) {
    if (span == null) return;
    var sp = document.createElement('span');
    sp.textContent = " " + Flare + " ";
    sp.style.color = tc;
    sp.style.backgroundColor = bg;
    span.appendChild(sp);

}
const observer = new MutationObserver(FindMemb);

// Observe changes to the entire document subtree
observer.observe(document.body, { subtree: true, childList: true });

