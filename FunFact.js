let facts = ["My favorite song at the moment is Do Re Mi by Seventeen", "I love playing the ukulele", "A game I enjoy playing is called TFT"];

export function init() {
    getFacts();
}

function getFacts() {
    const FFButton = document.getElementById("funfact");
    const Fact = document.getElementById("Fun Fact");
    FFButton.addEventListener("click", ()=> {
        var factIndex = 0;
        Fact.innerText = facts[factIndex % facts.length];
        index++;
    })
}