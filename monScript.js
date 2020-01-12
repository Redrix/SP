let nombreDeClick = 0;

afficherHeure(); // Afficher l'heure sur la page
afficherDate(); // Afficher la date sur la page
getQuote(); // Afficher une phrase aléatoire
addEvent(); // Ajouter un event listener a chaque moteur de recherche

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
    switch (jour){
        case 0:
            return "Dimanche";
        break;

        case 1:
            return "Lundi";
        break;

        case 2:
            return "Mardi";
        break;

        case 3:
            return "Mercredi";
        break;

        case 4:
            return "Jeudi";
        break;

        case 5:
            return "Vendredi";
        break;

        case 6:
            return "Samedi";
        break;

        default:
            return "Erreur";
    }
}

function moisStr(mois){ // Fonction pour retourner le mois en text
    switch (mois){
        case 0:
            return "Janvier";
        break;

        case 1:
            return "Février";
        break;

        case 2:
            return "Mars";
        break;

        case 3:
            return "Avril";
        break;

        case 4:
            return "Mai";
        break;

        case 5:
            return "Juin";
        break;

        case 6:
            return "Juillet";
        break;

        case 7:
            return "Août";
        break;

        case 8:
            return "Septembre";
        break;

        case 9:
            return "Octobre";
        break;

        case 10:
            return "Novembre";
        break;

        case 11:
            return "Décembre";
        break;

        default:
            return "Erreur";
    }
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
};

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

        case "https://1.bp.blogspot.com/-kBxIb1MjScw/XO3Xrlz__eI/AAAAAAAAIIU/Xbj3nolyDWwo_1oFucBqz1Gq9ujLkvVXgCLcBGAs/s1600/favicon-google.png":
            document.getElementById("recherche").setAttribute("action", "https://google.com/search");
        break;

        case "https://www.abondance.com/wp-content/uploads/2016/01/b-de-bing-vert.jpg":
            document.getElementById("recherche").setAttribute("action", "https://www.bing.com/search");
        break;

        case "https://www.seeweb.fr/wp-content/uploads/2016/03/yahoo-logo-purple.jpg":
            document.getElementById("recherche").setAttribute("action", "https://fr.search.yahoo.com/search");
        break;

        case "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kUCNAQ1hi5MQ1xMDuMisHgHaHa%26pid%3DApi&f=1":
            document.getElementById("recherche").setAttribute("action", "https://duckduckgo.com/");
        break;

        case "https://www.graphiline.com/src/applications/news/imaloader/images/graphiline/logo-icone-youtube-2017.jpg":
            document.getElementById("recherche").setAttribute("action", "https://www.youtube.com/results");
        break;
    }
}
