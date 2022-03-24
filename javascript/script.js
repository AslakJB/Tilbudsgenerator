var formEl = document.getElementById("form");
var ekstraTilbud = [];
var svarEl = document.getElementById("svar")

priser = {
    "Internett 50mbit" :399,
    "Internett 100mbit" :599,
    "Internett 300mbit" :799,
    "Internett 500mbit" :999,
    "ekstraTvDekoder" : 499,
    "wifiExtender" : 399,
}





formEl.addEventListener("submit", function(e){
    e.preventDefault();
    var data = formEl.elements;
    var ansattNavn = data.ansattNavn.value;
    var kundeNavn = data.kundeNavn.value;
    var brukerInternett = data.internett.value;
    var sum = priser[brukerInternett];
    
    
    for (var i = 0; i < data.ekstraTilbud.length; i++) {
        if (data.ekstraTilbud[i].checked) {
            ekstraTilbud.push(data.ekstraTilbud[i].value);
            sum += priser[data.ekstraTilbud[i].value]
        }
    }

    svarEl.innerHTML = "Hei " + kundeNavn + " takk for en hyggelig telefonsamtale \r\n"
    svarEl.innerHTML = ""

    svarEl.innerHTML = "Det er bare å svare på denne eposten hvis du har noen spørsmål. \r\n Med vennelig hilsen " + ansattNavn + "."
     
})