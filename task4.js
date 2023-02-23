//  Given the name of elixirs call the https://wizard-wordd-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-wordd-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


// fetch details by name
const yargs = require('yargs')
const api_url = 'https://wizard-world-api.herokuapp.com/Elixirs';

async function getapi(nam,url) {
    const response = await fetch(url);
    let data = await response.json();
   
    for(let i = 0;i< data.length; i++){
        if(data[i].name === nam){
            console.log(data[i])
        }
    }
}

let nam = "Gregory's Unctuous Unction"
getapi(nam,api_url);



// list of names present in api

// Fergus Fungal Budge
// Manegro Potion
// Potion N. 220
// Rudimentary body potion
// Lung Clearing Potion
// Essence of Insanity
// Antidote to Uncommon Poisons
// Restoration Potion
// Skele-Gro
// Cheese-Based Potions
// Muffling Draught
// Blood-Replenishing Potion
// Strength Potion
// Dragon dung fertiliser
// Sleekeazy's Hair Potion
// Ageing Potion
// Rat Tonic
// Murtlap Essence
// Solution 125
// Death potion
// Garrotting Gas
// Girding Potion
// Herbicide Potion
// Draught of Peace
// Dogbane Potion
// Alihotsy Draught
// Hair-Raising Potion
// Armadillo Bile Mixture
// Tolipan Blemish Blitzer
// Potion N. 07
// Strengthening Solution
// Quodpot solution
// Strong Invigoration Draught
// Dragon Tonic
// Bulgeye Potion
// Death-Cap Draught
// Revive Potion
// Rano Potion
// First Love Beguiling Bubbles
// Heartbreak Teardrops
// Memory Potion
// Dr Ubbly's Oblivious Unction
// Twilight Moonbeams
// Snuffling Potion
// Love Potion Antidote
// Wound-Cleaning Potion
// Malevolent Mixture
// Calming Draught
// Anti-Paralysis Potion
// Wiggenweld Potion
// Mandrake Restorative Draught
// Regerminating Potion
// Drowsiness Draught
// Hate Potion
// Invigoration Draught
// Erumpent Potion
// Potion for Dreamless Sleep
// Invisibility Potion
// Shrinking Solution
// Screaming Snakes Hair Potion
// Weakness Potion
// Golden potion
// Elixir of Life
// Cough Potion
// Weedosoros
// Wit-Sharpening Potion
// Grand Wiggenweld Potion
// Flesh-Eating Slug Repellent
// Amortentia
// Draught of Living Death
// Angel's Trumpet Draught
// Cupid Crystals
// Antidote to Veritaserum
// Caxambu Style Borborygmus Potion
// Volubilis Potion
// Swelling Solution
// Fire-Protection Potion
// Wideye Potion
// Fungiface Potion
// Everlasting Elixirs
// Dogbreath Potion
// Elixir to Induce Euphoria
// Baneberry Potion
// Forgetfulness Potion
// Gregory's Unctuous Unction
// Cure for Boils
// Everklena
// Regeneration potion
// Potion N. 329
// Grand Pepperup Potion
// Exstimulo Potion
// Befuddlement Draught
// Potion N. 113
// Scintillation Solution
// Potion N. 86
// Jawbind potion
// Noxious Poison
// Bruise removal paste
// Mouth Itching Antidote
// Love potion
// Antidote to Common Poisons
// Baruffio's Brain Elixir
// Fake protective potions
// Replenishing Potion
// Wolfsbane Potion
// Oculus Potion
// Mrs Skower's All-Purpose Magical Mess Remover
// Vitamix Potion
// Fatiguing Fusion
// Bloodroot Poison
// Truth Serum
// Confusing Concoction
// Burning Bitterroot Balm
// Pompion Potion
// Madame Glossy's Silver Polish
// Pepperup Potion
// Hiccoughing Solution
// Dragon Poison
// Star Grass Salve
// Dizziness Draught
// Deflating Draught
// Ten-Second Pimple Vanisher
// Frog Parts Mixture
// Kissing Concoction
// Chelidonium Miniscula
// Babbling Beverage
// Polyjuice Potion
// Rat Spleen Mixture
// Moonseed Poison
// Strong Exstimulo Potion
// Doxycide
// Burn-Healing Paste
// Mopsus Potion
// Solution 078
// Developing solution
// Beautification Potion
// Maximum Turbo Farts Potion
// Sleeping Draught
// Laxative Potion
// Emerald Potion
// Exploding Potion
// Felix Felicis
// Dawdle Draught
// Veritaserum
// Laugh-inducing Potion
