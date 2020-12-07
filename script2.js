

function funkcija2(){
    let prenosImena=document.getElementById("prenos-imena");
    prenosImena.innerHTML= localStorage.getItem("ime");
}

function funkcija1(){
    let kredit=100;
    let kreditPolje=document.getElementById("kredit");
    kreditPolje.innerHTML=kredit;
}

async function izvlacenje(){
    resetuj();
    let brojac=0;
    let polje=document.getElementById("izvlacenje-broja");
    let poljeZaBrojeve=document.getElementById("izvuceni-brojevi");
    let izvuceniBrojevi =[];

    while(brojac<20){
        let znak=true;
        let broj;
        while(znak){
            // generisanje broja i provera da li je vec izvucen 
            broj= Math.round(Math.random()*1000) % 80 + 1;
            izvuceniBrojevi.includes(broj) ? znak=true :znak=false;
        }
        izvuceniBrojevi[brojac]=broj;
        polje.innerHTML=broj;
        brojac++;
        poljeZaBrojeve.innerHTML=izvuceniBrojevi;
        document.getElementById(broj).classList.add("izvucen");
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve()},2000);
        })
        await promise;

    }   
}

function uplata(){
    document.getElementById("za-uplatu").style.zIndex=1;
}
function zatvori(){
    document.getElementById("za-uplatu").style.zIndex=-1;
}
function uplati(){

    alert("nesto");

    zatvori();
}
function resetuj(){
    for(let i=1;i<81;i++){
        document.getElementById(i).classList.remove("izvucen");
    }
}
function potvrdi(){
    let brojKombinacija=document.getElementById("izborBrojeva").value;
    let prozorZaIzborBrojeva=document.getElementById("prozor-za-izbor-brojeva");

    for(let i=0;i<brojKombinacija;i++){
        let div=document.createElement("DIV");
        let node=document.createElement("P");
        let text=document.createTextNode((i+1)+":");
        node.appendChild(text);
        let input=document.createElement("INPUT");
        //style
        node.style.width="10%";
        node.style.margin="0";
        div.style.display="flex";
        input.classList.add("broj-za-uplatu"+(i+1));

        div.appendChild(node);
        div.appendChild(input)
        prozorZaIzborBrojeva.appendChild(div);
        
    }

}



window.onload=funkcija1();
window.onload=funkcija2();

//window.onload=izvlacenje();
// let poljeIme= document.getElementById("ime");
// poljeIme.innerHTML=prenosImena;