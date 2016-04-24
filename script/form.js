"use strict";

/**
 * Created by mbastide on 2016-04-23.
 */



// Synchronisation
$(function () {
    console.log("jQuery branché et DOM construit");

    soumettre();


});


/****************************************************/
/********FONCTION DE SOUMISSION DU FORMULAIRE********/
/****************************************************/

function soumettre(){
    console.groupCollapsed("Tentative de soumission du formulaire :");

    //Branchement du gestionnaire d'événement
   // $("#form_resa").bind("submit", valider_form);
   //  $("#btn_test").bind("click", valider_form);


    valider_form();

    // Fonction de validation du formulaire

    function valider_form(event) {
        console.log("Le formulaire est soumis (tentative)");
        var formulaire_ok = true; //par défaut tous les champs sont valides

        //CODE DE VALIDATION


            // Un forfait doit être sélectionné  DEJA UN PAR DEFAUT
            console.log("Forfait sélectionné :", $('#choix_forfait option:selected').val());



            // Un nombre de participants doit être sélectionné  DEJA 1 PAR DEFAUT
            console.log("Nombre de participants sélectionné :", $('#nb_participants').val());



            // Le champ animaux doit s'afficher si le forfait admet les animaux, sinon disabled
            //  Dans ce cas, un nombre d'animaux DEJA 1 PAR DEFAUT
            console.log("Nombre d'animaux sélectionné :", $('#nb_animaux').val());
            $('#nb_animaux').val();

            // Une date valide doit être sélectionnée :
            // date >= date de début de saison ET dont la durée totale
            // (date_debut_saison + duree du séjour) <= date_fin_saison



            // Un nom  doit être saisi (au moins un caractère alpha)

            $("#nom").change(function () {

                var val = $(this).val();
                var input_text = new RegExp('^[a-zA-Z]+$');

                if (!input_text.test(val)){
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid");
                    $("#erreur_nom").addClass("display");
                }else if (0 == $("#nom").val().length){
                    formulaire_ok = false;
                    $(this).addClass("invalid");
                    $("#erreur_nom").addClass("display");
                }
            }); //END change nom


            // Un prénom doit être saisi (au moins un caractère alpha)

        $("#prenom").change(function () {

            var val = $(this).val();
            var input_text = new RegExp('^[a-zA-Z]+$');

            if (!input_text.test(val)){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid");
                $("#erreur_prenom").addClass("display");
            }else if (0 == $("#prenom").val().length){
                formulaire_ok = false;
                $(this).addClass("invalid");
                $("#erreur_prenom").addClass("display");
            }
        }); //END change prenom

            // Un courriel valide doit être saisi
        $("#email").change(function () {

            var val = $(this).val();
            var input_text = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

            if (!input_text.test(val)){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid");
                $("#erreur_email").addClass("display");
            }else if (0 == $("#email").val().length){
                formulaire_ok = false;
                $(this).addClass("invalid");
                $("#erreur_email").addClass("display");
            }
        }); //END change email


            // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)



            //Une adresse valide doit être saisie (au moins 10 caract. alpha)


        //Si le formulaire n'est pas valide, on affiche les messages d'erreur et on empeche la soumission
        if(!formulaire_ok){ // not ok --> les champs ne sont pas valides


            //empeche la soumission
            event.preventDefault();
        }
    }

    console.groupEnd();
    } //End soumettre()



// Forfait affiché par défaut dans le tableau récapitulatif
var nom_forfait = monApp.produits[0].nom;
$("table tbody tr td:first").text(nom_forfait);
console.log(nom_forfait);

//Prix du forfait qui s'affiche par défaut
var prix_unitaire = monApp.produits[0].prix_basse_saison;
$("table tbody tr:first-of-type td:last").text(prix_unitaire + " CAD");


//Nombre de participants affiché par défaut dans le tableau récapitulatif
var nb_participants = 0;
$("table tbody tr td").eq(1).text(nb_participants);



// $("table tbody tr:nth-of-type(2)  td").eq(1).text($("#nb_animaux").val());




// Fonctions de récupération des valeurs
    $("#choix_forfait")
        .change(function () {
            var resultat;

            // un seul champ change à la fois donc c'est $(this) en jQuery et non pas each
            console.log("Valeur de ", this.name, "qui change", $(this).val());
            resultat = $(this).val();
            //test insertion de la valeur d'un des forfaits dans le tableau apres selection
            // $("table tbody tr td:first").text($("#choix_forfait").val());
            console.log("resultat de la fonction", resultat);
            afficher_nom_forfait(resultat); ///////JE N'ARRIVE PAS A PASSER LE RESULTAT DE LA FONCTION CHANGE EN PARAMETRE

            return resultat;
            // $("table tbody tr td").eq(1).text($("#nb_participants").val());
            // $("table tbody tr:nth-of-type(2) td").eq(1).text($("#nb_animaux").val());

        }); //END change#choix_forfait


// Fonctions de récupération des valeurs
$("#nb_participants")
    .change(function () {
        var resultat;

        // un seul champ change à la fois donc c'est $(this) en jQuery et non pas each
        console.log("Valeur de ", this.name, "qui change", $(this).val());
        resultat = $(this).val();
        //test insertion de la valeur d'un des forfaits dans le tableau apres selection
        // $("table tbody tr td:first").text($("#choix_forfait").val());
        console.log("resultat de la fonction", resultat);
        afficher_nom_forfait(resultat); ///////JE N'ARRIVE PAS A PASSER LE RESULTAT DE LA FONCTION CHANGE EN PARAMETRE

        return resultat;
        // $("table tbody tr td").eq(1).text($("#nb_participants").val());
        // $("table tbody tr:nth-of-type(2) td").eq(1).text($("#nb_animaux").val());

    }); //END change#choix_forfait

 // END soumettre()


/***********FONCTION AFFICHER NOM_FORFAIT******/

function afficher_nom_forfait(valeur_forfait){

    //Initialisation
    nom_forfait = monApp.produits[valeur_forfait].nom;
    prix_unitaire = monApp.produits[valeur_forfait].prix_basse_saison;
    console.log("nom du forfait a afficher ds le tableau : nom_forfait", nom_forfait);
    $("table tbody tr td:first").text(nom_forfait);
    $("table tbody tr:first-of-type td:last").text(prix_unitaire + " CAD");


    return nom_forfait;

    //Affichage


}

// afficher_prix_unitaire(2); ///////JE N'ARRIVE PAS A PASSER LE RESULTAT DE LA FONCTION CHANGE EN PARAMETRE

/*****************FONCTION CALCULER_PRIX_TOTAL****************/

function afficher_prix_unitaire(valeur_forfait){

    //Initialisation du prix total
    var prix_total ;
    var prix_forfait ;
    prix_forfait = monApp.produits[valeur_forfait].prix_basse_saison;
    console.log("prix du forfait a afficher ds le tableau :", prix_forfait);
    $("table tbody tr:first td:last").text(prix_forfait);

    prix_total = prix_forfait * ($('#nb_participants').val());
    $("table tfoot tr td:last-of-type").text(prix_total);

    //Multiplier par le nombre de participants


}