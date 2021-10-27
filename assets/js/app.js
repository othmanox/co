const messagebox = document.getElementById('message-box');
const butn1 = document.getElementById('ent-type-one');
const butn2 = document.getElementById('ent-type-tow');
const apercubox = document.getElementById('apercu-box');
const dropdown = document.getElementById('input-dorpdowns');
const assoccié = document.getElementById('assoccié');
const rowpalce = document.getElementById('row-palce');
const gerantradio = document.getElementById('gerant-oui');
const gerantinfo = document.getElementById('gerant-info');
const gerant2 = document.getElementById('gerant-2');
const SiegeSocial = document.getElementById('flexRadioDefault2');

var i = 3;



function oppen() {
    messagebox.classList.add('active');
}
function closebox() {
    console.log('test')
    messagebox.classList.remove('active');
}
function btnactive1() {
    butn2.classList.remove("active");
    butn1.classList.add('active');
}
function btnactive2() {
    butn1.classList.remove("active");
    butn2.classList.add("active");
}
function oppenApercuBox() {
    apercubox.classList.add("active");
}
function closeApercuBox() {
    apercubox.classList.remove("active");
}
function AjouterDropdown() {
    dropdown.insertAdjacentHTML(
        'beforeEnd', '<div class="form-floating mb-4">\
                            <label for="inputGroupSelect01">Activité '+ i +'</label>\
                            <select class="form-select br-bottom" id="inputGroupSelect01" name="Codepostal">\
                                <option value="1">one</option>\
                                <option value="2">Two</option>\
                                <option value="3">Three</option>\
                            </select>\
                        </div>');
    i = i + 1;
}
function AjouterAssoccié() {
    rowpalce.insertAdjacentHTML(
        'beforeEnd',    "<p class='down-p2' style='font-size: 20px;'>Quelle est l'adresse de votre assoccié ?</p> \
                                <div id = 'input-dorpdowns' >\
                                <div class='form-floating mb-4'> \
                                <label for='inputGroupSelect01'>Adresse</label> \
                                <select class='form-select br-bottom' id='inputGroupSelect01'>\
                                    <option value='1'>SARL - Supérieur à 100 000 DHS </option>\
                                    <option value = '2' > Two</option > \
                                    <option value='3'>Three</option> \
                                </select> \
                                </div> \
                            <div class='form-floating mb-4'>\
                                <label for='inputGroupSelect01'>Code postal</label> \
                                <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                    <option value='1'>Hicham Adham</option>  \
                                    <option value='2'>Two</option>\
                                    <option value='3'>Three</option> \
                                </select> \
                                </div> \
                            <div class='form-floating mb-4'> \
                            <label for='inputGroupSelect01'>Pays</label> \
                                <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                <option value='1'>One</option> <option value='2'>Two</option> \
                                <option value='3'>Three</option> \
                                </select> \
                                </div >\
                                <div class= 'form-floating mb-4' > \
                                <label for='inputGroupSelect01'>Ville</label> \
                                <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                <option value='1'>One</option> \
                                <option value='2'>Two</option>\
                                <option value='3'>Three</option> \
                                </select> \
                                </div>\
                                </div>");
}
                            
function AjouterRow() {
    rowpalce.insertAdjacentHTML(
        'beforeEnd', "<div class='row' id='row-added'>\
                        <hr class='row-hr'> \
                        <div class='col-md-9'> \
                            <div class='div-cont'>\
                                <div class='div-form-p-7'> \
                                    <p class='down-p2' style='font-size: 20px;'>Qui est le deuxième associé ?</p> \
                                    <div class='d-flex gap-3'>\
                                        <div class='form-check'>\
                                            <input type='radio' name='associe-type-2' class='form-check-input' id='associe-type-2-1'>\
                                            <label class='form-check-label' for='associe-type-2-1'>Un particulier</label>\
                                        </div>\
                                        <div class='form-check'>\
                                            <input type='radio' name='associe-type-2' class='form-check-input' id='associe-type-2-2'>\
                                            <label class='form-check-label' for='associe-type-2-2'>Une société</label>\
                                        </div>\
                                    </div>\
                                </div> \
                                <div class='div-form-p-7' id='assoccié'> \
                                    <p class='down-p2' style='font-size: 20px;'>Informations sur le deuxième associé</p> \
                                    <div id='input-dorpdowns'> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Forme juridique de la société</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>One</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Représentant légal de l'entreprise</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>One</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                    </div> \
                                </div> \
                                <div class='div-form-p-7' id='assoccié'> \
                                    <p class='down-p2' style='font-size: 20px;'>Quelle est l'adresse du siège de la société ?</p> \
                                    <div id='input-dorpdowns'> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Adresse</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>260 Bd Ziraoui</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Code postal</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>20040</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Pays</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>Maroc</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                        <div class='form-floating mb-4'> \
                                            <label for='inputGroupSelect01'>Ville</label> \
                                            <select class='form-select br-bottom' id='inputGroupSelect01'> \
                                                <option value='1'>Casablanca</option> \
                                                <option value='2'>Two</option> \
                                                <option value='3'>Three</option> \
                                            </select> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>\
                        </div> \
                        <div class='offset-1 col-md-2'> \
                            <button class='btn' onclick='removeAssocie()'> \
                                <img src='../assets/img/Suppression Copy 2.png'> \
                            </button> \
                        </div> \
                    </div>");
    i = i + 1;
}
function removeAssocie() {
    var divadded = document.getElementById('row-added');
    divadded.parentNode.removeChild(divadded);
}

gerantradio.addEventListener("click", function()  {
    if (gerantradio.checked == true) {
        const btn = document.getElementById('ajouter-btn')
        btn.classList.add("active");
        gerantinfo.insertAdjacentHTML(
            'beforeEnd', '<div class="row">\
                            <div class="col-md-9">\
                                <div class= "div-form-p-7" >\
                                    <div class="div-cont">\
                                        <p class="down-p2" style="font-size: 20px;">Informations sur le premier gérant non associé</p>\
                                        <div id="input-dorpdowns">\
                                            <div class="form-floating mb-4">\
                                                <label for="inputGroupSelect01">Civilité</label>\
                                                <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                    <option value="1">One</option>\
                                                    <option value="2">Two</option>\
                                                    <option value="3">Three</option>\
                                                </select>\
                                            </div>\
                                            <div class="form-floating mb-4">\
                                                <label for="inputGroupSelect01">Prénom</label>\
                                                <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                    <option value="1">One</option>\
                                                    <option value="2">Two</option>\
                                                    <option value="3">Three</option>\
                                                </select>\
                                            </div>\
                                            <div class="form-floating mb-4">\
                                                <label for="inputGroupSelect01">Nom</label>\
                                                <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                    <option value="1">One</option>\
                                                    <option value="2">Two</option>\
                                                    <option value="3">Three</option>\
                                                </select>\
                                            </div>\
                                            <div class="form-floating mb-4">\
                                                <label for="inputGroupSelect01">Nationalité</label>\
                                                <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                    <option value="1">One</option>\
                                                    <option value="2">Two</option>\
                                                    <option value="3">Three</option>\
                                                </select>\
                                            </div>\
                                            <div class="input-group mb-4">\
                                                <label for="inputGroupSelect01">Numéro de CIN</label>\
                                                <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                    <option value="1">One</option>\
                                                    <option value="2">Two</option>\
                                                    <option value="3">Three</option>\
                                                </select>\
                                            </div>\
                                        </div>\
                                        <div class="div-form-p-7">\
                                            <p class="down-p2" style="font-size: 20px;">Quelle est ladresse de votre premier assoccié ?</p>\
                                            <div id="input-dorpdowns">\
                                                <div class="form-floating mb-4">\
                                                    <label for="inputGroupSelect01">Adresse</label>\
                                                    <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                        <option value="1">One</option>\
                                                        <option value="2">Two</option>\
                                                        <option value="3">Three</option>\
                                                    </select>\
                                                </div>\
                                                <div class="form-floating mb-4">\
                                                    <label for="inputGroupSelect01">Code postal</label>\
                                                    <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                        <option value="1">One</option>\
                                                        <option value="2">Two</option>\
                                                        <option value="3">Three</option>\
                                                    </select>\
                                                </div>\
                                                <div class="form-floating mb-4">\
                                                    <label for="inputGroupSelect01">Pays</label>\
                                                    <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                        <option value="1">One</option>\
                                                        <option value="2">Two</option>\
                                                        <option value="3">Three</option>\
                                                    </select>\
                                                </div>\
                                                <div class="form-floating mb-4">\
                                                    <label for="inputGroupSelect01">Ville</label>\
                                                    <select class="form-select br-bottom" id="inputGroupSelect01">\
                                                        <option value="1">One</option>\
                                                        <option value="2">Two</option>\
                                                        <option value="3">Three</option>\
                                                    </select>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                </div>\
                                </div>\
                                <div id="gerant-2">\
                                </div>');
    }
})
function removeGerant() {
    gerantinfo.parentNode.removeChild(gerantinfo);
}

function Ajoutergerant() {
    gerantinfo.insertAdjacentHTML(
            'beforeEnd', '<div class="row" id="gerant-added">\
                        <hr class="row-hr"> \
                        <div class="offset-1 col-md-8"> \
                            <div class="div-form-p-7">\
                                <p class="down-p2" style="font-size: 20px;">Informations sur le deuxième gérant non associé</p>\
                                <div id="input-dorpdowns">\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Civilité</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Prénom</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Nom</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Nationalité</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="input-group mb-4">\
                                        <label for="inputGroupSelect01">Numéro de CIN</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="div-form-p-7">\
                                <p class="down-p2" style="font-size: 20px;">Quelle est l adresse de votre deuxième assoccié ?</p>\
                                <div id="input-dorpdowns">\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Adresse</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Code postal</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Pays</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                    <div class="form-floating mb-4">\
                                        <label for="inputGroupSelect01">Ville</label>\
                                        <select class="form-select br-bottom" id="inputGroupSelect01">\
                                            <option value="1">One</option>\
                                            <option value="2">Two</option>\
                                            <option value="3">Three</option>\
                                        </select>\
                                    </div>\
                                </div>\
                            </div>\
                        </div> \
                        <div class="offset-2 col-md-1"> \
                            <button class="btn" onclick="removeGerant2() "> \
                                <img src="../assets/img/Suppression Copy 2.png"> \
                            </button> \
                        </div> \
                    </div>');
}
function removeGerant2() {
    gerantinfo.parentNode.removeChild(gerant2);
}
SiegeSocial.addEventListener("click", function () {
    if (SiegeSocial.checked == true) {
        const place = document.getElementById('siege-social');
        place.insertAdjacentHTML('beforeend','<div id="input-dorpdowns">\
                                                <p class="down-p2" style="font-size: 20px;">Où sera fixé le siège social de lentreprise ?</p>\
                                                <div id="input-dorpdowns">\
                                                    <div class="form-floating mb-4">\
                                                        <label for="inputGroupSelect01">Adresse</label>\
                                                        <select class="form-select br-bottom" id="inputGroupSelect01" name="Adresse">\
                                                            <option value="1">65 Rue des Aqueducs</option>\
                                                            <option value="2">Two</option>\
                                                            <option value="3">Three</option>\
                                                        </select>\
                                                    </div>\
                                                    <div class="form-floating mb-4">\
                                                        <label for="inputGroupSelect01">Code postal</label>\
                                                        <select class="form-select br-bottom" id="inputGroupSelect01" name="Codepostal">\
                                                            <option value="1">69005</option>\
                                                            <option value="2">Two</option>\
                                                            <option value="3">Three</option>\
                                                        </select>\
                                                    </div>\
                                                    <div class="form-floating mb-4">\
                                                        <label for="inputGroupSelect01">Pays</label>\
                                                        <select class="form-select br-bottom" id="inputGroupSelect01" name="Pays">\
                                                            <option value="1">France</option>\
                                                            <option value="2">Two</option>\
                                                            <option value="3">Three</option>\
                                                        </select>\
                                                    </div>\
                                                    <div class="form-floating mb-4">\
                                                        <label for="inputGroupSelect01">Ville</label>\
                                                        <select class="form-select br-bottom" id="inputGroupSelect01" name="Ville">\
                                                            <option value="1">Lyon</option>\
                                                            <option value="2">Two</option>\
                                                            <option value="3">Three</option>\
                                                        </select>\
                                                    </div>\
                                                </div>\
                                            </div>')
    }
})