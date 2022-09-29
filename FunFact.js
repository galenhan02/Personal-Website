let facts = new Array("FF1", "FF2");

export function init() {
    getFacts();
}

function getFacts() {
    const FFButton = document.getElementById("funfact");
    const Fact = document.getElementById("Fun Fact");
    FFButton.addEventListener("click", ()=> {
        const randNum = Math.floor(Math.random() * facts.length - 1);
        Fact.innerText = facts[randNum];
    })
}