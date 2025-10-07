const games = {
    action: [
    { name: "Hollow Knight: Silksong", size: "8GB", year: "2025", img: "pic/silksong.jpg" },
    { name: "Silent Hill F", size: "50GB", year: "2025", img: "pic/silenthill.jpg" },
    { name: "Dying Light: The Beast", size: "72GB", year: "2025", img: "pic/dyinglight.jpg" },
    { name: "The Last of Us™ Part II", size: "117GB", year: "2025", img: "pic/thelastofus2.jpg" },
    { name: "Split Fiction", size: "88GB", year: "2025", img: "pic/splitfiction.jpg" },
    { name: "Grand Theft Auto V", size: "92GB", year: "2025", img: "pic/gtav.png" },
    { name: "BLEACH Rebirth of Souls", size: "72GB", year: "2025", img: "pic/bleach.jpg" },
    { name: "Days Gone", size: "63GB", year: "2025", img: "pic/daysgone.jpg" },
    { name: "Marvel's Spider-Man 2", size: "140GB", year: "2025", img: "pic/spiderman2.jpg" },
    { name: "Ninja Gaiden 2 Black", size: "82GB", year: "2025", img: "pic/ninja2.jpg" },
    { name: "Dragon Ball: Sparking! ZERO", size: "30GB", year: "2024", img: "pic/dragonballsparking.jpg" },
    { name: "Tekken 8", size: "114GB", year: "2024", img: "pic/tekken8.jpg" },
    { name: "Suicide Squad: Kill the Justice League", size: "140GB", year: "2024", img: "pic/suicidesq.jpg" },
    { name: "Red Dead Redemption", size: "10GB", year: "2024", img: "pic/rdr1.jpg" },
    { name: "Red Dead Redemption 2", size: "120GB", year: "2024", img: "pic/rdr2.png" },
    { name: "Ghost of Tsushima", size: "70GB", year: "2024", img: "pic/ghost.jpg" },
    { name: "Jujutsu Kaisen Cursed Clash", size: "10GB", year: "2024", img: "pic/jjkcursed.jpg" },
    { name: "Hogwarts Legacy", size: "91GB", year: "2023", img: "pic/hogwarts.jpg" },
    { name: "Dead Island 2", size: "46GB", year: "2023", img: "pic/deadisl2.jpg" },
    { name: "Naruto x Boruto Ultimate Ninja Storm Connections", size: "30GB", year: "2023", img: "pic/naturoconnection.jpg" },
    { name: "Resident Evil 4 Remake", size: "59GB", year: "2023", img: "pic/re4.jpg" },
    { name: "Star Wars Jedi: Survivor™", size: "132GB", year: "2023", img: "pic/starwarsjedi.jpg" },
    { name: "Marvel's Avengers", size: "185GB", year: "2023", img: "pic/avengers.jpg" },
    { name: "Ghostrunner 2", size: "69GB", year: "2023", img: "pic/ghostrunner2.jpg" },
    { name: "One Piece Odyssey", size: "30GB", year: "2023", img: "pic/onepieceody.jpg" },
    { name: "The Last of Us™ Part I", size: "80GB", year: "2023", img: "pic/thelastofus1.jpg" },
    { name: "Hitman World of Assassinationt", size: "77GB", year: "2022", img: "pic/hitman.jpg" },
    { name: "Marvel's Spider-Man Remastered", size: "80GB", year: "2022", img: "pic/spidermanrem.jpg" },
    { name: "Marvel's Spider-Man Miles Morales", size: "60GB", year: "2022", img: "pic/spidermanmiles.jpg" },
    { name: "The Callisto Protocol", size: "98GB", year: "2022", img: "pic/callisto.jpg" },
    { name: "Ghostwire: Tokyo", size: "17GB", year: "2022", img: "pic/ghosttokyo.jpg" },
    { name: "UNCHARTED: Legacy of Thieves", size: "125GB", year: "2022", img: "pic/uncharted.jpg" },
    { name: "Guardians of the Galaxy", size: "76GB", year: "2021", img: "pic/guardian.jpg" },
    { name: "Little Nightmares II", size: "22GB", year: "2021", img: "pic/little2.png" },
    { name: "Watch Dogs Legion", size: "110GB", year: "2020", img: "pic/watchdog.png" },
    { name: "Assassin's Creed Valhalla", size: "160GB", year: "2020", img: "pic/acvalhal.jpg" },
    { name: "Assassin's Creed Mirage", size: "41GB", year: "2020", img: "pic/acmirage.jpg" },
    { name: "One Piece Pirate Warriors 4", size: "30GB", year: "2020", img: "pic/op4.jpg" },
    { name: "Dragon Ball: Kakarot", size: "47GB", year: "2020", img: "pic/dbzkakarot.jpg" },
    { name: "Devil May Cry 5", size: "40GB", year: "2020", img: "pic/dmc5.jpg" },
    { name: "Mortal Kombat 11", size: "147GB", year: "2019", img: "pic/mortalkombat11.png" },
    { name: "Jump Force", size: "23GB", year: "2019", img: "pic/jump.jpg" },
    { name: "Assassin's Creed Odyssey", size: "112GB", year: "2018", img: "pic/acoddysey.jpg" },
    { name: "Dragon Ball Fighter Z", size: "7GB", year: "2018", img: "pic/dbzfighter.jpg" },
    { name: "Little Nightmares", size: "10GB", year: "2017", img: "pic/little1.jpg" },
    { name: "Injustice 2", size: "45GB", year: "2017", img: "pic/injustice2.jpg" },
    { name: "Dragon Ball: Xenoverse 2", size: "30GB", year: "2016", img: "pic/dbzxeno2.jpg" },
    { name: "Assassin's Creed Brotherhood", size: "11GB", year: "2011", img: "pic/asscreedbrother.jpg" }
],

rpg: [
    { name: "Clair Obscur: Expedition 33", size: "44GB", year: "2025", img: "pic/expedition33.jpg" },
    { name: "Avowed", size: "74GB", year: "2025", img: "pic/avowed.jpg" },
    { name: "The Elder Scrolls IV: Oblivion", size: "125GB", year: "2025", img: "pic/obilivion.jpg" },
    { name: "Final Fantasy VII Rebirth", size: "159GB", year: "2025", img: "pic/ff7reb.jpg" },
    { name: "Hades II", size: "10GB", year: "2025", img: "pic/hades2.jpg" },
    { name: "Palworld", size: "30GB", year: "2024", img: "pic/palworld.jpg" },
    { name: "Horizon Zero Dawn™ Remastered", size: "121GB", year: "2024", img: "pic/horizonzero.jpg" },
    { name: "God of War Ragnarök", size: "177GB", year: "2024", img: "pic/gowragna.jpg" },
    { name: "Warhammer 40,000: Space Marine 2", size: "161GB", year: "2024", img: "pic/warhammerspace.jpg" },
    { name: "Final Fantasy XVI", size: "155GB", year: "2024", img: "pic/ff15.jpg" },
    { name: "Sword Art Online Fractured Daydream", size: "42GB", year: "2024", img: "pic/swordart.jpg" },
    { name: "Monster Hunter Stories", size: "11GB", year: "2024", img: "pic/mhstories.jpg" },
    { name: "Dragon's Dogma 2", size: "64GB", year: "2024", img: "pic/drdogma2.jpg" },
    { name: "Gundam Breaker 4", size: "10GB", year: "2024", img: "pic/gundam4.jpg" },
    { name: "Baldur's Gate 3", size: "158GB", year: "2023", img: "pic/baldrs3.jpg" },
    { name: "Elden Ring", size: "70GB", year: "2022", img: "pic/eldenring.jpg" },
    { name: "Horizon Forbidden West", size: "151GB", year: "2022", img: "pic/horizonwest.jpg" },
    { name: "God of War", size: "65GB", year: "2022", img: "pic/gow.jpg" },
    { name: "Cyberpunk 2077", size: "153GB", year: "2020", img: "pic/cyber2077.jpg" },
    { name: "Mortal Shell", size: "15GB", year: "2020", img: "pic/mortalshell.jpg" },
    { name: "Monster Hunter: World", size: "52GB", year: "2018", img: "pic/mhworld.jpg" },
    { name: "The Witcher 3: Wild Hunt", size: "89GB", year: "2015", img: "pic/witcher3.jpg" }
],

sports: [
    { name: "Expeditions: A MudRunner Game", size: "30GB", year: "2025", img: "pic/expeditionmudrunner.jpg" },
    { name: "Tony Hawk's™ Pro Skater™ 3 + 4", size: "58GB", year: "2025", img: "pic/tonyhawks.jpg" },
    { name: "Wreckfest 2", size: "12GB", year: "2025", img: "pic/wreckfest2.jpg" },
    { name: "Assetto Corsa EVO", size: "40GB", year: "2025", img: "pic/asseto.jpg" },
    { name: "CarX Street", size: "18GB", year: "2024", img: "pic/carxstreet.jpg" },
    { name: "Monster Jam™ Showdown", size: "16GB", year: "2024", img: "pic/monsterjam.jpg" },
    { name: "Ride 5", size: "49GB", year: "2023", img: "pic/ride5.jpg" },
    { name: "Cricket 24", size: "68GB", year: "2023", img: "pic/cricket24.jpg" },
    { name: "Forza Motorsport", size: "119GB", year: "2023", img: "pic/forzamotor.jpg" },
    { name: "FIFA 23", size: "65GB", year: "2022", img: "pic/fifa23.jpg" },
    { name: "Forza Horizon 5", size: "177GB", year: "2021", img: "pic/forza5.jpg" },
    { name: "NBA 2K22", size: "118GB", year: "2021", img: "pic/nba2k22.png" },
    { name: "Dirt 5", size: "39GB", year: "2020", img: "pic/dirt5.jpg" },
    { name: "Need for Speed™ Heat", size: "31GB", year: "2019", img: "pic/nfsheat.jpg" },
    { name: "Burnout™ Paradise Remastered", size: "7GB", year: "2018", img: "pic/burnout.jpg" }
],

fps: [
    { name: "Metal Gear Solid Δ: SNAKE EATER", size: "94GB", year: "2025", img: "pic/metalgearsolid.jpg" },
    { name: "Call of Duty®: Black Ops 6", size: "49GB", year: "2024", img: "pic/codblackops6.jpg" },
    { name: "Call of Duty®: Vanguard", size: "81GB", year: "2023", img: "pic/codvanguard.jpg" },
    { name: "Call of Duty®: Modern Warfare® III", size: "50GB", year: "2023", img: "pic/codwarfare3.jpg" },
    { name: "Call of Duty®: Black Ops Cold War", size: "159GB", year: "2023", img: "pic/codcoldwar.jpg" },
    { name: "Company of Heroes 3", size: "30GB", year: "2023", img: "pic/company3.jpg" },
    { name: "Call of Duty®: Modern Warfare® II", size: "27GB", year: "2022", img: "pic/codwarfare2.jpg" },
    { name: "Far Cry 6", size: "150GB", year: "2021", img: "pic/farcry6.png" },
    { name: "Mass Effect™: Andromeda", size: "53GB", year: "2017", img: "pic/masseffect.jpeg" },
    { name: "Sniper Ghost Warrior 3", size: "58GB", year: "2017", img: "pic/sniper3.jpg" },
    { name: "Call of Duty®: Ghosts", size: "30GB", year: "2014", img: "pic/codghosts.jpg" }
],

strategy: [
    { name: "Roadcraft", size: "67GB", year: "2025", img: "pic/roadcraft.jpg" },
    { name: "WWE 2K25", size: "91GB", year: "2025", img: "pic/wwe2k25.jpg" },
    { name: "Grounded 2", size: "30GB", year: "2025", img: "pic/grounded2.jpg" },
    { name: "PEAK", size: "8GB", year: "2025", img: "pic/peak.jpg" },
    { name: "Five Nights at Freddy's: Secret of the Mimic", size: "19GB", year: "2025", img: "pic/fnafmimic.jpg" },
    { name: "WWE 2K24", size: "95GB", year: "2024", img: "pic/wwe2k24.jpg" },
    { name: "World War Z", size: "62GB", year: "2021", img: "pic/wwz.jpg" },
    { name: "It Takes Two", size: "45GB", year: "2021", img: "pic/ittakes2.jpg" },
    { name: "The Sims 4", size: "73GB", year: "2014", img: "pic/sims4.jpg" },
    { name: "Euro Truck Simulator 2", size: "32GB", year: "2012", img: "pic/eurotruck.jpg" }
],

emulator: [
    // PS2 GAMES
    { name: "God of War II", size: "7GB", year: "2007", img: "pic/emugow2.jpg", console: "PS2" },
    { name: "Need for Speed Most Wanted", size: "3GB", year: "2005", img: "pic/emunfsmw.jpg", console: "PS2" },
    { name: "Tekken 5", size: "4GB", year: "2005", img: "pic/emutekken5.jpg", console: "PS2" },
    { name: "Gran Turismo 4", size: "1GB", year: "2005", img: "pic/emugt4.jpg", console: "PS2" },
    { name: "Sengoku Basara 2", size: "4GB", year: "2007", img: "pic/emubasara2.jpg", console: "PS2" },
    { name: "Dragon Ball Z: Budokai Tenkaichi 3", size: "2GB", year: "2007", img: "pic/emudbz3.jpg", console: "PS2" },
    { name: "Devil May Cry 3 – Dante's Awakening", size: "3GB", year: "2005", img: "pic/emudmc3.jpg", console: "PS2" },
    { name: "Guitar Hero III – Legends of Rock", size: "3GB", year: "2007", img: "pic/emuguitarhero.jpg", console: "PS2" },
    { name: "Ben 10 – Alien Force", size: "2GB", year: "2008", img: "pic/emuben10.jpg", console: "PS2" },
    { name: "Dynasty Warriors 5", size: "3GB", year: "2005", img: "pic/emudynasty5.jpg", console: "PS2" },
    { name: "Marvel vs. Capcom 2", size: "1GB", year: "2002", img: "pic/emumarvelcap2.jpg", console: "PS2" },
    { name: "Hyper Street Fighter II: The Anniversary Edition", size: "2GB", year: "2004", img: "pic/emucapcom.png", console: "PS2" },
    { name: "Burnout Dominator", size: "2GB", year: "2007", img: "pic/emuburnout.jpg", console: "PS2" },
    { name: "Naruto Shippuden – Ultimate Ninja 4", size: "4GB", year: "2009", img: "pic/emunaruto.jpg", console: "PS2" },
    { name: "Bloody Roar 4", size: "2GB", year: "2004", img: "pic/emubloody4.jpg", console: "PS2" },
    { name: "Tony Hawk's Pro Skater 3", size: "3GB", year: "2001", img: "pic/emutonyhawk.jpg", console: "PS2" },
    
    // PSP GAMES
    { name: "God of War Ghost of Sparta", size: "1GB", year: "2010", img: "pic/emugowghost.jpg", console: "PSP" },
    { name: "God of War Chains of Olympus", size: "1GB", year: "2008", img: "pic/emugowchain.jpg", console: "PSP" },
    { name: "Naruto Shippuden Ultimate Ninja Heroes 3", size: "1GB", year: "2013", img: "pic/emunaruto3.jpg", console: "PSP" },
    { name: "Tekken Dark Resurrection", size: "1GB", year: "2006", img: "pic/emutekkendark.jpg", console: "PSP" },
    { name: "Ben 10 Protector of Earth", size: "500MB", year: "2007", img: "pic/emuben10pro.png", console: "PSP" },
    { name: "Dragon Ball Z Tenkaichi Tag Team", size: "1GB", year: "2010", img: "pic/emudbztag.jpg", console: "PSP" },
    { name: "Naruto Shippuden Ultimate Ninja Impact", size: "1GB", year: "2003", img: "pic/emunarutoimpact.jpg", console: "PSP" },
    { name: "Fight Night Round 3", size: "500MB", year: "2006", img: "pic/emufightnight.jpg", console: "PSP" },
    { name: "Daxter", size: "1GB", year: "2006", img: "pic/emudaxter.jpg", console: "PSP" },
    { name: "Grand Theft Auto Chinatown Wars", size: "400MB", year: "2007", img: "pic/emugtachina.jpg", console: "PSP" },
    { name: "Dragon Ball Z Shin Budokai", size: "400MB", year: "2006", img: "pic/emudbzshin.jpg", console: "PSP" },
    { name: "Dragon Ball Z Shin Budokai 2", size: "500MB", year: "2007", img: "pic/emudbzshin2.png", console: "PSP" },
    { name: "Kingdom Hearts Birth by Sleep", size: "1GB", year: "2011", img: "pic/emukingdom.png", console: "PSP" },
    { name: "Marvel Ultimate Alliance", size: "1GB", year: "2006", img: "pic/emumarvelall.jpg", console: "PSP" },
    { name: "Marvel Ultimate Alliance 2", size: "1GB", year: "2009", img: "pic/emumarvelall2.jpg", console: "PSP" },
    { name: "Ben 10 Cosmic Destruction", size: "700MB", year: "2010", img: "pic/emuben10cosmic.jpg", console: "PSP" },
    { name: "NBA 2K12", size: "800MB", year: "2011", img: "pic/emnba2k11.png", console: "PSP" },
    { name: "Final Fantasy IV", size: "800MB", year: "2011", img: "pic/emuff4.jpg", console: "PSP" },
    { name: "Monster Hunter Freedom 2", size: "700MB", year: "2007", img: "pic/emumh2free.jpg", console: "PSP" },
    { name: "Patapon 3", size: "400MB", year: "2011", img: "pic/emupatapon.png", console: "PSP" },
    { name: "Harvest Moon Hero of Leaf Valley", size: "200MB", year: "2009", img: "pic/emuharvest.jpg", console: "PSP" },
    { name: "Undead Knights", size: "200MB", year: "2009", img: "pic/emuundead.jpg", console: "PSP" },
    { name: "Marvel Nemesis Rise of the Imperfects", size: "100MB", year: "2005", img: "pic/emumarvelimp.jpg", console: "PSP" },
    { name: "Dissidia: Final Fantasy", size: "1GB", year: "2009", img: "pic/emudisidia.jpg", console: "PSP" }





]
   
};

const genreIcons = {
    action: "⚔️",
    rpg: "🐉",
    sports: "🏎️",
    fps: "🎯",
    strategy: "♟️", 
    emulator: "🕹️"
};

let currentFilter = 'all';

function renderGames(filter = 'all', searchTerm = '') {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    let totalGames = 0;
    const searchLower = searchTerm.toLowerCase();

    Object.keys(games).forEach(genre => {
        if (filter !== 'all' && filter !== genre) return;

        const filteredGames = games[genre].filter(game => 
            game.name.toLowerCase().includes(searchLower)
        );

        if (filteredGames.length === 0) return;

        totalGames += filteredGames.length;

        const section = document.createElement('div');
        section.className = 'genre-section';

        const genreName = genre.charAt(0).toUpperCase() + genre.slice(1);
        const displayGenre = genreName === 'Fps' ? 'FPS Shooters' : 
                            genreName === 'Rpg' ? 'RPG & Fantasy' :
                            genreName === 'Action' ? 'Action & Adventure' :
                            genreName === 'Sports' ? 'Sports & Racing' :
                            genreName === 'Strategy' ? 'Strategy & Simulation' :
                            genreName === 'Simulation' ? 'Simulation' : 
                            genreName === 'Emulator' ? 'Emulator' : genreName;

        section.innerHTML = `
            <h2 class="genre-title">
                <span class="genre-icon">${genreIcons[genre]}</span>
                ${displayGenre}
            </h2>
            <div class="games-grid" id="${genre}-grid"></div>
        `;

        container.appendChild(section);

        const grid = document.getElementById(`${genre}-grid`);

        if (genre === 'emulator') {
        // Group games by console
        const ps2Games = filteredGames.filter(g => g.console === 'PS2');
        const pspGames = filteredGames.filter(g => g.console === 'PSP');
        
        // PS2 Section
        if (ps2Games.length > 0) {
            const ps2Header = document.createElement('h3');
            ps2Header.className = 'console-header';
            ps2Header.innerHTML = '🎮 PlayStation 2 Games';
            grid.appendChild(ps2Header);
            
            ps2Games.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <img src="${game.img}" alt="${game.name}" class="game-image" loading="lazy">
                    <div class="game-content">
                        <div class="game-name">${game.name}</div>
                        <div class="game-info">Released: ${game.year}</div>
                        <span class="game-size">📦 ${game.size}</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
        
        // PSP Section
        if (pspGames.length > 0) {
            const pspHeader = document.createElement('h3');
            pspHeader.className = 'console-header';
            pspHeader.innerHTML = '🕹️ PlayStation Portable Games';
            grid.appendChild(pspHeader);
            
            pspGames.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <img src="${game.img}" alt="${game.name}" class="game-image" loading="lazy">
                    <div class="game-content">
                        <div class="game-name">${game.name}</div>
                        <div class="game-info">Released: ${game.year}</div>
                        <span class="game-size">📦 ${game.size}</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
        } else {
            // For all other genres, use normal rendering
            filteredGames.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `
                    <img src="${game.img}" alt="${game.name}" class="game-image" loading="lazy">
                    <div class="game-content">
                        <div class="game-name">${game.name}</div>
                        <div class="game-info">Released: ${game.year}</div>
                        <span class="game-size">📦 ${game.size}</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    });

    document.getElementById('gameStats').innerHTML = 
        `Showing <strong>${totalGames}</strong> game${totalGames !== 1 ? 's' : ''}`;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.genre;
        const searchTerm = document.getElementById('searchBox').value;
        renderGames(currentFilter, searchTerm);
    });
});

document.getElementById('searchBox').addEventListener('input', function() {
    renderGames(currentFilter, this.value);
});

renderGames();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️ Light Mode';
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});