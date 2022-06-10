let title_right_position = document.getElementById('title').getBoundingClientRect().right;
let contact_left_position = document.getElementById('around-contact').getBoundingClientRect().left - 125;
let hamburger_left_position = document.getElementById('hamburger').getBoundingClientRect().left - 125;
already_centered = false;
already_right = false;
clicked_on_menu = false;
clicked_on_cross = false;
in_menu = false;
document.getElementById("background").style.height = document.getElementById('thanks').offsetTop + document.getElementById('thanks').scrollHeight - 175 + 45 + "px";
document.getElementById('footer').style.top = window.innerHeight + "px";
let main_height = document.getElementById('background').offsetTop + document.getElementById('background').offsetHeight + 300;
let footer_height = document.getElementById('footer').offsetTop;

window.onscroll = function() {
    window.scrollTo(0, 0);
}
setTimeout(function() {window.onscroll = function() {}}, 1000);

if (title_right_position + 200 > contact_left_position){
    document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("around-contact").style.visibility = "hidden";
    document.getElementById("title").style.visibility = "hidden";
    document.getElementById("hamburger").style.visibility = "visible";
}
else{
    document.getElementById("contact").style.visibility = "visible";
    document.getElementById("around-contact").style.visibility = "visible";
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("hamburger").style.visibility = "hidden";
}

if (document.getElementById('footer').scrollWidth < 400){
    document.getElementById('logos').style.flexDirection = "column"
    document.getElementById('logo-radio-hana').style.right = "0";
    document.getElementById('logo-forsberg').style.left = "0";
    document.getElementById('logo-forsberg').style.top = "10px";
    document.getElementById("logo-radio-hana").style.width = window.innerWidth / 3 + "px";
    document.getElementById("logo-forsberg").style.width = window.innerWidth / 3 + "px";
}
else{
    document.getElementById('logos').style.flexDirection = "row"
    document.getElementById('logo-radio-hana').style.right = "30px";
    document.getElementById('logo-forsberg').style.left = "30px";
    document.getElementById('logo-forsberg').style.top = "0";
    document.getElementById("logo-radio-hana").style.width = "100px";
    document.getElementById("logo-forsberg").style.width = "150px";
}

if (main_height > footer_height){
    document.getElementById('footer').style.top = main_height + "px";
}
else {
    document.getElementById('footer').style.top = window.innerHeight + "px";
}

if(hamburger_left_position < window.innerWidth / 2 - document.getElementById('hamburger').offsetWidth / 2){
    document.getElementById('hamburger').style.left = window.innerWidth / 2 - document.getElementById('hamburger').offsetWidth / 2 + "px";
}


function zoomed(){
    let title_right_position = document.getElementById('title').getBoundingClientRect().right;
    let contact_left_position = document.getElementById('around-contact').getBoundingClientRect().left;
    let hamburger_left_position = document.getElementById('hamburger').getBoundingClientRect().left;
    document.getElementById("background").style.height = document.getElementById('thanks').offsetTop + document.getElementById('thanks').scrollHeight - 175 + 45 + "px";
    document.getElementById('footer').style.top = window.innerHeight + "px";
    let main_height = document.getElementById('background').offsetTop + document.getElementById('background').offsetHeight + 300;
    let footer_height = document.getElementById('footer').offsetTop;

    if (title_right_position + 200 > contact_left_position){
        document.getElementById("contact").style.visibility = "hidden";
        document.getElementById("around-contact").style.visibility = "hidden";
        document.getElementById("title").style.visibility = "hidden";
        document.getElementById("hamburger").style.visibility = "visible";
    }
    else{
        document.getElementById("contact").style.visibility = "visible";
        document.getElementById("around-contact").style.visibility = "visible";
        document.getElementById("title").style.visibility = "visible";
        document.getElementById("hamburger").style.visibility = "hidden";
        if(in_menu === true) {
            if(clicked_on_cross === false) {
                document.getElementById("menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
                setTimeout(function() {document.getElementById("menu").style.visibility = "hidden"}, 240);
                setTimeout(function() {document.getElementById("menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
                document.getElementById("cross").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
                setTimeout(function() {document.getElementById("cross").style.visibility = "hidden"}, 240);
                setTimeout(function() {document.getElementById("cross").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
                document.getElementById("index-in-menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
                setTimeout(function() {document.getElementById("index-in-menu").style.visibility = "hidden"}, 240);
                setTimeout(function() {document.getElementById("index-in-menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
                document.getElementById("contact-in-menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
                setTimeout(function() {document.getElementById("contact-in-menu").style.visibility = "hidden"}, 240);
                setTimeout(function() {document.getElementById("contact-in-menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
                document.getElementById("hamburger").style.animation = "rotate-hamburger-back 250ms linear 0s 1 normal";
                setTimeout(function() {document.getElementById("hamburger").style.animation = "rotate-fake-hamburger-back 250ms linear 0s 1 normal"}, 250);
                clicked_on_cross = true
                setTimeout(function() {clicked_on_cross=false}, 250);
                in_menu = false;
            }
        }
    }

    if (document.getElementById('footer').scrollWidth < 400){
        document.getElementById('logos').style.flexDirection = "column"
        document.getElementById('logo-radio-hana').style.right = "0";
        document.getElementById('logo-forsberg').style.left = "0";
        document.getElementById('logo-forsberg').style.top = "10px";
        document.getElementById("logo-radio-hana").style.width = window.innerWidth / 3 + "px";
        document.getElementById("logo-forsberg").style.width = window.innerWidth / 3 + "px";
    }
    else{
        document.getElementById('logos').style.flexDirection = "row"
        document.getElementById('logo-radio-hana').style.right = "30px";
        document.getElementById('logo-forsberg').style.left = "30px";
        document.getElementById('logo-forsberg').style.top = "0";
        document.getElementById("logo-radio-hana").style.width = "100px";
        document.getElementById("logo-forsberg").style.width = "150px";
    }

    if (main_height > footer_height){
        document.getElementById('footer').style.top = main_height + "px";
    }
    else {
        document.getElementById('footer').style.top = window.innerHeight + "px";
    }

    if(hamburger_left_position < window.innerWidth / 2 - document.getElementById('hamburger').offsetWidth / 2 || already_centered){
        if (window.innerWidth / 2 >= document.getElementById('hamburger').offsetWidth + 30){
            document.getElementById('hamburger').style.left = "";
            document.getElementById('hamburger').style.right = "30px";
            already_centered = false;
            already_right = true;
        }
        else{
            document.getElementById('hamburger').style.left = window.innerWidth / 2 - document.getElementById('hamburger').offsetWidth / 2 + "px";
            already_centered = true;
            already_right = false;
        }
    }

    if (already_right){
        document.getElementById('hamburger').style.left = "";
        document.getElementById('hamburger').style.right = "30px";
    }
}


function clicked_menu(){
    if(clicked_on_menu === false) {
        document.getElementById("hamburger").style.animation = "rotate-hamburger-forward 250ms linear 0s 1 normal";
        setTimeout(function() {document.getElementById("hamburger").style.animation = "rotate-fake-hamburger-forward 250ms linear 0s 1 normal"}, 250);
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menu").style.animation = "translate-menu-arrive 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("menu").style.animation = "translate-fake-menu-arrive 250ms ease 0s 1 normal"}, 250);
        document.getElementById("cross").style.visibility = "visible";
        document.getElementById("cross").style.animation = "translate-menu-arrive 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("cross").style.animation = "translate-fake-menu-arrive 250ms ease 0s 1 normal"}, 250);
        document.getElementById("index-in-menu").style.visibility = "visible";
        document.getElementById("index-in-menu").style.animation = "translate-menu-arrive 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("index-in-menu").style.animation = "translate-fake-menu-arrive 250ms ease 0s 1 normal"}, 250);
        document.getElementById("contact-in-menu").style.visibility = "visible";
        document.getElementById("contact-in-menu").style.animation = "translate-menu-arrive 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("contact-in-menu").style.animation = "translate-fake-menu-arrive 250ms ease 0s 1 normal"}, 250);
        clicked_on_menu = true
        setTimeout(function() {clicked_on_menu=false}, 250);
        in_menu = true;
    }
}


function clicked_cross(){
    if(clicked_on_cross === false) {
        document.getElementById("menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("menu").style.visibility = "hidden"}, 240);
        setTimeout(function() {document.getElementById("menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
        document.getElementById("cross").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("cross").style.visibility = "hidden"}, 240);
        setTimeout(function() {document.getElementById("cross").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
        document.getElementById("index-in-menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("index-in-menu").style.visibility = "hidden"}, 240);
        setTimeout(function() {document.getElementById("index-in-menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
        document.getElementById("contact-in-menu").style.animation = "translate-menu-depart 250ms ease 0s 1 normal";
        setTimeout(function() {document.getElementById("contact-in-menu").style.visibility = "hidden"}, 240);
        setTimeout(function() {document.getElementById("contact-in-menu").style.animation = "translate-fake-menu-depart 250ms ease 0s 1 normal"}, 250);
        document.getElementById("hamburger").style.animation = "rotate-hamburger-back 250ms linear 0s 1 normal";
        setTimeout(function() {document.getElementById("hamburger").style.animation = "rotate-fake-hamburger-back 250ms linear 0s 1 normal"}, 250);
        clicked_on_cross = true
        setTimeout(function() {clicked_on_cross=false}, 250);
        in_menu = false;
    }
}
