// this is  Anime


function openVideo() {
    window.open('https://hianime.to/watch/one-piece-100?ep=2142', '_blank');
}

function openVideo2() {
    window.open('https://hianime.to/watch/naruto-shippuden-355', '_blank');
}
function openVideo3() {
    window.open('https://hianime.to/watch/jujutsu-kaisen-tv-534?ep=10789', '_blank');
}
function openVideo4() {
    window.open('https://hianime.to/watch/dragon-ball-509?ep=10218', '_blank');
}
function openVideo5() {
    window.open('https://hianime.to/watch/demon-slayer-kimetsu-no-yaiba-47', '_blank');
}
function openVideo6() {
    window.open('https://hianime.to/watch/attack-on-titan-112?ep=3303', '_blank');
}


// this is Top Anime


function openVideo7() {
    window.open('https://hianime.to/watch/fullmetal-alchemist-308?ep=5791', '_blank');
}
function openVideo8() {
    window.open('https://hianime.to/watch/hunter-x-hunter-128?ep=3661', '_blank');
}
function openVideo9() {
    window.open('https://hianime.to/watch/death-note-60?ep=1464', '_blank');
}

// this is  Anime Movies



function openVideo10() {
    window.open('https://hianime.to/watch/the-last-naruto-the-movie-882?ep=57995', '_blank');
}
function openVideo11() {
    window.open('https://hianime.to/watch/dragon-ball-super-broly-387?ep=58063', '_blank');
}
function openVideo12() {
    window.open('https://hianime.to/watch/jujutsu-kaisen-0-movie-17763', '_blank');
}
function openVideo13() {
    window.open('https://hianime.to/watch/kimetsu-no-yaiba-movie-mugen-ressha-hen-15763', '_blank');
}
function openVideo14() {
    window.open('https://hianime.to/watch/gintama-the-final-15713?ep=78997', '_blank');
}
function openVideo15() {
    window.open('https://hianime.to/watch/weathering-with-you-111?ep=71785', '_blank');
}



// this is for filtering

function searchAnime() {
    var input, filter, card, cards, h3, p, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase(); 

    
    var allCards = document.querySelectorAll(".peace");

    for (i = 0; i < allCards.length; i++) {
        card = allCards[i];
        
       
        h3 = card.querySelector("h3"); 
        p = card.querySelectorAll("p");

        txtValue = '';
        if (h3) {
            txtValue += h3.textContent || h3.innerText; 
        p.forEach(function(paragraph) {
            txtValue += paragraph.textContent || paragraph.innerText; 
        });

        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

}
document.getElementById("searchInput").addEventListener("input", searchAnime);
