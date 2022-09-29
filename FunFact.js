let facts = ["FF1", "FF2", "FF3"];

export function init() {
    getFacts();
}

function getFacts() {
    const FFButton = document.getElementById("funfact");
    const Fact = document.getElementById("Fun Fact");
    FFButton.addEventListener("click", ()=> {
        const randNum = Math.floor(Math.random() * facts.length);
        console.log(randNum);
        Fact.innerText = facts[randNum];
    })
}