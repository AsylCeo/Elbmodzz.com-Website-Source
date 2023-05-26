//ATTENTION: POUR METTRE DES LIENS OU IL FAUT REJOINDRE LE DISCORD ET S'ABONNER A TA CHAINE, VA DANS LE FICHIER link.php POUR AVOIR LES INSTRUCTIONS, IL FAUDRAT AUSSI LE MODIFIER

var urlSite = "elbmodzz.com"; //Met l'url du site (pas de www ni de http)
var emailSupport = "elb.contactpro@gmail.com"; //L'email du support etc

//           Afficher un message important en haut de page

//Pour la page ACCUEIL
var messageAccueil = ""; //Met le message dans les ""
var messageAccueil_Anglais = ""; //En anglais
//si tu ne met rien le message ne s'afficheras pas

//Pour la page MODS GTAV
var messageModsGTAV = "Use the flags at the bottom to get the correct version of the site !"; //Met le message dans les ""
var messageModsGTAV_Anglais = "Utiliser les drapeaux en bas pour avoir la bonne version du site !"; //En anglais
//si tu ne met rien le message ne s'afficheras pas

//Pour la page MES MODS
var messageMesMods = " Use the flags at the bottom to get the correct version of the site !"; //Met le message dans les ""
var messageMesMods_Anglais = "Utiliser les drapeaux en bas pour avoir la bonne version du site !"; //En anglais
//si tu ne met rien le message ne s'afficheras pas

//Pour la page SHOP
var messageShop = "Use the flags at the bottom to get the correct version of the site !"; //Met le message dans les ""
var messageShop_Anglais = "Utiliser les drapeaux en bas pour avoir la bonne version du site !!"; //En anglais
//si tu ne met rien le message ne s'afficheras pas

//------------------------------------------------
document.addEventListener("DOMContentLoaded", function() { //Ne pas modifier
    languageMode("cookie");
//------------------------------------------------
//           Objets dans les pages

//Pour la page MODS GTAV
//Pour chaque objet ajoute une ligne avec objetModsGTAV("le nom ici", "nom de l'image (avec l'extension) qui dois être mise dans le dossier assets/mods", "si le menu est payant, met le prix, sinon laisse vide", true/false (si le menu est safe), "le lien vers le téléchargement etc (laisse vide si tu veux désactiver le téléchargement)", true/false (true = on peut le télécharger // false = on peut pas));
//ATTENTION: Les images DOIVENT être en 280 par 140!

//   Exemple pour le menu ELB qui est gratuit et safe et qu'on peut télécharger:
//objetModsGTAV("Kiddions 0.8.10", "kiddions.png", false, true, "http://linkvertise.com");


//objetModsGTAV("Hani 4.1", "hani.png", "", true, "../link.php?dest=12");
objetModsGTAV("NewWay 1.3.0", "newway.png", "", true, "../link.php?dest=11");
objetModsGTAV("Crespo 2.3", "crespo2.png", "", true, "../link.php?dest=10");
objetModsGTAV("Kiddions 0.8.11", "kiddions.png", "", true, "../link.php?dest=9");
objetModsGTAV("Mars 1.0", "marsweb.png", "", false, "../link.php?dest=8");
objetModsGTAV("ELB 1.3.1", "ELB 1.3.0.png", "", true, "https://elbmodzz.com/mymods.htm");
objetModsGTAV("Slay 2.3.0", "slay.png", "", true, "https://elbmodzz.com/mymods.htm");
objetModsGTAV("iVritex 1.3.7", "ivritex.png", "", false, "../link.php?dest=2");
objetModsGTAV("Xluna 1.1", "X luna.png", "", false, "../link.php?dest=3");
objetModsGTAV("Eternity 1.2", "Eternity.png", "", true, "../link.php?dest=4");
objetModsGTAV("Atom 1.3.4", "atom.png", "", true, "../link.php?dest=5");
objetModsGTAV("Crespo 1.6", "Crespo.png", "", true, "../link.php?dest=6");
objetModsGTAV("Skid 3.0", "Skid 3.0.png", "", true, "../link.php?dest=7");


//  objetModsGTAV("", ".png", "", true, "../link.php?dest=");

//Pour la page MES MODS
//Pour chaque modifie la ligne (1 pour le premier 2 pour le 2 etc..) pour que ça donne MesModsMenu_<le numéro>
//("nom de la bannière (avec l'extension) qui dois être mise dans le dossier assets/mymods", "la version",
//"l'id de la vidéo youtube du menu (voir attention 2 en bas)", "le lien du discord francais", "le lien du discord anglais", "le lien de téléchargement")";

//ATTENTION: Les images DOIVENT être en 400 par 130!
//Mais tu n'est pas obligé de remplir l'image au max, c'est un .png

//ATTENTION 2: Pour l'id de la vidéo youtube, il faut juste prendre les caractères après le watch?v= dans le lien:
//Donc pour cette vidéo (https://www.youtube.com/watch?v=YPzUlYg7AIQ), l'id a mettre sera YPzUlYg7AIQ
//Ne rien mettre pour désactiver la vidéo

MesModsMenu_1("elb.png", "1.3.1", "ik9ZXwUcYsg", "9MRnoUZWhS4", "https://discord.gg/C9K4D7w", "https://discord.gg/AwFayTmnkD", "https://cdn.discordapp.com/attachments/805128393489514507/823294078736138260/ELB_X_Slay_-_Setup.exe");
MesModsMenu_2("slay.png", "2.3.0", "rpEUiAIbTbY", "MUnNmeIzvhY", "https://discord.gg/C9K4D7w", "https://discord.gg/AwFayTmnkD", "https://cdn.discordapp.com/attachments/805128393489514507/823294078736138260/ELB_X_Slay_-_Setup.exe");
MesModsMenu_3("comingsoon.png", "xx.xx.xx", "", "", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
MesModsMenu_4("comingsoon.png", "xx.xx.xx", "", "", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");


//Pour la page SHOP
//Pour chaque objet ajoute une ligne avec objetShop("le nom en fr", "le nom en anglais", "nom de l'image FRANCAISE (avec l'extension) qui dois être mise dans le dossier assets/shop", "l'image ANGLAISE", "Le prix", "le code produit shoppy.gg francais", "le code produit shoppy.gg anglais");
//ATTENTION: Les images DOIVENT être en 280 par 140!
//Exemple: Pour le produit https://shoppy.gg/product/IfOf8qq le code produit est IfOf8qq


objetShop("Pack BASIQUE", "BASIC Pack", "packbasique.png", "basic pack.png", "5 €", "Wrm8O7i", "Fy6bVYG");
objetShop("Pack 450.000.000 GTA$", "450.000.000 GTA$ Pack", "pack450mil.png","450 millions pack.png", "6 €", "pPWwxTb", "TsEO28T");
objetShop("Pack PRO", "PRO Pack", "packpro.png", "pro pack.png", "10 €", "1w0016C", "vh8PxOO");
objetShop("Pack MEDIUM", "MEDIUM Pack", "packmedium.png", "medium pack.png", "15 €", "L55N7v3", "BBnbmZC");
objetShop("Pack ELB", "ELB Pack", "packelb.png", "ELB pacl.png", "20 €", "Qi85gdQ", "NTBwUAm");
objetShop("Pack PRO + GTA", "PRO Pack + GTA", "packprogta.png", "pro pack +account.png", "20 €", "OKvRVs2", "asRD6x4");
objetShop("Pack MEDIUM + GTA", "MEDIUM Pack + GTA", "packmediumgta.png", "medium pack +account.png", "24 €", "OILen17", "pVYqO6l");
objetShop("Pack ULTIME", "ULTIMATE Pack", "packultime.png", "ultimate pack 2.png", "25 €", "ZeqpXG0", "v1ra5b5");
objetShop("Pack ELB + GTA", "ELB Pack + GTA", "packelbgta.png", "ELB pacl+ account.png", "27 €", "IfOf8qq", "tbT5sUM");
objetShop("Pack ULTIME + GTA" ,"ULTIMATE Pack + GTA", "packultimegta.png", "ultimate pack 2 +account.png", "30 €", "Grjw9wi", "v1ra5b5");


//Pour la page CONTACT
//Pour chaque option de contact ajoute une ligne comme l'exemple
//optionContact("le titre en fr", "le titre en anglais", "le lien vers l'embed du google form francais", "lien vers l'embed du ggl form anglais");
//l'embed du google form c'est un lien que tu peux chopper dans l'option partager du google form
//Pour voir les réponses, tu peux créer une feuille de calcul pour  voir les réponses
optionContact("Compte moddés", "Modded accounts", "https://discord.gg/sNjFKYaHre", "https://discord.gg/7yKJRHG7se");
optionContact("Mods menus", "Mods menus", "https://discord.gg/C9K4D7w", "https://discord.gg/AwFayTmnkD");
optionContact("Autre..", "Other..", "", "");

//------------------------------------------------
});
//------------------------------------------------
//           Réseaux sociaux

//Modifie les liens ici si besoin
var lienYoutube = "https://www.youtube.com/channel/UCyliodSSktUc2sZnZWg-jmA";
var lienDiscordAnglais = "https://discord.gg/AwFayTmnkD"; 
var lienDiscordFrancais = "https://discord.com/invite/XtfDf4f";
var lienInstagram = "https://www.instagram.com/elb_officiel/";
var lienTwitch = "https://www.twitch.tv/elb_ethan";
var lienTwitter = "https://twitter.com/ElB_Ethan";


//-----------------------------------------------------------------------------------------------------
//RIEN A MODIFIER ICI










document.addEventListener("DOMContentLoaded", function() {
    mainLoad();
    startCounter(pageLanguage);
    initPageCookieConsent();

    if(page == "mods" || page == "mymods" || page == "shop") {
        var mobileFooterLittle = document.createElement('div');
        mobileFooterLittle.className = "mobile-footerlittle";
        mobileFooterLittle.id = "mobile-footerlittle";

        var sidelinks = document.getElementById("sidelinks").cloneNode(true);
        sidelinks.id = "sidelinks-little";
        mobileFooterLittle.appendChild(sidelinks);

        var legal = document.getElementById("legal").cloneNode(true);
        legal.id = "legal-little";
        mobileFooterLittle.appendChild(legal);

        var language = document.getElementById("language").cloneNode(true);
        language.id = "language-little";
        mobileFooterLittle.appendChild(language);

        document.getElementById("itemcontainer").appendChild(mobileFooterLittle);
    }
});

function mainLoad() {
    loadMessages();

    if(page != "error" && page != "link") {
        document.getElementById("youtube-link").href = lienYoutube;
        if(pageLanguage == "fr_FR") document.getElementById("discord-link").href = lienDiscordFrancais;
        else document.getElementById("discord-link").href = lienDiscordAnglais;
        document.getElementById("instagram-link").href = lienInstagram;
        document.getElementById("twitch-link").href = lienTwitch;
        document.getElementById("twitter-link").href = lienTwitter;

        document.getElementById("youtube-link").setAttribute("target", "_blank");
        document.getElementById("discord-link").setAttribute("target", "_blank");
        document.getElementById("instagram-link").setAttribute("target", "_blank");
        document.getElementById("twitch-link").setAttribute("target", "_blank");
        document.getElementById("twitter-link").setAttribute("target", "_blank");
    }

    if(page == "privacy" || page == "legal") {
        document.querySelectorAll(".email").forEach(function(email) {
            email.innerHTML = emailSupport;
        });

        document.querySelectorAll(".websiteurl").forEach(function(email) {
            email.innerHTML = urlSite;
        });
    }
}

function displayMessage(message) {
    if(getCookie("closemessage_index") == encodeURIComponent(message.trim()) || getCookie("closeMessage_mods") == encodeURIComponent(message.trim()) ||getCookie("closemessage_mymods") == encodeURIComponent(message.trim()) ||getCookie("closemessage_shop") == encodeURIComponent(message.trim())) return;
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ' + message + '<i class="fas fa-times" style="cursor: pointer; margin-left: 20px;" onclick="closeMessage(\'' + message + '\')"></i>';
    messageDiv.style.display = "block";
}

function objetModsGTAV(name, image, paid, safe, downloadlink) {
    if(page != "mods") return;

    if(downloadlink == "") var canDownload = false;
    else var canDownload = true;

    var itemContainer = document.getElementById("itemcontainer");

    var itemDiv = document.createElement('div');
    if(safe) itemDiv.className = "item undetected";
    else itemDiv.className = "item detected";
    itemContainer.appendChild(itemDiv);

    var itemImage = document.createElement("img");
    itemImage.src = "assets/mods/" + image;
    itemDiv.appendChild(itemImage);

    var itemTitle = document.createElement("h3");
    if(paid != "") itemTitle.innerHTML = name + "<span>- " + paid + "</span>";
    else itemTitle.innerHTML = name + "<span>- FREE</span>";
    itemTitle.id = "title";
    itemDiv.appendChild(itemTitle);

    var downloadOverlay = document.createElement("div");
    downloadOverlay.className = "overlay";
    if(canDownload) downloadOverlay.setAttribute("onclick", "linkTo('" + downloadlink + "', 'newpage')");

    var downloadIcon = document.createElement("span");
    if(canDownload) downloadIcon.innerHTML = '<i class="fas fa-download"></i>';
    else downloadIcon.innerHTML = '<i class="far fa-times-circle"></i>';
    downloadOverlay.appendChild(downloadIcon);

    var downloadText = document.createElement("h3");
    if(canDownload) {
        downloadText.className = "can-download-item-overlay";
        downloadText.innerHTML = "Click to download";
    }
    else {
        downloadText.className = "cant-download-item-overlay";
        downloadText.innerHTML = "You can't download this.";
    }
    downloadOverlay.appendChild(downloadText);

    itemDiv.appendChild(downloadOverlay);
}

function MesModsMenu_1(header, version, ytbIdFr, ytbIdEng, dcdFr, dcdEng, downloadlink) {
    if(page != "mymods") return;

    if(header == "") header = "noimage.png";
    document.getElementById("menu1-img").src = "../assets/mymods/" + header;
    document.getElementById("menu1-version").innerHTML = version;
    document.getElementById("menu1-video").setAttribute("engVideo", ytbIdEng);
    document.getElementById("menu1-video").setAttribute("frVideo", ytbIdFr);
    switch(pageLanguage) {
        case "fr_FR":
            document.getElementById("menu1-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdFr + "?rel=0&fs=0&color=white";
            break;
        case "en_UK":
            document.getElementById("menu1-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdEng + "?rel=0&fs=0&color=white";
            break;
    }
    if(dcdEng != "" && dcdFr != "") {
        var discordButton = document.getElementById("menu1-discord");
        discordButton.setAttribute("onclick", "openLinkForLang('" + dcdEng + "', '" + dcdFr + "', 'newpage')");
        discordButton.style.cursor = "pointer";
    }
    var downloadButton = document.getElementById("menu1-download");
    if(downloadlink != "") {
        downloadButton.setAttribute("onclick", "linkTo('" + downloadlink + "', 'newpage')");
        downloadButton.style.cursor = "pointer";
    }
}

function MesModsMenu_2(header, version, ytbIdFr, ytbIdEng, dcdFr, dcdEng, downloadlink) {
    if(page != "mymods") return;

    if(header == "") header = "noimage.png";
    document.getElementById("menu2-img").src = "../assets/mymods/" + header;
    document.getElementById("menu2-version").innerHTML = version;
    document.getElementById("menu2-video").setAttribute("engVideo", ytbIdEng);
    document.getElementById("menu2-video").setAttribute("frVideo", ytbIdFr);
    switch(pageLanguage) {
        case "fr_FR":
            document.getElementById("menu2-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdFr + "?rel=0&fs=0&color=white";
            break;
        case "en_UK":
            document.getElementById("menu2-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdEng + "?rel=0&fs=0&color=white";
            break;
    }
    if(dcdEng != "" && dcdFr != "") {
        var discordButton = document.getElementById("menu2-discord");
        discordButton.setAttribute("onclick", "openLinkForLang('" + dcdEng + "', '" + dcdFr + "', 'newpage')");
        discordButton.style.cursor = "pointer";
    }
    var downloadButton = document.getElementById("menu2-download");
    if(downloadlink != "") {
        downloadButton.setAttribute("onclick", "linkTo('" + downloadlink + "', 'newpage')");
        downloadButton.style.cursor = "pointer";
    }
}

function MesModsMenu_3(header, version, ytbIdFr, ytbIdEng, dcdFr, dcdEng, downloadlink) {
    if(page != "mymods") return;
    if(header == "") header = "noimage.png";
    document.getElementById("menu3-img").src = "../assets/mymods/" + header;
    document.getElementById("menu3-version").innerHTML = version;
    document.getElementById("menu3-video").setAttribute("engVideo", ytbIdEng);
    document.getElementById("menu3-video").setAttribute("frVideo", ytbIdFr);
    if(dcdEng != "" && dcdFr != "") {
        var discordButton = document.getElementById("menu3-discord");
        discordButton.setAttribute("onclick", "openLinkForLang('" + dcdEng + "', '" + dcdFr + "', 'newpage')");
        discordButton.style.cursor = "pointer";
    }
    var downloadButton = document.getElementById("menu3-download");
    if(downloadlink != "") {
        downloadButton.setAttribute("onclick", "linkTo('" + downloadlink + "', 'newpage')");
        downloadButton.style.cursor = "pointer";
    }
}

function MesModsMenu_4(header, version, ytbIdFr, ytbIdEng, dcdFr, dcdEng, downloadlink) {
    if(page != "mymods") return;

    if(header == "") header = "noimage.png";
    document.getElementById("menu4-img").src = "../assets/mymods/" + header;
    document.getElementById("menu4-version").innerHTML = version;
    document.getElementById("menu4-video").setAttribute("engVideo", ytbIdEng);
    document.getElementById("menu4-video").setAttribute("frVideo", ytbIdFr);
    switch(pageLanguage) {
        case "fr_FR":
            document.getElementById("menu4-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdFr + "?rel=0&fs=0&color=white";
            break;
        case "en_UK":
            document.getElementById("menu4-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdEng + "?rel=0&fs=0&color=white";
            break;
    }
    switch(pageLanguage) {
        case "fr_FR":
            document.getElementById("menu3-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdFr + "?rel=0&fs=0&color=white";
            break;
        case "en_UK":
            document.getElementById("menu3-video").src = "https://www.youtube-nocookie.com/embed/" + ytbIdEng + "?rel=0&fs=0&color=white";
            break;
    }
    if(dcdEng != "" && dcdFr != "") {
        var discordButton = document.getElementById("menu4-discord");
        discordButton.setAttribute("onclick", "openLinkForLang('" + dcdEng + "', '" + dcdFr + "')");
        discordButton.style.cursor = "pointer";
    }
    var downloadButton = document.getElementById("menu4-download");
    if(downloadlink != "") {
        downloadButton.setAttribute("onclick", "linkTo('" + downloadlink + "', 'newpage')");
        downloadButton.style.cursor = "pointer";
    }
}

function objetShop(name_fr, name_en, image_fr, image_en, price, codeFr, codeAng) {
    if(page != "shop") return;

    var itemContainer = document.getElementById("itemcontainer");

    var itemDiv = document.createElement('div');
    itemDiv.className = "item";
    itemContainer.appendChild(itemDiv);

    var itemImage = document.createElement("img");
    itemImage.setAttribute("frimage", image_fr);
    itemImage.setAttribute("enimage", image_en);
    itemImage.id = "item-image";

    var itemTitle = document.createElement("h3");
    itemTitle.setAttribute("frtitle", name_fr);
    itemTitle.setAttribute("entitle", name_en);
    itemTitle.setAttribute("price", price);
    itemTitle.id = "title";

    var moreInfoOverlayFr = document.createElement("div");
    moreInfoOverlayFr.className = "overlay french-overlay";
    moreInfoOverlayFr.id = "item-overlay";
    moreInfoOverlayFr.setAttribute("data-shoppy-product", codeFr);

    var moreInfoOverlayEng = document.createElement("div");
    moreInfoOverlayEng.className = "overlay english-overlay";
    moreInfoOverlayEng.id = "item-overlay";
    moreInfoOverlayEng.setAttribute("data-shoppy-product", codeAng);

    switch(pageLanguage) {
        case "fr_FR":
            moreInfoOverlayEng.style.display = "none";
            itemTitle.innerHTML = name_fr + "<span>- " + price + "</span>";
            itemImage.src = "assets/shop/" + image_fr;
            break;
        case "en_UK":
            moreInfoOverlayFr.style.display = "none";
            itemTitle.innerHTML = name_en + "<span>- " + price + "</span>";
            itemImage.src = "assets/shop/" + image_en;
            break;
    }

    itemDiv.appendChild(itemImage);
    itemDiv.appendChild(itemTitle);

    var moreInfoIconFr = document.createElement("span");
    moreInfoIconFr.innerHTML = '<i class="fas fa-info-circle"></i>';
    moreInfoOverlayFr.appendChild(moreInfoIconFr);

    var moreInfoIconEng = document.createElement("span");
    moreInfoIconEng.innerHTML = '<i class="fas fa-info-circle"></i>';
    moreInfoOverlayEng.appendChild(moreInfoIconEng);

    var moreInfoTextFr = document.createElement("h3");
    moreInfoTextFr.className = "see-item-overlay";
    moreInfoTextFr.innerHTML = "Cliquez pour voir l'article";
    moreInfoOverlayFr.appendChild(moreInfoTextFr);

    var moreInfoTextEng = document.createElement("h3");
    moreInfoTextEng.className = "see-item-overlay";
    moreInfoTextEng.innerHTML = "Click to see this item";
    moreInfoOverlayEng.appendChild(moreInfoTextEng);

    itemDiv.appendChild(moreInfoOverlayFr);
    itemDiv.appendChild(moreInfoOverlayEng);
}

function optionContact(title_fr_FR, title_en_UK, embedLink_fr_FR, embedLink_en_UK) {
    if(page != "contact") return;

    var option = document.createElement('div');
    option.className = "option";
    switch(pageLanguage) {
        case "fr_FR":
            option.innerHTML = '<i class="fas fa-info"></i>' + title_fr_FR;
            option.setAttribute("onclick", "openContactEmbed('" + embedLink_fr_FR + "')");
            break;
        case "en_UK":
            option.innerHTML = '<i class="fas fa-info"></i>' + title_en_UK;
            option.setAttribute("onclick", "openContactEmbed('" + embedLink_en_UK + "')");
            break;
    }
    option.setAttribute("frtitle", title_fr_FR);
    option.setAttribute("entitle", title_en_UK);
    option.setAttribute("frembed", embedLink_fr_FR);
    option.setAttribute("enembed", embedLink_en_UK);

    document.getElementById("content").appendChild(option);
}

function loadMessages() {
    if(pageLanguage == "fr_FR") {
        switch(page) {
            case "index":
                if(messageAccueil != "") displayMessage(messageAccueil);
                break;
            case "mods":
                if(messageModsGTAV != "") displayMessage(messageModsGTAV);
                break;
            case "mymods":
                if(messageMesMods != "") displayMessage(messageMesMods);
                break;
            case "shop":
                if(messageShop != "") displayMessage(messageShop);
                break;
        }
    } else if(pageLanguage == "en_UK") {
        switch(page) {
            case "index":
                if(messageAccueil_Anglais != "") displayMessage(messageAccueil_Anglais);
                break;
            case "mods":
                if(messageModsGTAV_Anglais != "") displayMessage(messageModsGTAV_Anglais);
                break;
            case "mymods":
                if(messageMesMods_Anglais != "") displayMessage(messageMesMods_Anglais);
                break;
            case "shop":
                if(messageShop_Anglais != "") displayMessage(messageShop_Anglais);
                break;
        }
    }
}

function startCounter(lang) {
    if(page != "mods") return;
    if(lang == "en_UK" || lang == "") {
        if(document.getElementById("itemcontainer").childElementCount == 1) {
            document.getElementById("subtitle").innerHTML = '<span id="counter">0</span> mod is available now.';
        } else {
            document.getElementById("subtitle").innerHTML = '<span id="counter">0</span> mods are available now.';
        }
    }
    if(lang == "fr_FR") {
        if(document.getElementById("itemcontainer").childElementCount == 1) {
            document.getElementById("subtitle").innerHTML = '<span id="counter">0</span> mod est disponible en ce moment.';
        } else {
            document.getElementById("subtitle").innerHTML = '<span id="counter">0</span> mods sont disponibles en ce moment.';
        }

    }
    if(!document.getElementById("mobile-footerlittle")) document.getElementById("counter").innerText = document.getElementById("itemcontainer").childElementCount;
    else document.getElementById("counter").innerText = document.getElementById("itemcontainer").childElementCount - 1;
}
