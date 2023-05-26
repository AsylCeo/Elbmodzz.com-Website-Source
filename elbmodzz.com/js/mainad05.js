function linkTo(page, where) {
    if(where == "here") {
        window.open(page, '_top');
    }
    else if(where == "newpage") {
        window.open(page, '_blank');
    }
}

function openLinkForLang(en_UKlink, fr_FRlink, where) {
    switch(pageLanguage) {
        case "en_UK":
            if(where == "here") {
                window.open(en_UKlink, '_top');
            }
            else if(where == "newpage") {
                window.open(en_UKlink, '_blank');
            }
            break;
        case "fr_FR":
            if(where == "here") {
                window.open(fr_FRlink, '_top');
            }
            else if(where == "newpage") {
                window.open(fr_FRlink, '_blank');
            }
            break;
    }
}

function mobileMenu() {
    var mm = document.getElementById("mobile-menu");

    if(mm.style.transform != "none") {
        mm.style.transform = "none";
        document.querySelectorAll(".sidelinks").forEach(function(element) {
            element.style.zIndex = 0;
        });
    }
    else {
        mm.style.transform = "translate(-100%, 0)";

        setTimeout(function (){
            document.querySelectorAll(".sidelinks").forEach(function(element) {
                element.style.zIndex = 1;
            });
          }, 1000);
    }
}

var pageLanguage = "";

function languageMode(mode) {
    if(mode == false) {
        //No cookie found
        var userCountry;
        $.get("https://ipinfo.io", function(resp) {
            userCountry = resp.country;
        }, "jsonp");
        if(userCountry == "FR" || userCountry == "BE") {
            pageLanguage = "fr_FR";
        } else pageLanguage = "en_UK";
        pageLanguage = "en_UK"; //DEFAULT LANGUAGE, REMOVE HERE IF AUTOMATED
    } else if(mode == "cookie") {
        var lang = getCookie("lang");
        console.log("User lang (from cookie) loaded");
        languageMode(lang);
    } else {
        pageLanguage = mode;
        if(getCookie("cc_cookie") == "{\"level\": [\"language\"]}") setCookie("lang", mode, 30);
        startCounter(mode);
        loadMessages();
        if(mode == "fr_FR") {
            switch(page) {
                case "index":
                    document.title = "ELB Mods - Accueil";
                    document.getElementById("home-welcome").innerText = "BIENVENUE";
                    document.getElementById("home-tomywebsite").innerText = "SUR MON SITE";
                    break;
                case "mods":
                    document.title = "ELB Mods - Mods GTAV";
                    document.getElementById("page-title").innerText = "Mods GTAV";
                    document.getElementById("undetected").innerText = "Non détécté";
                    document.getElementById("detected").innerText = "Détécté";
                    break;
                case "mymods":
                    document.title = "ELB Mods - Mes Mods";
                    document.getElementById("page-title").innerText = "Mes Mods";
                    document.querySelectorAll(".download").forEach(function(element) {
                        element.innerText = "TÉLÉCHARGER";
                    });
                    for (let i = 1; i < 5; i++) {
                        document.getElementById("menu" + i + "-video").src = "https://www.youtube-nocookie.com/embed/" + document.getElementById("menu" + i + "-video").getAttribute("frVideo") + "?rel=0&fs=0&color=white";
                    }
                    break;
                case "shop":
                    document.title = "ELB Mods - Boutique";
                    document.getElementById("page-title").innerText = "Boutique";
                    document.getElementById('itemcontainer').childNodes.forEach(function(child) {
                        child.childNodes.forEach(function(childchild) {
                            if(childchild.id == "item-overlay") {
                                if(childchild.className.includes("french")) childchild.style.display = "block";
                                else childchild.style.display = "none";
                            }
                            if(childchild.id == "title") {
                                childchild.innerHTML = childchild.getAttribute("frtitle") + "<span>- " + childchild.getAttribute("price") + "</span>";
                            }
                            if(childchild.id == "item-image") {
                                childchild.src = "assets/shop/" + childchild.getAttribute("frimage");
                            }
                        });
                    });
                    
                    break;
                case "privacy":
                    document.title = "Politique de Confidentialité";
                    document.getElementById("page-title").innerText = "Politique de Confidentialité";
                    break;
                case "legal":
                    document.title = "Mentions Légales";
                    document.getElementById("page-title").innerText = "Mentions Légales";
                    break;
                case "contact":
                    document.title = "ELB Mods - Contact";
                    document.getElementById("page-title").innerText = "Me contacter";
                    document.getElementById("page-subtitle").innerText = "Besoin d'aide ? Quelque chose à me dire ? Voilà toutes les options que vous avez pour me contacter.";
                    $(".option").each(function() {
                        $(this)[0].innerHTML = '<i class="fas fa-info"></i>' + $(this)[0].getAttribute("frtitle");
                        $(this)[0].setAttribute("onclick", "openContactEmbed('" + $(this)[0].getAttribute("frembed") + "')");
                    });
                    break;
                case "link":
                    document.title = "ELB Mods - Redirection";
                    document.getElementById("page-title").innerHTML = "Pour être redirigé,<br />Veuillez completer ces 2 étapes:";
                    document.getElementById("joindiscord").innerText = "Rejoingnez notre Discord";
                    document.getElementById("joinyoutube").innerText = "Abonnez-vous à ma chaîne YouTube";
                    document.getElementById("continue").innerHTML = 'CONTINUER <i class="fas fa-arrow-right"></i>';
                    break;
                case "error":
                    document.getElementById("oopserror").innerText = "Oups.. Quelque chose n'a pas fonctionné :(";
                    document.getElementById("gobackerror").innerText = "Revenir à l'accueil";
                    return;
            }
            document.querySelectorAll("#discord-link").forEach(function(element) {
                element.href = lienDiscordFrancais;
            });
            if(page != "legal" && page != "privacy" && page != "link") {
                document.getElementById("home-mm").innerText = "Accueil";
                document.getElementById("gtavmods").innerText = "Mods GTAV";
                document.getElementById("mymods").innerText = "Mes Mods";
                document.getElementById("shop").innerText = "Boutique";    
                document.getElementById("gtavmods-mm").innerText = "Mods GTAV";
                document.getElementById("mymods-mm").innerText = "Mes Mods";
                document.getElementById("shop-mm").innerText = "Boutique";
            } 
            document.querySelectorAll("#privacypolicy").forEach(function(element) {
                element.innerText = "Confidentialité";
            });
            document.querySelectorAll("#legal-text").forEach(function(element) {
                element.innerText = "Légal";
            });
            document.querySelectorAll(".can-download-item-overlay").forEach(function(element) {
                element.innerHTML = "Cliquez pour télécharger";
            });
            document.querySelectorAll(".cant-download-item-overlay").forEach(function(element) {
                element.innerHTML = "Téléchargement désactivé.";
            });
            document.querySelectorAll(".see-item-overlay").forEach(function(element) {
                element.innerHTML = "Cliquez pour voir l'article";
            });
        } else {
            switch(page) {
                case "index":
                    document.title = "ELB Mods - Home";
                    document.getElementById("home-welcome").innerText = "WELCOME";
                    document.getElementById("home-tomywebsite").innerText = "TO MY WEBSITE";
                    break;
                case "mods":
                    document.title = "ELB Mods - GTAV Mods";
                    document.getElementById("page-title").innerText = "GTAV Mods";
                    document.getElementById("undetected").innerText = "Undetected";
                    document.getElementById("detected").innerText = "Detected";
                    break;
                case "mymods":
                    document.title = "ELB Mods - My Mods";
                    document.getElementById("page-title").innerText = "My Mods";
                    document.querySelectorAll(".download").forEach(function(element) {
                        element.innerText = "DOWNLOAD";
                    });
                    for (let i = 1; i < 5; i++) {
                        document.getElementById("menu" + i + "-video").src = "https://www.youtube-nocookie.com/embed/" + document.getElementById("menu" + i + "-video").getAttribute("engVideo") + "?rel=0&fs=0&color=white";
                    }
                    break
                case "shop":
                    document.title = "ELB Mods - Shop";
                    document.getElementById("page-title").innerText = "Shop";
                    document.getElementById('itemcontainer').childNodes.forEach(function(child) {
                        child.childNodes.forEach(function(childchild) {
                            if(childchild.id == "item-overlay") {
                                if(childchild.className.includes("english")) childchild.style.display = "block";
                                else childchild.style.display = "none";
                            }
                            if(childchild.id == "title") {
                                childchild.innerHTML = childchild.getAttribute("entitle") + "<span>- " + childchild.getAttribute("price") + "</span>";
                            }
                            if(childchild.id == "item-image") {
                                childchild.src = "assets/shop/" + childchild.getAttribute("enimage");
                            }
                        });
                    });
                    break;
                case "privacy":
                    document.title = "Privacy Policy";
                    document.getElementById("page-title").innerText = "Privacy Policy";
                    break;
                case "legal":
                    document.title = "Legal Notice";
                    document.getElementById("page-title").innerText = "Legal Notice";
                    break;
                case "contact":
                    document.title = "ELB Mods - Contact";
                    document.getElementById("page-title").innerText = "Contact me";
                    document.getElementById("page-subtitle").innerText = "Need help? Have something to tell me? Here is all the options you have to contact me.";
                    $(".option").each(function() {
                        $(this)[0].innerHTML = '<i class="fas fa-info"></i>' + $(this)[0].getAttribute("entitle");
                        $(this)[0].setAttribute("onclick", "openContactEmbed('" + $(this)[0].getAttribute("enembed") + "')");
                    });
                    break;
                case "link":
                    document.title = "ELB Mods - Redirect";
                    document.getElementById("page-title").innerHTML = "To be redirected,<br />Please complete these 2 steps:";
                    document.getElementById("joindiscord").innerText = "Join our discord";
                    document.getElementById("joinyoutube").innerText = "Subscribe to my YouTube channel";
                    document.getElementById("continue").innerHTML = 'CONTINUE <i class="fas fa-arrow-right"></i>';
                    break;
                case "error":
                    document.getElementById("oopserror").innerText = "Oops.. Something did go wrong :(";
                    document.getElementById("gobackerror").innerText = "Go back";
                    return;
            }
            document.querySelectorAll("#discord-link").forEach(function(element) {
                element.href = lienDiscordAnglais;
            });
            if(page != "legal" && page != "privacy" && page != "link") {
                document.getElementById("home-mm").innerText = "Home";
                document.getElementById("gtavmods").innerText = "GTAV Mods";
                document.getElementById("mymods").innerText = "My Mods";
                document.getElementById("shop").innerText = "Shop";
                document.getElementById("gtavmods-mm").innerText = "GTAV Mods";
                document.getElementById("mymods-mm").innerText = "My Mods";
                document.getElementById("shop-mm").innerText = "Shop";
            }
            document.querySelectorAll("#privacypolicy").forEach(function(element) {
                element.innerText = "Privacy Policy";
            });
            document.querySelectorAll("#legal-text").forEach(function(element) {
                element.innerText = "Legal";
            });
            document.querySelectorAll(".cant-download-item-overlay").forEach(function(element) {
                element.innerHTML = "You can't download this.";
            });
            document.querySelectorAll(".see-item-overlay").forEach(function(element) {
                element.innerHTML = "Click to see this item";
            });
        }
    }
}

//cookie consent from https://github.com/orestbida/cookieconsent/
function initPageCookieConsent() {
    var cookieconsent = initCookieConsent();
    document.body.classList.toggle('c_darkmode');

    cookieconsent.run({
        current_lang : 'en',
        onAccept : function(){
            languageMode(getCookie("lang"));
        },

        languages : {
            en : {
                consent_modal : {
                    title :  "We use cookies...",
                    description :  '...to save your language settings, only.',
                    primary_btn: {
                        text: 'Accept',
                        role: 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Settings',
                        role : 'settings'
                    }
                },
                settings_modal : {
                    title : 'Cookie settings',
                    save_settings_btn : "Save settings",
                    accept_all_btn : "Accept all",
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: 'Here you can disable or enable cookies types as you like'
                        },{
                            title : "Language cookies",
                            description: 'With this cookie, we can remember what language you prefer using on the website!',
                            toggle : {
                                value : 'language',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            }
        }
    });
}

function closeMessage(message) {
    if(getCookie("lang") != false) {
        setCookie("closemessage_" + page, encodeURIComponent(message.trim()), 30);
    }
    document.getElementById("message").style.display = "none";
}

function getCookie(c_name, c_default) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
        return unescape(y);
    }
    }

    if (typeof c_default != 'undefined') return c_default;
    return false;
}

function setCookie(c_name, value, exdays, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : ("; expires=" + exdate.toUTCString()));
    document.cookie = c_name + "=" + c_value + ((path == null) ? "; path=/" : "; path=" + path);
}