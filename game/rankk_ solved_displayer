// ==UserScript==
// @name       Rankk solved displayer
// @version    0.1
// @description  enter something useful
// @match      http://www.rankk.org
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @copyright  2012+, You
// ==/UserScript==

var getFreshData = false;
var statesObj = {"Really elementary":"4053","Easy Javascript":"3797","Hieroglyphics math":"2062","Python 101":"3379","Hi intruder":"629","The nth term":"2517","Pokemon!":"1195","Easter egg":"1533","Do you paint?":"1541","Hex colour":"703","Java training":"955","Showtime":"616","True or false":"2300","Pyramid payroll I":"819","Basecamp":"1577","Finding factors":"846","Geek quiz":"699","Number of ways":"1189","Equal sums":"818","Unix 101":"1053","Frame of mind":"624","Easy stegano":"1367","Go bananas!":"642","Select now":"255","Weak password":"1344","See through":"486","Anime Underground":"746","Message over":"114","Fisheye":"67","First crypto":"302","Special Agents":"387","Recce":"796","Wordsearch":"150","Lisp I":"542","FTP 101":"786","IRC I":"201","Buried":"679","Degradation":"325","Texnical I":"469","Caesarian ciphers":"365","Bye intruder":"268","Too late":"315","Nothing like home":"57","On time":"141","Stitch me":"281","Peekaboo":"415","Simple l33t":"383","Enormous":"329","Scrambled":"154","Mini challenge":"275","Email forensic":"688","Rubik":"159","Wrong sum":"891","Delta":"153","Rotten":"119","Kiddie Exploit I":"219","Challenge tube":"159","Owned":"184","Blackout I":"491","Shhh":"1236","Yummy!":"805","View me":"1498","Hit the dots!":"1008","Mastermind":"279","Don't blink":"363","Be alert":"668","Prime time":"856","Into the future":"651","HTML encode":"920","Night shift":"129","Hackers' Camp 1A":"443","Intersection":"613","Great you did it!":"457","Sheep and goats":"1297","Newbie PHP coder":"408","Family relations":"303","Now you see it":"121","Nonograms I":"882","Flashy game":"450","Equality":"498","Regex":"496","Find my home":"199","Python 102":"795","Series":"488","Binary dance":"245","Allow me":"267","Artisan's mass":"40","Where is Giza?":"131","Forgetful admin":"34","I hate qwerty":"272","Behind bars":"200","Referer":"461","Shapes":"734","Quotient":"291","Darkness fell":"172","Celestial journey":"152","Hear ye":"63","Bytes arithmetic":"205","Unix 102":"184","222 reasons":"91","Jigsaw":"78","Cryptic phrase":"55","Lisp II":"229","Fragmentary":"57","Numb3rs":"97","FTP 102":"150","Image theft":"299","IRC II":"13","ASM I":"163","Navigate me":"141","Untitled":"212","Onion peeling":"301","Bitten bytes":"216","Hackers' Camp 1B":"533","Hackers' Camp 1C":"186","A compromising image":"250","Hackers' Camp 1D":"164","Did I mension?":"37","A strange recipe":"210","Colour blindness":"85","Hackers' Camp 1E":"104","Twisted word":"44","Hash brown":"127","Picture proof":"68","Binary hip hop":"82","Let's Program 1A":"321","Let's Program 1B":"173","Giza tour":"14","Blimp":"13","Combinations I":"65","Wondrous numbers":"36","Sniffed":"25","See plus plus":"70","Camel programming":"477","Brackets rulez!":"327","Nice try!":"396","A strange word":"179","A dice game":"393","Dogz speak":"143","Wrong labe1s":"115","Hide me":"171","Pseudocode":"250","Sudoku I":"874","Guess the number":"812","Eight commands":"590","Pyramid payroll II":"247","Buggy code":"231","Know the gods":"214","ASM II":"267","Nonsense creatures":"234","Labourer tag":"379","Nonograms II":"617","Hackers' Camp 2A":"103","Snow":"162","Pontifex":"86","The longest word":"254","Hackers' Camp 2B":"274","Musical crypto":"47","A little riddle":"103","Oral crypto":"22","Squeeze me not":"421","Pretty good":"88","Colourful life":"237","Hackers' Camp 2C":"53","Fruity":"174","The Perl way":"78","XORed":"211","Python 103":"122","Regex revisit":"429","Name scores":"341","Siblings":"41","Minesweeper":"134","Pixels":"185","Gibberish":"215","Weak algorithm":"279","Finger":"54","Vote rigging":"28","Hackers' Camp 2D":"70","Ruby the gem":"130","Search and rescue":"168","Golden beetle":"79","Jigsaw II":"104","Did they mean it?":"63","Exorcism":"64","Very Important Mission":"20","A line of three":"36","A broken jar":"118","Number Guessing Theory I":"84","Annihilation":"84","Texnical II":"88","Guess my password":"109","Weight measuring theory":"97","Seventh sense":"20","Hackers' Camp 2E":"64","Signal":"32","Beheaded":"56","Let's Program 2A":"104","Blackout II":"39","OOP":"23","Holy Rankk Transform":"5","Jailbreak":"27","Combinations II":"30","A special browser":"344","The missing Merchant":"244","y0u g0t 0wn3d":"139","Move it":"312","Crypto entrance test":"288","Sudoku II":"268","The Sphinx crypto":"60","grAve roBBers":"186","The rising knight":"183","Count and wonder":"134","First contact":"200","Password created":"69","Gray matter":"240","The Geb spot":"119","Crypt text":"16","The Great Pyramids":"59","Let's analyse":"143","Regex final":"325","Weak algorithm II":"259","Mysterious girl":"76","The Korean hacker":"9","Fences":"133","PHP pwned":"113","High command":"23","Ancient math":"53","Incarnation":"4","The hashing game":"58","Let's beat piracy":"16","Decimated":"13","Dice rolls":"2","Byte swapping":"3","Greedy python":"30","Primeval painting":"12","Incipit Matthaeus":"16","Number Guessing Theory II":"17","The Nonogram Pyramid":"108","Letterboxes":"6","Hippogryph or by foot?":"15","IRC III":"14","Signal to noise":"4","Silent years":"6","Picture proof pro":"17","Let's Program 3A":"67","r7g7b7a7":"17","Meteoroid":"2","Read the signs":"5","Disguise":"1","Universal understanding":"4","Combinations III":"12","Magical":"1","Debris digging":"52","Too slow!":"219","Heavily guarded":"84","Zipped":"91","Blackjack":"66","Chamber door":"146","Play fair dude":"90","Averages":"198","Pinch mark":"127","Convert and count":"159","Best product":"147","Rotation":"178","Spider":"84","Regex ghost":"113","Stronger algorithm":"6","Baa baa blacksheep":"114","M13":"41","Sudoku III":"114","Lisp III":"42","RSA":"27","The even longer word":"79","cipCIPcipherHERher":"20","Hardened EXE":"9","Wordsearch Pro":"90","Dice rolls II":"4","The manuscript":"15","Lottery patterns":"38","Cyclic Redundancy Chase":"5","Write again":"8","Sniffed II":"3","The number e":"136","SQL injection":"76","Linked list":"218","All but one":"174","Ascii art":"172","Hangman":"157","Traversal":"140","Camel ride":"26","Amazing":"137","Batch cracking":"31","Wildlife":"21","Large hashing collider":"5","Time for church":"5","Proxy hunting":"121","Mummified":"27","Eliza speak":"72","Simultaneously":"113","Invisible captcha":"148","The returning knight":"116","Jackpot":"50","Gen8:17":"26","26!":"26","Formless":"58","Meet ToeJam":"7","The odd one":"122","The showdown":"27","Challenge":"Total"} ;

function parseStates(pagesrc){
    items = jQuery(pagesrc).find("#challenges tr");
    mapping = {};
    for(i = items.length-1; i >= 0; i--){
        item = items.eq(i).find("td"); 
        mapping[item[1].innerHTML] = item[2].innerHTML; 
    }
    return mapping;
}

function addSolvedAttr(mapping){
    items = $("#clisting li a");
    for(i=0;i<items.length;i++){items[i].innerHTML += " ("+mapping[items[i].innerHTML]+")"}
}

if (getFreshData){
    $.ajax ( {
        type:       'GET',
        url:        'http://www.rankk.org/stats.py',
        dataType:   'HTML',
        success:    function (pagesrc) {
            statesObj = parseStates (pagesrc) || statesObj;
            addSolvedAttr(statesObj);
            console.log(JSON.stringify(statesObj)); //replace the definition of statesObj
        },
        failure:    function () {
            addSolvedAttr(statesObj);
        }
    } );
}
else{
    addSolvedAttr(statesObj);
}
    
    
