<<<<<<< HEAD
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

                $(this).removeClass("invalid");
                $("#erreur_nom").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('^[a-zA-Z]{1,}$');

                console.log("Valeur saisie:", val.length);
                if ( ! expression_reg.test(val) || (0 == val.length) ){ //si nom invalide
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid"); //on met la bordure rouge
                    $("#erreur_nom").addClass("display"); //on affiche le msg d'erreur
                }
            }); //END change nom


        // Un prénom doit être saisi (au moins un caractère alpha)
        $("#prenom").change(function () {

            $(this).removeClass("invalid");
            $("#erreur_prenom").removeClass("display");
            var val = $(this).val();
            var expression_reg = new RegExp('^[a-zA-Z]{1,}$');

            console.log("Valeur saisie:", val.length);
            if ( ! expression_reg.test(val) || (0 == val.length)  ){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid"); //on met la bordure rouge
                $("#erreur_prenom").addClass("display"); //on affiche le msg d'erreur
            }
        }); //END change prenom



        // Un courriel valide doit être saisi
        $("#email").change(function () {

            $(this).removeClass("invalid");
            $("#erreur_email").removeClass("display");
            var val = $(this).val();
            var expression_reg = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

            if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid");
                $("#erreur_email").addClass("display");
            }
        }); //END change email


        // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)
        $("#tel").change(function () {

            $(this).removeClass("invalid");
            $("#erreur_tel").removeClass("display");
            var val = $(this).val();
            var expression_reg = new RegExp('^([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4})$');

            if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid");
                $("#erreur_tel").addClass("display");
            }
        }); //END change tel


        //Une adresse valide doit être saisie (au moins 10 caract. alpha)
        // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)
        $("#adresse").change(function () {

            $(this).removeClass("invalid");
            $("#erreur_adresse").removeClass("display");
            var val = $(this).val();
            var expression_reg = new RegExp('^[a-zA-Z0-9- ]{10,}$');

            if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                formulaire_ok = false; //on met à false
                $(this).addClass("invalid");
                $("#erreur_adresse").addClass("display");
            }
        }); //END change tel



        //Si le formulaire n'est pas valide, on affiche les messages d'erreur et on empeche la soumission
        if(!formulaire_ok){ // not ok --> les champs ne sont pas valides


            //empeche la soumission
            event.preventDefault();
        }
    }

    console.groupEnd();
    } //End soumettre()


// INITIALISATION



//AFFICHAGE DANS LE TABLEAU RECAPITULATIF

    // Forfait affiché par défaut
    var nom_forfait = monApp.produits[0].nom;
    $("table tbody tr td:first").text(nom_forfait);
    console.log(nom_forfait);

    //Prix du forfait qui s'affiche par défaut
    var prix_unitaire = monApp.produits[0].prix_basse_saison;
    $("table tbody tr:first-of-type td:last").text(prix_unitaire + " CAD");

    //Nombre de participants affiché par défaut
    var nb_participants = 0;
    $("table tbody tr:nth-of-type(1) td:nth-of-type(2)").text(nb_participants);


    //Nombre d'animaux affiché par défaut
    var nb_animaux = 0;
    $("table tbody tr:nth-of-type(2) td:nth-of-type(2)").text(nb_animaux);


// RÉCUPÉRATION DES VALEURS

    // Forfait sélectionné
    $("#choix_forfait")
        .change(function () {
            var resultat;
            console.log("Valeur de ", this.name, "qui change", $(this).val());
            resultat = $(this).val().trim();
            console.log("resultat de la fonction", resultat);
            afficher_nom_forfait(resultat);

            return resultat;

        }); //END change#choix_forfait


    // Nombre de participants saisi
    $("#nb_participants")
        .change(function () {
            var resultat;
            console.log("Valeur de ", this.name, "qui change", $(this).val());
            resultat = $(this).val().trim();
            console.log("resultat de la fonction", resultat);
            afficher_nb_participants(resultat);
            return resultat;


        }); //END change#nb_participants




// Nombre d'animaux saisi
$("#nb_animaux")
    .change(function () {
        var res_animaux;
        console.log("Valeur de ", this.name, "qui change", $(this).val());
        res_animaux = $(this).val().trim();
        console.log("resultat de la fonction", res_animaux);
        afficher_nb_animaux(res_animaux );
        calculer_prix_animaux();

        // return res_animaux;


    }); //END change#nb_animaux






/**
 * FONCTION AFFICHER NOM_FORFAIT
 * @param valeur_forfait : le forfait saisi par l'utilisateur
 * @returns {string|string|string|string|string|string|*}
 */
function afficher_nom_forfait(valeur_forfait){

    //Initialisation
    nom_forfait = monApp.produits[valeur_forfait].nom;
    prix_unitaire = monApp.produits[valeur_forfait].prix_basse_saison;
    console.log("nom du forfait a afficher ds le tableau : nom_forfait", nom_forfait);

    //affichage
    $("table tbody tr td:first").text(nom_forfait);
    $("table tbody tr:first-of-type td:last").text(prix_unitaire + " CAD");

    return nom_forfait;

}



/**
 * FONCTION AFFICHER LE NOMBRE DE PARTICIPANTS
 * @param valeur_participants : le nombre de participants saisi par l'utilisateur
 * @returns {string|string|string|string|string|string|*}
 */
function afficher_nb_participants(valeur_participants){


    //affichage
    $("table tbody tr:nth-of-type(1) td:nth-of-type(2)").text(valeur_participants);


}

/**
 * FONCTION AFFICHER LE NOMBRE D'ANIMAUX ADMIS
 * @param valeur_animaux : le nombre d'animaux saisi par l'utilisateur
 * @returns {string|string|string|string|string|string|*}
 */
function afficher_nb_animaux(res_animaux ){

    //affichage
    $("table tbody tr:nth-of-type(2) td:nth-of-type(2)").text(res_animaux);



}

function calculer_prix_animaux(){

    //calculer le prix unitaire des animaux (nb_animaux * duree * prix_basse_saison)
// var duree_forfait = monApp.produits[nom_forfait].duree;
    var cout_animaux = 0;
    var nb_animaux = $("#nb_animaux").val().trim();
    var forfait_saisi = $("#choix_forfait").val().trim();
    console.log("valeur du forfait saisi:", forfait_saisi);
    cout_animaux =  nb_animaux * monApp.produits[forfait_saisi].duree  * monApp.produits[forfait_saisi].prix_animal ;

    console.log(cout_animaux);

// affichage du cout
    $("table tbody tr:nth-of-type(2) td:nth-of-type(3)").text(cout_animaux);

}



/*****************FONCTION CALCULER_PRIX_TOTAL****************/
/**
 *
 * @param valeur_forfait : le forfait saisi par l'utilisateur
 */
function calculer_prix_total(valeur_forfait){

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