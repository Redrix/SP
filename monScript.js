//Déifinition des liens et titres par défaut
if(localStorage.getItem("nomBoites") === null || localStorage.getItem("sections") === null || localStorage.getItem("liens") === null){
    localStorage.setItem("nomBoites", '["Social","Divertissement","Prog","Utile"]');
    localStorage.setItem("sections", '[["Twitter", "Facebook", "Reddit", "Discord", ""], ' +
    '["Furaffinity", "Youtube", "Spotify", "", ""], ' +
    '["Bootstrap", "StackOverflow", "GitHub", "", ""], ' +
    '["PayPal", "OutlookOffice", "Portail Mediaschool", "", ""]]');
    localStorage.setItem("liens", '[["https://twitter.com/", "https://facebook.com/", "https://www.reddit.com/", "https://discordapp.com/", ""],' +
        '["https://furaffinity.net/", "https://www.youtube.com/", "https://www.spotify.com/", "", ""],' +
        '["https://getbootstrap.com/", "https://stackoverflow.com/", "https://github.com/", "", ""],' +
        '["https://www.paypal.com/" ,"https://login.microsoftonline.com/", "http://portail.mediaschool.eu/", "", ""]]');
}else{
    console.log("Tu as déjà les noms <:3");
}

let titreBoite = document.getElementsByClassName("titreBoite");
let sectionsBoites = document.getElementsByClassName("section");
let titreEnregistres = JSON.parse(localStorage.getItem("nomBoites"));
let sectionEnregistrees = JSON.parse(localStorage.getItem("sections"));
let liensEnregistrees = JSON.parse(localStorage.getItem("liens"));
let nombreDeClick = 0;

afficherHeure(); // Afficher l'heure sur la page
afficherDate(); // Afficher la date sur la page
getQuote(); // Afficher une phrase aléatoire
addEvent(); // Ajouter un event listener a chaque moteur de recherche
initialisation(); //Permet de mettre les titres et liens perso

document.getElementById("API").addEventListener("click", easterEgg);

setInterval(() => { // Rafraichir l'heure toute les secondes
    afficherHeure();
}, 1000);

function ajouterZero(nombre){ // Fonction pour ajouté un 0 quand un nombre est inférieur a 10 pour l'heure
    if(nombre < 10){
        return "0" + nombre;
    }else{
        return nombre;
    }
}

function afficherHeure(){ // Fonction qui récupère l'heure et l'affiche
    let heure = ajouterZero(new Date().getHours());
    let minutes = ajouterZero(new Date().getMinutes());
    let secondes = ajouterZero(new Date().getSeconds());
    document.getElementById("heure").innerText = heure + ":" + minutes + ":" + secondes;
}

function afficherDate(){ // Fonction pour récupérer la date et l'afficher
    let numeroJour = new Date().getDay();
    let nomjour = jourStr(numeroJour);
    let numeroMois = new Date().getMonth();
    let nomMois = moisStr(numeroMois);
    let annee = new Date().getFullYear();
    document.getElementById("date").innerText = nomjour + " " + new Date().getDate() + " " + nomMois + " " + annee;
}

function jourStr(jour){ // Fonction pour retourner le jour de la semaine en text
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return jours[jour];
}

function moisStr(mois){ // Fonction pour retourner le mois en text
    let nomMois = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];
    return nomMois[mois];
}

function getQuote(){ // API pour récupérer une phrase aléatoire
    $.ajax({
		type: "GET",
		url: "https://quotes.rest/qod",
		dataType: "json",
		success: function(result, status, xhr){
			document.getElementById("API").innerText = result.contents.quotes[0].quote;
		},
		error: function(xhr, status, error){
			console.error(status + " : " + error);
		}
	});
}

function easterEgg(){ // Un easter egg
    nombreDeClick += 1;
    switch (nombreDeClick){
        case 3 :
            document.getElementById("API").innerText = "Stop cliquer >:3";
        break;
        
        case 5 :
            document.getElementById("API").innerText = "J'ai dit stop >:3";
        break;

        case 7 :
            document.getElementById("API").innerText = "Bon ça suffit ! >>:3";
        break;

        case 9 :
            document.getElementById("API").innerText = "Plus de page au prochain clique >>>:3";
        break;

        case 10 :
            document.write(""); // Supprimer la page entière
        break;

        default :
        
        break;
    }
}

function addEvent(){
    let test = document.getElementsByClassName("logo");
    for ( let i=0; i < test.length; i++){
        test[i].addEventListener("click", changeActive);
    }
}

function changeActive(){
    document.getElementById("actif").setAttribute("id", "");
    this.setAttribute("id", "actif");
    let temp = document.getElementById("actif").getAttribute("src");
    switch (temp){

        case "Logo/google.jpg":
            document.getElementById("recherche").setAttribute("action", "https://google.com/search");
        break;

        case "Logo/bing.png":
            document.getElementById("recherche").setAttribute("action", "https://www.bing.com/search");
        break;

        case "Logo/yahoo.png":
            document.getElementById("recherche").setAttribute("action", "https://fr.search.yahoo.com/search");
        break;

        case "Logo/duckduckgo.jpg":
            document.getElementById("recherche").setAttribute("action", "https://duckduckgo.com/");
        break;

        case "Logo/youtube.jpg":
            document.getElementById("recherche").setAttribute("action", "https://www.youtube.com/results");
        break;
    }
}

function initialisation(){ //Afficher les liens et titres perso
    let compteurDiv = 0;
    for(let i = 0; i < 4; i++){
        titreBoite[i].innerHTML = titreEnregistres[i] + ' <i class="far fa-edit modificateur" onclick="modifier(' + i + ')"></i>';
        for(let y = 0; y < 5; y++){
            if(liensEnregistrees[i][y] === "" || sectionEnregistrees[i][y] === ""){
                sectionsBoites[compteurDiv].innerHTML = "";
                console.log("Vide");
            }else{
                sectionsBoites[compteurDiv].innerHTML = '<a href="' + liensEnregistrees[i][y] + '">' + sectionEnregistrees[i][y] + '</a>';
                console.log(sectionEnregistrees[i][y]);
            }
            compteurDiv += 1;
        }
    }
}

// V2.0 de la modification de boîtes

function modifier(numeroBoite){
    let titre = document.getElementsByClassName("modificationTitreInput");
    let sections = document.getElementsByClassName("modificationSectionInput");
    let liens = document.getElementsByClassName("modificationLiensInput");
    document.getElementById("modification").classList.toggle("hidden");
    titre[0].value = titreEnregistres[numeroBoite];
    for(let i = 0; i < sectionEnregistrees[numeroBoite].length; i++){
        sections[i].value = sectionEnregistrees[numeroBoite][i];
    }
    for(let i = 0; i < liensEnregistrees[numeroBoite].length; i++){
        liens[i].value = liensEnregistrees[numeroBoite][i];
    }
    document.getElementById("confirmModif").setAttribute("Onclick", "modification(" + numeroBoite + ")")
}

function modification(numeroBoite){
    let titre = document.getElementsByClassName("modificationTitreInput");
    let sections = document.getElementsByClassName("modificationSectionInput");
    let liens = document.getElementsByClassName("modificationLiensInput");
    document.getElementById("confirmModif").removeAttribute("Onclick");
    document.getElementById("modification").classList.toggle("hidden");
    titreEnregistres[numeroBoite] = titre[0].value;
    for(let i = 0; i < sections.length; i++){
        sectionEnregistrees[numeroBoite][i] = sections[i].value;
        liensEnregistrees[numeroBoite][i] = liens[i].value;
    }
    localStorage.setItem("nomBoites", JSON.stringify(titreEnregistres));
    localStorage.setItem("sections", JSON.stringify(sectionEnregistrees));
    localStorage.setItem("liens", JSON.stringify(liensEnregistrees));
    window.location.reload();
}

// V1.0 du changement des boites, mis a jour depuis

/*function modifier(boiteAModifier){ //Choisir quoi modifier dans une boite
    let aModifier = prompt('Saisir "1" pour modifier le titre\nSaisir "2" pour modifier les liens', "");
    if (aModifier === "1"){
        modifierTitreBoite(boiteAModifier);
    }
    if(aModifier === "2"){
        modifierSectionBoite(boiteAModifier);
    }
}

function modifierTitreBoite(numeroBoite){ //Modifier le titre d'une boite
    let choixUtilisateur = prompt('Donnez le nouveau titre de "' + titreEnregistres[numeroBoite] + '"', "");
    if(choixUtilisateur !== null){
        titreEnregistres[numeroBoite] = choixUtilisateur;
        localStorage.setItem("nomBoites", JSON.stringify(titreEnregistres));
    }
}

function modifierSectionBoite(numeroBoite){ //Modifier un lien d'une boite
    let affichage = "";
    for(let i = 0; i < 5; i++){
        if(sectionEnregistrees[numeroBoite][i] !== ""){
            affichage += 1 + i + ". " + sectionEnregistrees[numeroBoite][i] + "\n";
        }else{
            affichage += 1 + i + ". Vide \n";
        }
        console.log(i);
    }
    let numeroSection = prompt("Donnez le numéro du lien a changer \n" + affichage, "") - 1;
    if (numeroSection !== null && numeroSection < 5 && numeroSection >= 0){
        let nouveauNom = prompt('Donnez le nouveau nom de cette section\nSaisir "-" pour la laisser vide', "");
        if (nouveauNom === "-"){
            sectionEnregistrees[numeroBoite][numeroSection] = "";
            liensEnregistrees[numeroBoite][numeroSection] = "";
            localStorage.setItem("sections", JSON.stringify(sectionEnregistrees));
            localStorage.setItem("liens", JSON.stringify(liensEnregistrees));
        }else{
            let nouveauLien = prompt("Collez le lien vers lequel cette section doit vous mener", "");
            if(nouveauLien !== null && nouveauNom !== null){
                sectionEnregistrees[numeroBoite][numeroSection] = nouveauNom;
                liensEnregistrees[numeroBoite][numeroSection] = nouveauLien;
                localStorage.setItem("sections", JSON.stringify(sectionEnregistrees));
                localStorage.setItem("liens", JSON.stringify(liensEnregistrees));
            }
        }
    }
}*/
