const dugme = document.getElementsByClassName("dugme-meni")[0]
const linkovi = document.getElementsByClassName("linkovi-zaglavlje")[0]

dugme.addEventListener('click', () =>{
    linkovi.classList.toggle('active')
})


function prenosImena(){
let unesenoIme=document.getElementById("ime").value;
localStorage.setItem("ime",unesenoIme);
return false;
}
