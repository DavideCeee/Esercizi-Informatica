let Tasks=[
    {"Titolo": "Studiare Italiano", "done": false},
    {"Titolo": "Giocare a basket", "done": false},
    {"Titolo": "Svegliarsi", "done": true},
    {"Titolo": "Prendere una nota", "done": true}
];

let elencoAzioniSvolte=document.getElementById("ul-done");
let elencoAzioniDaSvolgere=document.getElementById("ul-not-done");

let azioniSvolte="";
let azioniDaSvolgere="";

Tasks.forEach(task=>{
    if(task.done){
        azioniSvolte+="<li>" + task.Titolo + "</li>";
    }
    else{
        azioniDaSvolgere+="<li>" + task.Titolo + "</li>";
    }
})

elencoAzioniSvolte.innerHTML= azioniSvolte;
elencoAzioniDaSvolgere.innerHTML= azioniDaSvolgere;