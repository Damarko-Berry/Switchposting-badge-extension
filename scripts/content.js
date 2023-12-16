const Mario = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Mario.txt";
const Zelda = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Zelda.txt";
const Kirby = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Kirby.txt";
const Pokemon = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Pokemon.txt";
const Metroid = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Metroid.txt";
const DK = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/DK.txt";
const EarthBound = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/EarthBound.txt";
const Yoshi = "https://raw.githubusercontent.com/Damarko-Berry/Switchposting-badge-extension/master/Lists/Yoshi.txt";

function FindMemb() {
    url = getCurrentDomain().toString();
    if (url.includes("https://www.facebook.com/groups/SwitchpostingJr") |
        url.includes("https://www.facebook.com/groups/690637661273274")) {
        
        CheckFLare(Mario, "Mario🍄", "Mario");
       
        CheckFLare(Zelda, "Zelda⚔", 'Zelda');
        
        CheckFLare(Kirby, "Kirby🍲", 'Kirby');
        
        CheckFLare(Pokemon, "Pokémon⛹🏻‍♂️", 'Pokemon');
        CheckFLare(Metroid, "Metroid🚀", 'Metroid');
        CheckFLare(DK, "DK🦍", 'DK');
        CheckFLare(EarthBound, "Mother🌍", 'EarthBound');
        CheckFLare(Yoshi, "Yoshi🐱‍🐉", 'Yoshi');
    }
    
}

function getCurrentDomain() {
    // Get the full URL of the current page
    return window.location.href;
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
    span.textContent += " ";
    var sp = document.createElement('span');
    sp.classList.add(style)
    sp.classList.add("Rounded")
    sp.textContent = Flare;
    
    span.appendChild(sp);

}
function ImgFlare(span, url) {
    if (span == null) return;
    span.textContent += " ";
    var sp = document.createElement('span');
    sp.classList.add(style)
    sp.textContent = Flare;
    
    span.appendChild(sp);

}
const observer = new MutationObserver(FindMemb);

// Observe changes to the entire document subtree
observer.observe(document.body, { subtree: true, childList: true });

