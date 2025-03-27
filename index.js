function quote(Dict, Auteur, Date, Couleurf, Couleurp, Origine) {
    const h1H = document.createElement("h1");
    const p1P = document.createElement("p");
    const p2P = document.createElement("p");
    const ran = document.createElement("button");
    const butt = document.createElement("div");

    h1H.classList.add("un");
    p1P.classList.add("par1");
    p2P.classList.add("par2");
    ran.classList.add("random");
    butt.appendChild(ran);

    h1H.textContent = Dict;
    p1P.textContent = `Auteur: ${Auteur}`;
    p2P.textContent = Date ? `Date: ${Date}` : "";
    ran.textContent = "Changer la citation";

    h1H.style.color = Couleurp;
    document.body.style.backgroundColor = Couleurf;
    ran.style.backgroundColor = Couleurp;

    document.body.appendChild(h1H);
    document.body.appendChild(p1P);
    if (Date) document.body.appendChild(p2P);
    document.body.appendChild(butt);

    ran.addEventListener("click", () => {
        changeQuote();
    });

    return { h1H, p1P, p2P, ran };
}

function change() {


    h1H.textContent = randomQuote.Dict;
    p1P.textContent = `Auteur: ${randomQuote.Auteur}`;
    p2P.textContent = randomQuote.Date ? `Date: ${randomQuote.Date}` : "";
    h1H.style.color = randomQuote.Couleurp;
    document.body.style.backgroundColor = randomQuote.Couleurf;
    ran.style.backgroundColor = randomQuote.Couleurp;

    if (randomQuote.Date) {
        p2P.style.display = "block";
    } else {
        p2P.style.display = "none";
    }
}


let cit = [
	{
		Dict: "Un esprit curieux est un esprit sans limites.",
		Auteur: "Neil deGrasse Tyson",
		Date: "1792",
		Couleurf: "#44e5ca",
		Couleurp: "#4c0f19",
		Origine: "A great Book!",
	},
	{
		Dict: "L’imagination gouverne le monde.",
		Auteur: "Marie Curie",
		Date: "1792",
		Couleurf: "#e55744",
		Couleurp: "#0f454c",
	},
	{
		Dict: "Le bonheur dépend de nous-mêmes.",
		Auteur: "Socrate",
		Date: "1730",
		Couleurf: "#69e544",
		Couleurp: "#3e0f4c",
	},
	{
		Dict: "Nous sommes faits de poussière d’étoiles.",
		Auteur: "Carl Sagan",
		Date: "2017",
		Couleurf: "#e5a044",
		Couleurp: "#0f294c",
	},
	{
		Dict: "Les ordinateurs sont inutiles, ils ne savent que donner des réponses.",
		Auteur: "Albert Einstein",
		Date: "1907",
		Couleurf: "#bde544",
		Couleurp: "#1e0f4c",
	},
];



