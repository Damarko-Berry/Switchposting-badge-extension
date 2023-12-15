const Mario = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Dummies.txt";
const Zelda = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Zelda.txt";
const Kirby = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Kirby.txt";
const Pokemon = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-Flare-extention/master/Lists/Pokemon.txt";

function FindMemb() {
    console.log("Mario");
    CheckFLare(Mario, "Mario🍄", "mario");
    console.log("Zelda");
    CheckFLare(Zelda, "Zelda⚔", 'zelda');
    console.log("Kirby");
    CheckFLare(Kirby, "Kirby🍲", 'kirby');
    console.log("Pokemon");
    CheckFLare(Pokemon, "Pokémon⛹🏻‍♂️", 'pokemon');
    
}

async function CheckFLare(url, text, style) {

    fetch(url).then(response => response.text()).then(data => {
        const namesArray = data.split('\n');
        const filteredNames = namesArray.filter(name => name.trim() !== '');
        for (var i = 0; i < filteredNames.length; i++) {
            creatFlare(ChecSpans(filteredNames[i]), text, style);
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
function creatFlare(span, Flare, style) {
    if (span == null) return;

    var sp = document.createElement('span');
    sp.classList.add(style)
    sp.textContent = " " + Flare + " ";
    
    span.appendChild(sp);

}
const observer = new MutationObserver(FindMemb);

// Observe changes to the entire document subtree
observer.observe(document.body, { subtree: true, childList: true });

