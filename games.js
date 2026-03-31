const games = {
    action: [
    { name: "Hollow Knight: Silksong", size: "10GB", year: "2025", img: "pic/silksong.jpg" },
    { name: "Silent Hill F", size: "50GB", year: "2025", img: "pic/silenthill.jpg" },
    { name: "Dying Light: The Beast", size: "75GB", year: "2025", img: "pic/dyinglight.jpg" },
    { name: "The Last of Us™ Part II Remastered", size: "120GB", year: "2025", img: "pic/thelastofus2.jpg" },
    { name: "Split Fiction", size: "90GB", year: "2025", img: "pic/splitfiction.jpg" },
    { name: "Grand Theft Auto V Enhanced", size: "100GB", year: "2025", img: "pic/gtav.png" },
    { name: "BLEACH Rebirth of Souls", size: "75GB", year: "2025", img: "pic/bleach.jpg" },
    { name: "Days Gone", size: "65GB", year: "2025", img: "pic/daysgone.jpg" },
    { name: "Marvel's Spider-Man 2", size: "140GB", year: "2025", img: "pic/spiderman2.jpg" },
    { name: "Ninja Gaiden 2 Black", size: "85GB", year: "2025", img: "pic/ninja2.jpg" },
    { name: "Dragon Ball: Sparking! ZERO", size: "30GB", year: "2024", img: "pic/dragonballsparking.jpg" },
    { name: "Tekken 8", size: "125GB", year: "2024", img: "pic/tekken8.jpg" },
    { name: "Suicide Squad: Kill the Justice League", size: "140GB", year: "2024", img: "pic/suicidesq.jpg" },
    { name: "Red Dead Redemption", size: "10GB", year: "2024", img: "pic/rdr1.jpg" },
    { name: "Red Dead Redemption 2", size: "120GB", year: "2024", img: "pic/rdr2.png" },
    { name: "Ghost of Tsushima", size: "70GB", year: "2024", img: "pic/ghost.jpg" },
    { name: "Jujutsu Kaisen Cursed Clash", size: "10GB", year: "2024", img: "pic/jjkcursed.jpg" },
    { name: "Hogwarts Legacy", size: "95GB", year: "2023", img: "pic/hogwarts.jpg" },
    { name: "Dead Island 2", size: "75GB", year: "2023", img: "pic/deadisl2.jpg" },
    { name: "Naruto x Boruto Ultimate Ninja Storm Connections", size: "30GB", year: "2023", img: "pic/naturoconnection.jpg" },
    { name: "Resident Evil 4 Remake", size: "70GB", year: "2023", img: "pic/re4.jpg" },
    { name: "Star Wars Jedi: Survivor", size: "135GB", year: "2023", img: "pic/starwarsjedi.jpg" },
    { name: "Marvel's Avengers", size: "185GB", year: "2023", img: "pic/avengers.jpg" },
    { name: "Ghostrunner 2", size: "70GB", year: "2023", img: "pic/ghostrunner2.jpg" },
    { name: "One Piece Odyssey", size: "30GB", year: "2023", img: "pic/onepieceody.jpg" },
    { name: "The Last of Us Part I", size: "80GB", year: "2023", img: "pic/thelastofus1.jpg" },
    { name: "Hitman World of Assassination", size: "80GB", year: "2022", img: "pic/hitman.jpg" },
    { name: "Marvel's Spider-Man Remastered", size: "80GB", year: "2022", img: "pic/spidermanrem.jpg" },
    { name: "Marvel's Spider-Man Miles Morales", size: "60GB", year: "2022", img: "pic/spidermanmiles.jpg" },
    { name: "The Callisto Protocol", size: "100GB", year: "2022", img: "pic/callisto.jpg" },
    { name: "Ghostwire: Tokyo", size: "20GB", year: "2022", img: "pic/ghosttokyo.jpg" },
    { name: "UNCHARTED: Legacy of Thieves", size: "125GB", year: "2022", img: "pic/uncharted.jpg" },
    { name: "Guardians of the Galaxy", size: "80GB", year: "2021", img: "pic/guardian.jpg" },
    { name: "Little Nightmares II", size: "25GB", year: "2021", img: "pic/little2.png" },
    { name: "Watch Dogs Legion", size: "110GB", year: "2020", img: "pic/watchdog.png" },
    { name: "Assassin's Creed Valhalla", size: "160GB", year: "2020", img: "pic/acvalhal.jpg" },
    { name: "Assassin's Creed Mirage", size: "70GB", year: "2020", img: "pic/acmirage.jpg" },
    { name: "One Piece Pirate Warriors 4", size: "30GB", year: "2020", img: "pic/op4.jpg" },
    { name: "Dragon Ball Z : Kakarot", size: "50GB", year: "2020", img: "pic/dbzkakarot.jpg" },
    { name: "Devil May Cry 5", size: "40GB", year: "2020", img: "pic/dmc5.jpg" },
    { name: "Mortal Kombat 11", size: "150GB", year: "2019", img: "pic/mortalkombat11.png" },
    { name: "Jump Force", size: "25GB", year: "2019", img: "pic/jump.jpg" },
    { name: "Assassin's Creed Odyssey", size: "115GB", year: "2018", img: "pic/acoddysey.jpg" },
    { name: "Dragon Ball Fighter Z", size: "10GB", year: "2018", img: "pic/dbzfighter.jpg" },
    { name: "Little Nightmares", size: "5GB", year: "2017", img: "pic/little1.jpg" },
    { name: "Injustice 2", size: "45GB", year: "2017", img: "pic/injustice2.jpg" },
    { name: "Dragon Ball: Xenoverse 2", size: "30GB", year: "2016", img: "pic/dbzxeno2.jpg" },
    { name: "God of War", size: "65GB", year: "2022", img: "pic/gow.jpg" },
    { name: "God of War Ragnarok", size: "180GB", year: "2024", img: "pic/gowragna.jpg" },
    { name: "Horizon Zero Dawn™ Remastered", size: "125GB", year: "2024", img: "pic/horizonzero.jpg" },
    { name: "Horizon Forbidden West", size: "150GB", year: "2022", img: "pic/horizonwest.jpg" },
    { name: "Resident Evil Requiem", size: "80GB", year: "2026", img: "pic/rerequiem.jpg" },
    { name: "Assassin’s Creed Shadows", size: "165GB", year: "2025", img: "pic/asscreedshadows.png" },
    { name: "Death Stranding 2: On the Beach", size: "125GB", year: "2026", img: "pic/deathstranding2.jpg" },
    { name: "MY HERO ACADEMIA: All’s Justice", size: "15GB", year: "2026", img: "pic/mhaalljustice.jpg" },

 
],

rpg: [
    { name: "Clair Obscur: Expedition 33", size: "45GB", year: "2025", img: "pic/expedition33.jpg" },
    { name: "Avowed", size: "75GB", year: "2025", img: "pic/avowed.jpg" },
    { name: "The Elder Scrolls IV: Oblivion", size: "125GB", year: "2025", img: "pic/obilivion.jpg" },
    { name: "Final Fantasy VII Rebirth", size: "160GB", year: "2025", img: "pic/ff7reb.jpg" },
    { name: "Hades II", size: "10GB", year: "2025", img: "pic/hades2.jpg" },
    { name: "Palworld", size: "30GB", year: "2024", img: "pic/palworld.jpg" },
    { name: "Final Fantasy XVI", size: "155GB", year: "2024", img: "pic/ff15.jpg" },
    { name: "Sword Art Online Fractured Daydream", size: "45GB", year: "2024", img: "pic/swordart.jpg" },
    { name: "Monster Hunter Stories 3: Twisted Reflection", size: "35GB", year: "2026", img: "pic/mhstories.jpg" },
    { name: "Dragon's Dogma 2", size: "65GB", year: "2024", img: "pic/drdogma2.jpg" },
    { name: "Gundam Breaker 4", size: "10GB", year: "2024", img: "pic/gundam4.jpg" },
    { name: "Baldur's Gate 3", size: "160GB", year: "2023", img: "pic/baldrs3.jpg" },
    { name: "Elden Ring", size: "70GB", year: "2022", img: "pic/eldenring.jpg" },
    { name: "Cyberpunk 2077", size: "155GB", year: "2020", img: "pic/cyber2077.jpg" },
    { name: "Mortal Shell", size: "15GB", year: "2020", img: "pic/mortalshell.jpg" },
    { name: "Monster Hunter: World", size: "55GB", year: "2018", img: "pic/mhworld.jpg" },
    { name: "The Witcher 3: Wild Hunt", size: "90GB", year: "2015", img: "pic/witcher3.jpg" },
    { name: "Monster Hunter Wilds", size: "150GB", year: "2025", img: "pic/monsterhunterwild.png" },






],


sports: [
    { name: "Expeditions: A MudRunner Game", size: "35GB", year: "2025", img: "pic/expeditionmudrunner.jpg" },
    { name: "Tony Hawk's™ Pro Skater™ 3 + 4", size: "55GB", year: "2025", img: "pic/tonyhawks.jpg" },
    { name: "Wreckfest 2", size: "15GB", year: "2025", img: "pic/wreckfest2.jpg" },
    { name: "Assetto Corsa EVO", size: "40GB", year: "2025", img: "pic/asseto.jpg" },
    { name: "CarX Street", size: "20GB", year: "2024", img: "pic/carxstreet.jpg" },
    { name: "Monster Jam™ Showdown", size: "15GB", year: "2024", img: "pic/monsterjam.jpg" },
    { name: "Ride 5", size: "50GB", year: "2023", img: "pic/ride5.jpg" },
    { name: "Forza Motorsport", size: "120GB", year: "2023", img: "pic/forzamotor.jpg" },
    { name: "FIFA 23", size: "65GB", year: "2022", img: "pic/fifa23.jpg" },
    { name: "Forza Horizon 5", size: "180GB", year: "2021", img: "pic/forza5.jpg" },
    { name: "NBA 2K22", size: "120GB", year: "2021", img: "pic/nba2k22.png" },
    { name: "Dirt 5", size: "40GB", year: "2020", img: "pic/dirt5.jpg" },
    { name: "Need for Speed™ Heat", size: "35GB", year: "2019", img: "pic/nfsheat.jpg" },
    { name: "Burnout™ Paradise Remastered", size: "7GB", year: "2018", img: "pic/burnout.jpg" },
    { name: "F1® 25", size: "85", year: "2025", img: "pic/f125iconic.png" },
    { name: "NBA 2K26", size: "100GB", year: "2025", img: "pic/nba2k26.jpeg" },
    { name: "Ride 6", size: "55GB", year: "2026", img: "pic/ride6.jpg" },



],

fps: [
    { name: "Warhammer 40,000: Space Marine 2", size: "160GB", year: "2024", img: "pic/warhammerspace.jpg" },
    { name: "Metal Gear Solid Δ: SNAKE EATER", size: "95GB", year: "2025", img: "pic/metalgearsolid.jpg" },
    { name: "Call of Duty®: Black Ops 6", size: "49GB", year: "2024", img: "pic/codblackops6.jpg" },
    { name: "Call of Duty®: Vanguard", size: "80GB", year: "2023", img: "pic/codvanguard.jpg" },
    { name: "Call of Duty®: Modern Warfare® III", size: "50GB", year: "2023", img: "pic/codwarfare3.jpg" },
    { name: "Call of Duty®: Black Ops Cold War", size: "160GB", year: "2023", img: "pic/codcoldwar.jpg" },
    { name: "Company of Heroes 3", size: "30GB", year: "2023", img: "pic/company3.jpg" },
    { name: "Call of Duty®: Modern Warfare® II", size: "30GB", year: "2022", img: "pic/codwarfare2.jpg" },
    { name: "Far Cry 6", size: "150GB", year: "2021", img: "pic/farcry6.png" },
    { name: "Mass Effect™: Andromeda", size: "55GB", year: "2017", img: "pic/masseffect.jpeg" },
    { name: "Sniper Ghost Warrior 3", size: "60GB", year: "2017", img: "pic/sniper3.jpg" },
    { name: "Call of Duty®: Ghosts", size: "30GB", year: "2014", img: "pic/codghosts.jpg" },
    { name: "Borderlands 4", size: "100GB", year: "2025", img: "pic/borderlands4.jpg" },

],

strategy: [
    { name: "It Takes Two", size: "45GB", year: "2021", img: "pic/ittakes2.jpg" },
    { name: "WWE 2k26", size: "130GB", year: "2026", img: "pic/wwe2k26.jpeg" },
    

],

emulator: [
    // PS3 GAMES
    { name: "God of War III", size: "34GB", year: "2010", img: "pic/emugow3.jpg", console: "PS3" },
    { name: "God of War Collection", size: "22GB", year: "2009", img: "pic/emugowcollect.jpg", console: "PS3" },
    { name: "Gran Turismo 6", size: "14GB", year: "2013", img: "pic/emugrantu.png", console: "PS3" },
    { name: "Uncharted 3: Drake's Deception", size: "39GB", year: "2011", img: "pic/emuncharted.jpg", console: "PS3" },
    { name: "Tekken Tag Tournament 2", size: "17GB", year: "2012", img: "pic/emutekkentag.jpg", console: "PS3" },
    { name: "UFC Undisputed 3", size: "22GB", year: "2012", img: "pic/emuufc3.jpg", console: "PS3" },
    { name: "Metal Gear Solid 4: Guns of the Patriots", size: "25GB", year: "2008", img: "pic/emumetalgear4.jpg", console: "PS3" },
    { name: "Street Fighter X Tekken", size: "13GB", year: "2012", img: "pic/emusfxtekken.jpg", console: "PS3" },
    { name: "Watch Dogs", size: "14GB", year: "2014", img: "pic/emuwatch.jpg", console: "PS3" },
    { name: "Dante's Inferno", size: "5GB", year: "2010", img: "pic/emudante.jpg", console: "PS3" },
    { name: "Resident Evil 6", size: "9GB", year: "2012", img: "pic/emure6.jpg", console: "PS3" },
    { name: "Sleeping Dogs", size: "5GB", year: "2012", img: "pic/emusleeping.jpg", console: "PS3" },
    { name: "Naruto Shippuden: Ultimate Ninja Storm Revolution", size: "7GB", year: "2014", img: "pic/emunarutorevo.png", console: "PS3" },
    { name: "Devil May Cry", size: "6GB", year: "2013", img: "pic/emudmc.jpg", console: "PS3" },
    { name: "Dragon Ball: Xenoverse", size: "6GB", year: "2015", img: "pic/emudbzxeno.jpg", console: "PS3" },
    { name: "Sengoku Basara 4 Sumeragi", size: "18GB", year: "2015", img: "pic/emubasara4.png", console: "PS3" },

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

// ─── HELPERS ────────────────────────────────────────────────
const genreIcons = {
    action: "⚔️", rpg: "🐉", sports: "🏎️",
    fps: "🎯", strategy: "♟️", emulator: "🕹️"
};

function sizeToGB(sizeStr) {
    const s = sizeStr.toUpperCase().trim();
    if (s.endsWith('MB')) return parseFloat(s) / 1024;
    if (s.endsWith('GB')) return parseFloat(s);
    if (s.endsWith('TB')) return parseFloat(s) * 1024;
    return 0;
}

function formatGB(gb) {
    if (gb < 1) return (gb * 1024).toFixed(0) + ' MB';
    if (gb >= 1024) return (gb / 1024).toFixed(2) + ' TB';
    return gb.toFixed(1) + ' GB';
}

// ─── CART STATE ─────────────────────────────────────────────
let cart = [];

function getCartKey(game) {
    return game.name + '|' + (game.console || '');
}

function isInCart(game) {
    return cart.some(g => getCartKey(g) === getCartKey(game));
}

function addToCart(game) {
    if (isInCart(game)) {
        removeFromCart(game);
        return;
    }
    cart.push(game);
    refreshCart();
    refreshAllCards();
}

function removeFromCart(game) {
    cart = cart.filter(g => getCartKey(g) !== getCartKey(game));
    refreshCart();
    refreshAllCards();
}

function clearCart() {
    cart = [];
    refreshCart();
    refreshAllCards();
}

function refreshAllCards() {
    document.querySelectorAll('.game-card').forEach(card => {
        const name = card.dataset.name;
        const cons = card.dataset.console || '';
        const key = name + '|' + cons;
        const inCart = cart.some(g => getCartKey(g) === key);
        card.classList.toggle('in-cart', inCart);
        const overlayText = card.querySelector('.game-image-wrapper .cart-hover-overlay span');
        if (overlayText) overlayText.textContent = inCart ? '✓ Remove' : '🛒 Add to Cart';
    });
}

function refreshCart() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotalSize');
    const driveUsedEl = document.getElementById('driveUsed');
    const driveBarEl = document.getElementById('driveBarFill');
    const driveRecEl = document.getElementById('driveRecommendation');

    countEl.textContent = cart.length;

    if (cart.length === 0) {
        itemsEl.innerHTML = '<p class="cart-empty">No games added yet.<br>Click on a game card to add it!</p>';
        totalEl.textContent = '0 GB';
        driveUsedEl.textContent = '0 GB';
        driveBarEl.style.width = '0%';
        driveRecEl.textContent = 'Add games to see recommended drive size.';
        return;
    }

    const totalGB = cart.reduce((sum, g) => sum + sizeToGB(g.size), 0);
    totalEl.textContent = formatGB(totalGB);
    driveUsedEl.textContent = formatGB(totalGB);

    // Drive bar — max scale 2TB = 2048GB
    const pct = Math.min((totalGB / 2048) * 100, 100);
    driveBarEl.style.width = pct + '%';

    // Recommendation
    let rec = '';
    if (totalGB <= 400) rec = '✅ Fits on a 500 GB drive';
    else if (totalGB <= 850) rec = '✅ Fits on a 1 TB drive';
    else if (totalGB <= 1750) rec = '✅ Fits on a 2 TB drive';
    else rec = '⚠️ Needs 2+ TB drive';
    driveRecEl.textContent = rec;

    // Render items
    itemsEl.innerHTML = '';
    cart.forEach(game => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${game.img}" alt="${game.name}" class="cart-item-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2264%22><rect width=%2248%22 height=%2264%22 fill=%22%23eee%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2220%22>🎮</text></svg>'">
            <div class="cart-item-info">
                <div class="cart-item-name">${game.name}</div>
                <div class="cart-item-meta">📦 ${game.size} · ${game.year}${game.console ? ' · ' + game.console : ''}</div>
            </div>
            <button class="cart-item-remove" title="Remove">✕</button>
        `;
        div.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(game));
        itemsEl.appendChild(div);
    });
}

function toggleCart() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    panel.classList.toggle('open');
    overlay.classList.toggle('open');
}

function orderViaMessenger() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some games first.');
        return;
    }
    const totalGB = cart.reduce((sum, g) => sum + sizeToGB(g.size), 0);
    const list = cart.map((g, i) => `${i + 1}. ${g.name} (${g.size})`).join('\n');
    const msg = encodeURIComponent(
        `Hi GameVille! I'd like to order these games:\n\n${list}\n\nTotal: ~${formatGB(totalGB)}\n\nPlease let me know the details. Thank you!`
    );
    window.open(`https://m.me/GameVille098?text=${msg}`, '_blank');
}

// ─── SORT FUNCTION ───────────────────────────────────────────
function sortGames(gamesArr, sortVal) {
    const arr = [...gamesArr];
    switch (sortVal) {
        case 'name-asc':  return arr.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc': return arr.sort((a, b) => b.name.localeCompare(a.name));
        case 'year-desc': return arr.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        case 'year-asc':  return arr.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        case 'size-desc': return arr.sort((a, b) => sizeToGB(b.size) - sizeToGB(a.size));
        case 'size-asc':  return arr.sort((a, b) => sizeToGB(a.size) - sizeToGB(b.size));
        default:          return arr;
    }
}

// ─── BADGE COUNTS ────────────────────────────────────────────
function updateBadges() {
    let total = 0;
    Object.keys(games).forEach(genre => {
        const count = games[genre].length;
        total += count;
        const el = document.getElementById('badge-' + genre);
        if (el) el.textContent = count;
    });
    const allEl = document.getElementById('badge-all');
    if (allEl) allEl.textContent = total;
}

// ─── RENDER ─────────────────────────────────────────────────
let currentFilter = 'all';

function renderGames(filter = 'all', searchTerm = '', sortVal = 'default') {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    let totalGames = 0;
    const searchLower = searchTerm.toLowerCase();

    Object.keys(games).forEach(genre => {
        if (filter !== 'all' && filter !== genre) return;

        let filteredGames = games[genre].filter(game =>
            game.name.toLowerCase().includes(searchLower)
        );

        if (filteredGames.length === 0) return;

        // Sort — for emulator, sort within each console group
        if (genre !== 'emulator') {
            filteredGames = sortGames(filteredGames, sortVal);
        }

        totalGames += filteredGames.length;

        const section = document.createElement('div');
        section.className = 'genre-section';

        const displayGenre =
            genre === 'fps'      ? 'FPS Shooters' :
            genre === 'rpg'      ? 'RPG & Fantasy' :
            genre === 'action'   ? 'Action & Adventure' :
            genre === 'sports'   ? 'Sports & Racing' :
            genre === 'strategy' ? 'Strategy & Simulation' :
            genre === 'emulator' ? 'Emulator' :
            genre.charAt(0).toUpperCase() + genre.slice(1);

        section.innerHTML = `
            <h2 class="genre-title">
                <span class="genre-icon">${genreIcons[genre]}</span>
                ${displayGenre}
            </h2>
            <div class="games-grid" id="${genre}-grid"></div>
        `;
        container.appendChild(section);
        const grid = document.getElementById(`${genre}-grid`);

        function createCard(game) {
            const card = document.createElement('div');
            card.className = 'game-card' + (isInCart(game) ? ' in-cart' : '');
            card.dataset.name = game.name;
            card.dataset.console = game.console || '';

            const isNew = parseInt(game.year) >= 2025;
            const inCart = isInCart(game);

            card.innerHTML = `
                ${isNew ? '<span class="new-badge">New</span>' : ''}
                <div class="game-image-wrapper">
                    <img 
                        src="${game.img}" 
                        alt="${game.name}" 
                        class="game-image"
                        loading="lazy"
                    >
                    <div class="cart-hover-overlay">
                        <span>${inCart ? '✓ Remove' : '🛒 Add to Cart'}</span>
                        <small>${game.size}</small>
                    </div>
                </div>
                <div class="game-content">
                    <div class="game-name">${game.name}</div>
                    <div class="game-info">Released: ${game.year}</div>
                    <span class="game-size">📦 ${game.size}</span>
                </div>
            `;

            // Image lazy load with skeleton
            const img = card.querySelector('.game-image');
            const wrapper = card.querySelector('.game-image-wrapper');
            img.addEventListener('load', () => {
                img.classList.add('img-loaded');
                wrapper.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                wrapper.classList.add('loaded');
                wrapper.innerHTML = '<div class="img-error-placeholder">🎮</div>';
            });

            // Click card body → open modal; hover image overlay → cart
            card.addEventListener('click', (e) => {
                if (e.target.closest('.game-image-wrapper')) return;
                openModal(game, genre);
            });
            const overlay = card.querySelector('.game-image-wrapper .cart-hover-overlay');
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToCart(game);
                });
            }

            return card;
        }

        if (genre === 'emulator') {
            const consoles = ['PS3', 'PS2', 'PSP'];
            const headers = {
                PS3: '🎮 PlayStation 3 Games',
                PS2: '🎮 PlayStation 2 Games',
                PSP: '🕹️ PlayStation Portable Games'
            };
            consoles.forEach(cons => {
                let consGames = filteredGames.filter(g => g.console === cons);
                if (consGames.length === 0) return;
                consGames = sortGames(consGames, sortVal);
                const h3 = document.createElement('h3');
                h3.className = 'console-header';
                h3.innerHTML = headers[cons];
                grid.appendChild(h3);
                consGames.forEach(game => grid.appendChild(createCard(game)));
            });
        } else {
            filteredGames.forEach(game => grid.appendChild(createCard(game)));
        }
    });

    document.getElementById('gameStats').innerHTML =
        `Showing <strong>${totalGames}</strong> game${totalGames !== 1 ? 's' : ''}`;
}

// ─── EVENT LISTENERS ─────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.genre;
        renderGames(currentFilter, document.getElementById('searchBox').value, document.getElementById('sortSelect').value);
    });
});

document.getElementById('searchBox').addEventListener('input', function () {
    renderGames(currentFilter, this.value, document.getElementById('sortSelect').value);
});

document.getElementById('sortSelect').addEventListener('change', function () {
    renderGames(currentFilter, document.getElementById('searchBox').value, this.value);
});

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
});

// ─── DARK MODE ───────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️ Light Mode';
}

themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

function buildSysReqRows(data, containerId) {
    const el = document.getElementById(containerId);
    const labels = { os: '🖥 OS', cpu: '⚙️ CPU', ram: '🧠 RAM', gpu: '🎮 GPU', storage: '💾 Storage' };
    el.innerHTML = '';
    Object.entries(labels).forEach(([key, label]) => {
        if (!data[key]) return;
        const row = document.createElement('div');
        row.className = 'sysreq-row';
        row.innerHTML = `<span class="sysreq-label">${label}</span><span class="sysreq-value">${data[key]}</span>`;
        el.appendChild(row);
    });
}

// ─── MODAL ───────────────────────────────────────────────────
let modalCurrentGame = null;
let modalCurrentGenre = null;

const genreDisplayNames = {
    action: 'Action & Adventure', rpg: 'RPG & Fantasy',
    sports: 'Sports & Racing', fps: 'FPS Shooters',
    strategy: 'Strategy & Simulation', emulator: 'Emulator'
};

function openModal(game, genre) {
    modalCurrentGame = game;
    modalCurrentGenre = genre;

    const details = (typeof gameDetails !== 'undefined' && gameDetails[game.name]) || {};
    const desc = details.desc || 'No description available yet. Check back soon!';
    const tags = details.tags || [];

    // Fill basic info
    document.getElementById('modalTitle').textContent = game.name;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalYear').textContent = game.year;
    document.getElementById('modalSize').textContent = game.size;
    document.getElementById('modalGenre').textContent = genreDisplayNames[genre] || genre;

    // Cover image
    const cover = document.getElementById('modalCover');
    cover.src = game.img;
    cover.alt = game.name;
    cover.onerror = () => { cover.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="220"><rect width="160" height="220" fill="%23333"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40">🎮</text></svg>'; };

    // Tags
    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = (details.tags || []).map(t => `<span class="modal-tag">${t}</span>`).join('');

    // System Requirements
    const sysreqBlock = document.getElementById('sysreqBlock');
    if (details.sysreq) {
        sysreqBlock.style.display = 'block';
        buildSysReqRows(details.sysreq.min || {}, 'sysreqMin');
        buildSysReqRows(details.sysreq.rec || {}, 'sysreqRec');
    } else {
        sysreqBlock.style.display = 'none';
    }

    // Cart button
    updateModalCartBtn();

    // Open
    document.getElementById('modalOverlay').classList.add('open');
    const modal = document.getElementById('gameModal');
    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.style.overflow = 'hidden';
}

function updateModalCartBtn() {
    if (!modalCurrentGame) return;
    const inCart = isInCart(modalCurrentGame);
    const label = inCart ? '✓ Remove from Cart' : '🛒 Add to Cart';

    // Desktop button (left column)
    const btn = document.getElementById('modalCartBtn');
    btn.textContent = label;
    btn.classList.toggle('in-cart-btn', inCart);
    btn.onclick = () => { addToCart(modalCurrentGame); updateModalCartBtn(); };

    // Mobile button (right column)
    const mobileBtn = document.getElementById('modalCartBtnMobile');
    if (mobileBtn) {
        mobileBtn.textContent = label;
        mobileBtn.style.background = inCart
            ? 'linear-gradient(135deg, #27ae60, #2ecc71)'
            : 'linear-gradient(135deg, #f39c12, #e67e22)';
        mobileBtn.style.display = window.innerWidth <= 768 ? 'block' : 'none';
        mobileBtn.onclick = () => { addToCart(modalCurrentGame); updateModalCartBtn(); };
    }
}

function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('open');
    document.getElementById('modalOverlay').classList.remove('open');
    setTimeout(() => { modal.style.display = 'none'; }, 280);
    document.body.style.overflow = '';
}

// Keyboard nav — Escape to close modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('gameModal');
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
});

// ─── INIT ────────────────────────────────────────────────────
updateBadges();
renderGames();
refreshCart();