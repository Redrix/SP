afficherHeure();
afficherDate();

setInterval(() => {
    afficherHeure();
}, 1000);

function ajouterZero(nombre){
    if(nombre < 10){
        return "0" + nombre;
    }else{
        return nombre;
    }
}

function afficherHeure(){
    let heure = ajouterZero(new Date().getHours());
    let minutes = ajouterZero(new Date().getMinutes());
    let secondes = ajouterZero(new Date().getSeconds());
    document.getElementById("heure").innerText = heure + ":" + minutes + ":" + secondes;
}

function afficherDate(){
    let numeroJour = new Date().getDay();
    let nomjour = jourStr(numeroJour);
    let numeroMois = new Date().getMonth();
    let nomMois = moisStr(numeroMois);
    let annee = new Date().getFullYear();
    document.getElementById("date").innerText = nomjour + " " + new Date().getDate() + " " + nomMois + " " + annee;
}

function jourStr(jour){
    switch (jour){
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

        case 0:
            return "Dimanche";
        break;

        default:
            return "Erreur";
    }
}

function moisStr(mois){
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
