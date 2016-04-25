"use strict";

$(function() {
    console.log("jQuery est branché et DOM chargé !");
    var cat = "";
    cat = monApp.categories;
    console.log(cat [1]);


function insérer_texte() {
    $('.cs_forfait_categorie h4').text(monApp.categories[0]);
    $('#img1 h2').text(monApp.produits[0].nom);
    $('#img2 h2').text(monApp.produits[1].nom);
    $('#img3 h2').text(monApp.produits[2].nom);
    $('#img4 h2').text(monApp.produits[3].nom);
    $('#img1 img').attr('src', monApp.produits[0].photo);
    $('#img2 img').attr('src', monApp.produits[1].photo);
    $('#img3 img').attr('src', monApp.produits[2].photo);
    $('#img4 img').attr('src', monApp.produits[3].photo);
    $('#img1 p:first span').text(monApp.produits[0].duree);
    $('#img2 p:first span').text(monApp.produits[1].duree);
    $('#img3 p:first span').text(monApp.produits[2].duree);
    $('#img4 p:first span').text(monApp.produits[3].duree);
    $('#img1 p:eq(1) span').text(monApp.produits[0].debut_saison);
    $('#img2 p:eq(1) span').text(monApp.produits[1].debut_saison);
    $('#img3 p:eq(1) span').text(monApp.produits[2].debut_saison);
    $('#img4 p:eq(1) span').text(monApp.produits[3].debut_saison);
    $('#img1 p:eq(2) span').text(monApp.produits[0].fin_saison);
    $('#img1 p:eq(2) span').text(monApp.produits[1].fin_saison);
    $('#img1 p:eq(2) span').text(monApp.produits[2].fin_saison);
    $('#img1 p:eq(2) span').text(monApp.produits[3].fin_saison);
    $('#img1 p:eq(3) span').text(monApp.produits[0].prix_basse_saison);
    $('#img2 p:eq(3) span').text(monApp.produits[1].prix_basse_saison);
    $('#img3 p:eq(3) span').text(monApp.produits[2].prix_basse_saison);
    $('#img4 p:eq(3) span').text(monApp.produits[3].prix_basse_saison);

    $("#cs_tab_controls button").click(function () {
        console.log('La machine est lançée')
        var test = '';
        test = $(this).text().substr(1, 3);
        console.log('La valeur de forf est : ', test);
        console.log(test);
        if (test == 'roi') {
            $('.cs_forfait_categorie h4').text(monApp.categories[0]);
            $('#img1 h2').text(monApp.produits[0].nom);
            $('#img2 h2').text(monApp.produits[1].nom);
            $('#img3 h2').text(monApp.produits[2].nom);
            $('#img4 h2').text(monApp.produits[3].nom);
            $('#img1 img').attr('src', monApp.produits[0].photo);
            $('#img2 img').attr('src', monApp.produits[1].photo);
            $('#img3 img').attr('src', monApp.produits[2].photo);
            $('#img4 img').attr('src', monApp.produits[3].photo);
            $('#img1 p:first span').text(monApp.produits[0].duree);
            $('#img2 p:first span').text(monApp.produits[1].duree);
            $('#img3 p:first span').text(monApp.produits[2].duree);
            $('#img4 p:first span').text(monApp.produits[3].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[0].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[1].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[2].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[3].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[0].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[1].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[2].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[3].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[0].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[1].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[2].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[3].prix_basse_saison);
            console.log("croisière");
        } else if (test == 'por') {
            $('.cs_forfait_categorie h4').text(monApp.categories[1]);
            $('#img1 h2').text(monApp.produits[4].nom);
            $('#img2 h2').text(monApp.produits[5].nom);
            $('#img3 h2').text(monApp.produits[6].nom);
            $('#img4 h2').text(monApp.produits[7].nom);
            $('#img1 img').attr('src', monApp.produits[4].photo);
            $('#img2 img').attr('src', monApp.produits[5].photo);
            $('#img3 img').attr('src', monApp.produits[6].photo);
            $('#img4 img').attr('src', monApp.produits[7].photo);
            $('#img1 p:first span').text(monApp.produits[4].duree);
            $('#img2 p:first span').text(monApp.produits[5].duree);
            $('#img3 p:first span').text(monApp.produits[6].duree);
            $('#img4 p:first span').text(monApp.produits[7].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[4].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[5].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[6].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[7].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[4].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[5].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[6].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[7].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[4].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[5].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[6].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[7].prix_basse_saison);
            console.log("sports d'hiver");
        } else if (test == 'atu') {
            $('.cs_forfait_categorie h4').text(monApp.categories[2]);
            $('#img1 h2').text(monApp.produits[8].nom);
            $('#img2 h2').text(monApp.produits[9].nom);
            $('#img3 h2').text(monApp.produits[10].nom);
            $('#img4 h2').text(monApp.produits[11].nom);
            $('#img1 img').attr('src', monApp.produits[8].photo);
            $('#img2 img').attr('src', monApp.produits[9].photo);
            $('#img3 img').attr('src', monApp.produits[10].photo);
            $('#img4 img').attr('src', monApp.produits[11].photo);
            $('#img1 p:first span').text(monApp.produits[8].duree);
            $('#img2 p:first span').text(monApp.produits[9].duree);
            $('#img3 p:first span').text(monApp.produits[10].duree);
            $('#img4 p:first span').text(monApp.produits[11].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[8].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[9].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[10].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[11].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[8].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[9].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[10].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[11].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[8].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[9].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[10].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[11].prix_basse_saison);
            console.log("Catégorie nature");
        }
    });
};
    insérer_texte();
});



