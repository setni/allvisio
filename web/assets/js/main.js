
/* Header responsive */

function l_menu () { 
    $("header").css({'left':'-275px'});
    $(".conteneur_page").css({'left':'-275px'});
    $(".header_responsive").css({'right':'0px'});
    $(".effet_menu").css({'display':'block'});
}
function close_menu () { 
    $("header").css({'left':'0px'});
    $(".conteneur_page").css({'left':'0px'});
    $(".header_responsive").css({'right':'-275px'});
    $(".effet_menu").css({'display':'none'});
}
function effet_menu () { 
    $("header").css({'left':'0px'});
    $(".conteneur_page").css({'left':'0px'});
    $(".header_responsive").css({'right':'-275px'});
    $(this).css({'display':'none'});
}

// lien

function accueil () {
    close_menu()
    $('article').load('HTML/accueil.html', function () {
        $('.question:eq(0)').css('display','block');
        $('.lettre:eq(0)').css('display','block');
    })
}

function apropos() {
    close_menu()
    $('article').load('HTML/apropos.html', function () {
        $('#compteur').text('Déjà '+compteur+' visiteurs. Parlez-en autour de vous.');
    });
}

function amelio () {
    close_menu()
    $('article').load('HTML/amlio.html');
}

function sond () {
    close_menu()
    $('article').load('HTML/sondage.html', function () {
        $('.question').css('display','block');
    });
}



$(document).ready(function () {
    

    $('.question:eq(0)').css('display','block');
    $('.lettre:eq(0)').css('display','block');

    img = document.getElementsByTagName('img')[0];
    img.addEventListener('click', action);
    
})

function action (obj) {
  //console.log(obj.target.getAttribute('src'));
  id = obj.target.getAttribute('src');
  console.log(id);
}


function reponse (nb, rep) {
    text = false;
    
    if(nb == 0) {
        $('.question:eq(0)').css('display','none');
        if(rep) {
            $('.question:eq(5)').css('display','block');
        } else {
            $('.question:eq(1)').css('display','block');
        }
    } else if(nb == 1) {
         $('.question:eq(1)').css('display','none');
        if(rep) {
            $('.question:eq(2)').css('display','block');
        } else {
            $('.question:eq(6)').css('display','block');
            //Votre problème concerne-t-il l'état des lieux de sortie (et votre caution) ou les régularisations de charge?
        }
    } else if(nb == 2) {
        //Avez-vous signez l'état des lieux de sortie?
        $('.question:eq(2)').css('display','none');
        if(rep) {
            
            $('.question:eq(3)').css('display','block');
        } else {
            
            text = "Quelle que soit la raison de son absence, il est nécessaire de l'établir. En effet, vous êtes présumé responsable de toutes les dégradations, sauf si vous démontrez qu'elles ne sont pas de votre fait.<sup>1</sup><br>";
            text += "Néanmoins, il est reconnu que l'état des lieux de sortie doit être fait le plus rapidement possible. En effet, après votre départ, vous n'êtes plus responsable du logement.<br><br>";
            text += "Pour vous prémunir de toutes actions de la part du propriétaire, envoyez-lui une lettre en accusé réception éxigeant la réalisation de l'état des lieux de sortie. Et conservez l'accusé signé.<br><br>";
            text += "Il est possible qu'un huissier effectue l'état des lieux en cas de litige. Ceci permet d'obtenir un état des lieux réalisé par un professionnel du droit. Pour plus d'informations, <a href='https://huissier.ooreka.fr/astuce/voir/297352/intervention-d-un-huissier-dans-un-etat-des-lieux'>Cliquez ici</a>.<br><br> <u>Attention</u>, conservez les clés de votre logement jusqu'à l'état des lieux. En effet, vous serez responsable de toutes les dégradations que l'huissier constatera.<br><br>";
            text += "Un mois après la date de sortie de votre logement (si aucun état des lieux n'a été fait, malgrés votre demande), le propriétaire doit vous rendre l'intégralité de votre dépôt de garantie. Si il ne le fait pas, vous devez lui envoyer une mise en demeure (toujours avec accusé de réception) de vous rendre celui-ci. Si il n'obtempère toujours pas, contactez le tribunal d'instance le plus proche du logement. Voici un <a href='http://www.annuaires.justice.gouv.fr/annuaires-12162/annuaire-des-tribunaux-dinstance-21775.html#cmq_path=annuaire&cmq_territory=75011%20PARIS&cmq_submit=Submit'>lien</a> pour vous aidez. Vous demanderez une injonction de paiement, la procédure est gratuite.";
            text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(1);'>Etat des lieux</button><button onclick='modele(2);'>Dépot de garantie</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
            text += "source:<br>";
            text += "<I>1 - En effet, selon l'article 1732 du Code Civil, « Il répond des dégradations ou des pertes qui arrivent pendant sa jouissance, à moins qu'il ne prouve qu'elles ont eu lieu sans sa faute»</I>";
           
        }
    } else if(nb == 3) {
        //Le propriétaire vous a-t-il rendu toute votre caution?
        $('.question:eq(3)').css('display','none');
        if(rep) {
 
            $('.question:eq(7)').css('display','block'); 

        } else {
            
            $('.question:eq(4)').css('display','block');
        }
    } else if(nb == 4) {
        //Les éléments prélevés sont-ils tous founis avec un justificatif, conforme a ce qui est décrit dans l'état des lieux de sortie?
        $('.question:eq(4)').css('display','none');
        if(rep) {
            text = "Il vous faut vérifier trois choses:<br><br>";
            text += "1) Il ne faut pas que les dégradations soient déjà inscrites dans l'état des lieux d'entrée. Si c'est le cas, les sommes prélevés sont injustifiées. En effet, vous ne devez pas payer les dégradations précédant votre arrivée.<br><br>";
            text += "2) L'ancienneté des éléments est à prendre en compte, le propriétaire ne peut pas vous facturer des éléments à neuf, il doit tenir compte de la vétusté. Si aucune grille de vétusté n'apparait dans le bail, la justice prend généralement en compte la grille suivante: <br> - La durée de vie des peintures et tapisseries est d'environ dix ans ,<br> - La durée de vie des moquettes est d'environ sept ans,<br> - La durée de vie des éléments d'équipement (plaques chauffantes par exemple) est d'environ cinq ans.<sup>1</sup><br><br>";
            text += "3) En cas de dégradation, le propriétaire à l'obligation de vous adresser l'état des retenues avec le solde, en votre faveur ou non dans les <u>deux mois</u> suivant la fin du bail. Si il ne fait pas, il vous sera redevable d'un intérêt de 10% au prorata du retard (uniquement si vous lui avez transmis votre nouvelle adresse).<sup>2</sup><br><br>";
            text += "Si un de ces trois cas se présente, proposez une résolution amiable du litige avec votre propriétaire permettant d'éviter soit une procédure de conciliation :<a href='https://lannuaire.service-public.fr/recherche?whoWhat=Commission+d%C3%A9partementale+de+conciliation+&where=Paris'>Annuaire des commissions de conciliation</a> ou judiciaire :<a href='http://www.annuaires.justice.gouv.fr/annuaires-12162/annuaire-des-tribunaux-dinstance-21775.html#cmq_path=annuaire&cmq_territory=75011%20PARIS&cmq_submit=Submit'>Annuaire des tribunaux d'instance</a><br><br>";
            text += "<u>Attention</u>: Les montants réclamés peuvent être supérieurs au dépôt de garantie. Si ils sont justifiés par les trois points ci-dessus, Vous devrez procéder au paiement demandé.<br><br>"
            
            text += "sources:<br>";
            text += "<I>1 - <a href='http://www.pap.fr/conseils/location/la-restitution-du-depot-de-garantie/a3299/la-retenue-pour-la-remise-en-etat-du-logement'>article du site pap.fr</a></I><br>";
            text += "<I>2 - <a href='https://www.service-public.fr/particuliers/vosdroits/F31269'>service-publique, le dépôt de garantie</a></I>";
           
            
        } else {
            
            text = "Le propriétaire à l'obligation de justifier sur factures, ou devis avec preuve de réalisation, l'ensemble des sommes qu'il vous prélève. <br>Si il ne le fait pas après mise en demeure par lettre recommandée avec accusé de réception, vous êtes en droit de contester les sommes prélevées et non justifiées auprès du tribunal d'instance.<sup>1</sup> <br>";
             text += "<a href='http://www.annuaires.justice.gouv.fr/annuaires-12162/annuaire-des-tribunaux-dinstance-21775.html#cmq_path=annuaire&cmq_territory=75011%20PARIS&cmq_submit=Submit'>Annuaire des tribunaux d'instance</a><br>";
            text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(3);'>Justification</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
            text += "source:<br>";
            text += "<I>1 - <a href='http://www.pap.fr/conseils/location/la-restitution-du-depot-de-garantie/a3299/la-retenue-pour-la-remise-en-etat-du-logement'>Article détaillé du site pap.fr </a></I>";
            
        }
    } else if(nb == 5) {
        $('.question:eq(5)').css('display','none');
        // Avez-vous réalisé un état des lieux d'entrée?
        if(rep) {
            // Habitez-vous Paris ou départements limitrophe?
            $('.question:eq(8)').css('display','block');   
        } else {
            text = "Sans état des lieux d'entrée, vous êtes présumé avoir reçu le logement en bon état. C'est-à-dire que toutes les dégradations déjà présentes vous seront imputées.<br> Pour vous prévenir de ce risque, vous devez <u>impérativement</u> mettre en demeure le propriétaire, par lettre recommandée avec accusé de réception, éxigeant la tenue d'un état des lieux. Si le propriétaire ne réagit pas, il sera impossible pour lui de vous facturer des dégradations lors de votre départ.<br> Il est conseillé aussi de réaliser des photographies du logement peu de temps après votre arrivée. Vous pourrez ainsi prouver que celles-ci étaient présentes avant votre arrivée.<sup>1</sup><br><br>";
            text += "Il est possible qu'un huissier effectue l'état des lieux d'entrée en cas de litige. Ceci permet d'obtenir un état des lieux réalisé par un professionnel du droit. Pour plus d'informations sur l'intervention d'un huissier, <a href='https://huissier.ooreka.fr/astuce/voir/297352/intervention-d-un-huissier-dans-un-etat-des-lieux'>Cliquez ici</a>.<br>";
            text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(6);'>Etat des lieux d'entrée</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
            
            text += "source:<br>";
            text += "<I>1 - <a href='https://www.service-public.fr/particuliers/vosdroits/F31270'>Lien du site officiel de l'administration concernant l'état des lieux</a>.</I>";
            
        }
    } else if(nb == 6) {
        $('.question:eq(6)').css('display','none');
        // Votre problème concerne-t-il l'état des lieux de sortie (et votre caution) ou des régularisations de charge locative?
        if(rep) {
            //etat des lieux de sortie
            $('.question:eq(2)').css('display','block'); 
        } else {
            // régul de charge
            $('.question:eq(7)').css('display','block'); 
        }
        
    } else if(nb == 7) {
        //Avez-vous eu acces au justificatif des régularisation de charge?
        $('.question:eq(7)').css('display','none'); 
        if(rep) {
            text = "Pensez à vérifier que les sommes sont réellement à votre charge, voici un <a href='https://www.service-public.fr/particuliers/vosdroits/F947'>lien</a> récapitulant les éléments qui le sont. Si il y a erreur de calcul, exigez le remboursement du trop-perçu au propriétaire.<br><br>";
            text += "Vous disposez d'un délais de trois ans pour faire valoir vos droits (à partir du 30 septembre de chaque année suivant la période concernée).<sup>1</sup><br>";
            text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(5);'>Trop-perçu</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
            text += "source:<br>";
            text += "<I>1 - <a href='https://www.courdecassation.fr/publications_26/rapport_annuel_36/rapport_2014_7040/livre_3_etude_temps_7047/emprise_droit_7193/fonction_extinctive_7196/delais_prescription_31946.html'>Prescription, chapitre 2, Point A, sous-point 2</a></I>";
            
        } else {
            text = "Le propriétaire à l'obligation de vous donner accès au détail des charges locatives afin de justifier d'une régularisation, il doit le faire au plus tard le 30 septembre de l’année suivante. Si il refuse, vous êtes en droit de réclamer le remboursement des sommes qui vous ont été prélevées.<sup>1</sup><br><br>";
            text += "Pensez, après avoir obtenu les justificatifs, à vérifier que les sommes sont réellement à votre charge, voici un <a href='https://www.service-public.fr/particuliers/vosdroits/F947'>lien</a> récapitulant les éléments qui le sont. Si il y a erreur de calcul, exigez le remboursement du trop-perçu au propriétaire.<br><br>";
            text += "Vous disposez d'un délais de trois ans pour faire valoir vos droits (à partir du 30 septembre de chaque année suivant la période concernée).<sup>2</sup><br>";
            text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(4);'>Justification</button><button onclick='modele(5);'>Trop-perçu</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
            
            text += "sources:<br>";
            text += "<I>1 - <a href='https://www.legifrance.gouv.fr/affichJuriJudi.do?idTexte=JURITEXT000030242025'>Arrêt de la cour de cassation février 2015</a><br></I>";
            text += "<I><I>2 - <a href='https://www.courdecassation.fr/publications_26/rapport_annuel_36/rapport_2014_7040/livre_3_etude_temps_7047/emprise_droit_7193/fonction_extinctive_7196/delais_prescription_31946.html'>Prescription, chapitre 2, Point A, sous-point 2</a></I>";
            
        }
    } else if(nb == 8) {
        // Habitez-vous Paris?
        $('.question:eq(8)').css('display','none'); 
        if(rep) {
            $('.question:eq(9)').css('display','block'); 
        } else {
            $('.question:eq(10)').css('display','block'); 
        }
    } else if(nb == 9) {
        // Votre problème concerne-t-il la reglementation des loyers?
        $('.question:eq(9)').css('display','none'); 
        if(rep) {
            text = "Si votre bail (ou son renouvellement) a été signé après le 1er Aout 2015, Le plafonnement s'applique à vous. Sur le <a target='_BLANK' href='http://www.paris.fr/actualites/l-encadrement-des-loyers-parisiens-en-vigueur-le-1er-aout-2712' >lien suivant</a>, vous pourrez vérifier si votre propriétaire respecte la réglementation. <br> Si ce n'est pas le cas, exigez un réajustement de votre loyer et un remboursement des sommes prélevées en violation de la loi.<br>";
            text += "Pour ce type de litige, il est préférable de saisir la comission de concilation : <a href='https://www.service-public.fr/particuliers/vosdroits/F1216'>Saisie de la CDC</a>.";
             text += "<p>Modèle de lettre</p>";
            text += "<div class='modele'><button onclick='modele(7);'>Plafonnement</button></div></div><br><br><br><br>";
            text += "<div id='blocknote'></div><br><br>"
        } else {
            $('.question:eq(10)').css('display','block'); 
        }
    } else if(nb == 10) {
        // Votre problème concerne-t-il des travaux dans votre logement (fait ou à faire)?
        $('.question:eq(10)').css('display','none'); 
        if(rep) {
            text = "Les grosses réparations (concernant le bâtiment lui-même) et les travaux de remise en état, ou de mise en conformité, sont à la charge du propriétaire (rénovations énérgétiques, insalubritée).<sup>1</sup><br> Dans cette situation, le propriétaire n'a pas à obtenir l'approbation du locataire.<br>L'entretien courant et les réparations locatives sont à la charge du locataire. En voici le <a href='https://www.service-public.fr/particuliers/vosdroits/F31697'>détail</a>.<br><br>";
            text += "Pour plus d'informations, cliquez <a href='http://tdmg-avocats.com/blog/actualite/item/28-nouvelles-obligations-a-la-charge-des-bailleurs-imposees-par-le-decret-d-application-de-la-loi-pinel-publie-le-05-novembre-2014.html'>ici</a>.<br><br>";
            text += "source:<br>";
            text += "<I>1 - <a href='https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006429505&cidTexte=LEGITEXT000006070721'>Art 606 du code civil et article R 145-35 du Code de commerce</a></I>";
        } else {
            $('.question:eq(11)').css('display','block');
        }
    } else if(nb == 11) {
        //Est-ce un probleme de taxe foncière ou d'autre taxes?
        $('.question:eq(11)').css('display','none');
        if(rep) {
            $('.question:eq(13)').css('display','block');
        } else {
            $('.question:eq(12)').css('display','block'); 
        }
    } else if(nb == 12) {
        //Cela concerne-t-il les charges locative?
        $('.question:eq(12)').css('display','none');
        if(rep) {
            // charges locatives
            $('.question:eq(7)').css('display','block'); 
        } else {
            // répartitions
            text = "Pour l'instant, votre problème n'est pas sur cette application. N'hésitez pas à me <a href='amelio()'>contacter<a> pour qu'on l'ajoute.";
            
        }
    } else if(nb == 13) {
        //est-ce une taxe que votre propriétaire vous demande de payer?
        $('.question:eq(13)').css('display','none');
        if(rep) {
            text = "En principe, vous ne devez payer que les taxes qui vous sont directement attitrées (votre nom et votre adresse est sur l'avis).<br>Les seules taxes que le locataire doit payer sont la taxe d'habitation et la taxe sur les ordures ménagères (incluse aux charges locatives). <br><br> Si vous louez en meublée (c'est écrit sur votre bail) Le propriétaire paie la taxe d'habitation et peut vous la refacturer. Demandez-lui le justificatif.<br> Dans le cas d'une location non meublée, c'est au propriétaire d'avertir l'administration de votre déménagement.<br> Attention, certaines agences peuvent vous demander une preuve de paiement de la taxe avant restitution de votre dépôt de garantie. Ceci est illegal, ils ne peuvent retenir votre dépôt de garantie, n'hésitez pas à leur rappeler.";
        } else {
            text = "Pour toutes informations concernant la taxe d'habitation : <a href='https://www.service-public.fr/particuliers/vosdroits/F42'>Cliquez ici</a> .<br>Pour toutes informations cencernant la taxe sur les ordures ménagères : <a href='https://www.service-public.fr/particuliers/vosdroits/F22730'>Cliquez ici</a>.";
        }
    }
    
    
    
    if(text) {
        text1="";
        //text1 = "<div id='jur'><p>Souhaitez-vous entrer en contact avec un juriste?</p>";
        //text1 += "<div class='modele'><button onclick='juriste(1);'>OUI</button><button onclick='juriste(0);'>NON</button></div></div></div><br><br><br><br>";
        $('.text2').text("");
        $('#reponse').css('display', 'block').html(text);
        
    }
}

function contact() {
    data = $('form').serialize();
    
    $.post('/contact', data, function (r) {
        if(r==1){
            $('article').load('HTML/merci.html');
        } else {
            alert('Une erreur est survenue');
        }
    })
}

function sondage (rep) {
    $('.question').css('display','none');
    $.post('/sondage', {sondage : rep}, function (r) {
        if(rep == 0) {
            $('article').load('HTML/amlio.html', function () {
                $('#sondage_non').text('Pourquoi ces réponses ne vous ont-elles pas été utiles?');
            });
        } else {
            $('#resultat').text('Merci :)');
        }
        
    });
}

function modele (t) {
    $('#blocknote').load('/lettre', {type : t});
    if(t==3 || t==2) {
        type = 0;
    } else if(t==5) {
        type = 1;
    } else if(t==7) {
        type = 2;
    }
}

function lettre (nb, rep) {
    text = false;
    
    if(nb == 0) {// dépôt de garantie
        $('.lettre:eq(0)').css('display','none');
        if(rep) {
            $('article').html("<span class='reponse' style='display:block;'><div id='blocknote'></div></span>");
            
            modele(3);
            
        } else {
            $('.lettre:eq(1)').css('display','block');
        }
    } else if(nb == 1) {// trop-perçu de charge
        $('.lettre:eq(1)').css('display','none');
        if(rep) {
            $('article').html("<span class='reponse' style='display:block;'><div id='blocknote'></div></span>");
            
            modele(5);
        } else {
            $('article').html("<span class='reponse' style='display:block;'><div id='blocknote'></div></span>");
            
            modele(7);
        }
    }
}



function procedure (rep, obj) {
    if(rep) {
            
            $('article').load('/procedure', {type:type});
            //$('article').html('<p>Cette fonctionnalité sera bientôt disponible.</p>');
 
        } else {
            $(obj).css('display', 'none');
        }
}

function fileList (input) {
    //get the input and UL list
    //var input = document.getElementById('filesToUpload');
    var list = document.getElementById('fileList');
    //empty list for now...
    while (list.hasChildNodes()) {
	   list.removeChild(list.firstChild);
    }

    pattern = new Array('.doc', '.pdf', '.docx', '.page');
    //for every file...
    console.log(input.files.length);
    for (var x = 0; x < input.files.length; x++) {
	   //add to list
	   var li = document.createElement('li');
	   li.innerHTML = 'Fichier ' + (x + 1) + ':  ' + input.files[x].name;
	   list.appendChild(li);
    }
}

function recommande() {
  
    $('iframe')[0].contentDocument.body.innerHTML = "";
    data = $('form').serializeArray();
    //console.log(data);
    if(data[0].value=="") {
        alert('Merci d\'indiquer votre nom');
        
    } else if (data[1].value=="") {
        alert('Merci d\'indiquer votre email');
        
    } else if (data[2].value=="") {
        alert('Merci d\'indiquer votre adresse complète');
        
    } else if (data[3].value=="") {
        alert('Merci d\'indiquer l\'adresse de votre propriétaire');
        
    } else if (data[4].value=="") {
        alert('Merci d\'indiquer les détails de votre litige');
        
    } else {
        //alert(data);
        $('form').attr('target', 'myIframe');
        $('form').attr('action', '/recommande');
        $('form').submit();
        $('form').attr('action', 'javascript:recommande()');
        $('form').removeAttr('target');
    }
}

function lettre_aff() {
    $('.robot').remove();
}

function callback_submit (obj) {
    contenu = obj.contentDocument.body.innerHTML;
    if(contenu == 1) {
        $('article').html('<span>Votre demande a été soumise <br><a href="javascript:accueil()">Retour à l\'accueil</a></span>');
    } else {
        alert('Un des fichiers n\'est pas au bon format');
    }
}

function conditions () {
    $('#blocknote').css('display', 'none');
}