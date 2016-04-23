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
    $("#btn_test").bind("click", valider_form);


    valider_form();

    // Fonction de validation du formulaire

    function valider_form(event) {
        console.log("Le formulaire est soumis (tentative)");
        var formulaire_ok = true; //par défaut tous les champs sont valides

        //CODE DE VALIDATION
        //console.log($("#choix_forfait"));

            // Un forfait doit être sélectionné  DEJA UN PAR DEFAUT
            console.log("Forfait sélectionné :", $('#choix_forfait option:selected').val());



            // Un nombre de participants doit être sélectionné  DEJA 1 PAR DEFAUT
            console.log("Nombre de participants sélectionné :", $('#nb_participants').val());



            // Le champ animaux doit s'afficher si le forfait admet les animaux
            //  Dans ce cas, un nombre d'animaux DEJA 1 PAR DEFAUT
            console.log("Nombre de participants sélectionné :", $('#nb_animaux').val());
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



            // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)



            //Une adresse valide doit être saisie (au moins 10 caract. alpha)


        //Si le formulaire n'est pas valide, on affiche les messages d'erreur et on empeche la soumission
        if(!formulaire_ok){ // not ok --> les champs ne sont pas valides


            //empeche la soumission
            event.preventDefault();
        }
    }

    console.groupEnd();
    } //End valider_form


$("table tbody tr td:first").text($("#choix_forfait").val());

   // Fonction de récupération des valeurs
    $("#choix_forfait, [type='number']")
        .change(function () {

            // un seul champ change à la fois donc c'est $(this) en jQuery et non pas each
            console.log("Valeur de ", this.name, "qui change", $(this).val());

            //test insertion de la valeur d'un des forfaits dans le tableau apres selection
            $("table tbody tr td:first").text($("#choix_forfait").val());


        }); //END change()


 // END soumettre()
