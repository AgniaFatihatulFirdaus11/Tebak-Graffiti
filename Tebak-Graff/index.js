let body = document.body;
    let mode = document.getElementById("mode");
    let home = document.getElementById("restrat");
    

function darkMode() {
    body.classList.toggle("dark");
    
}


const gambarList = [
    {src: "asset/resk12 - Copy.png", jawaban: "resk12"},
    {src: "asset/parte.jpg", jawaban: "parte"},
    {src: "asset/skors.jpg", jawaban: "skors"},
    {src: "asset/seen.jpg", jawaban: "seen"},
    {src: "asset/skerots.jpeg", jawaban: "skerots"},
    {src: "asset/south.jpeg", jawaban: "south"},
    {src: "asset/gane.jpeg", jawaban: "gane"},
    {src: "asset/dkil.jpeg", jawaban: "dkil"},
    {src: "asset/alky.jpeg", jawaban: "alky"},
];

let index = 0;

function tampilkanGanbar() {
    document.getElementById("tag").src = gambarList[index].src;
    document.getElementById("jawaban").value = "";
    document.getElementById("feedback").textContent = "";

}

function cekJawaban() {
    const input =
    document.getElementById("jawaban").value.toLowerCase( )
    .trim( ); 
    const jawabanBenar = gambarList[index].jawaban;

    if (input === jawabanBenar) {
        document.getElementById("feedback").textContent = "YAPSS BETUL!!";
        index++;
        if (index < gambarList.length) {
            setTimeout(tampilkanGanbar, 1000);
        } else {
            document.getElementById("feedback").textContent = "BERES!! Kamu Hebatt"
        }
    } else {
        document.getElementById("feedback").textContent = "SALAH CUY!!, Coba Lagi!";
    }
}

// function restrat() {
//     if(darkCounter == darkLimited) {
//         info.textContent = "(:jatah fitur darkmode anda habis:)"
//         let darkRemainingLeft = darkLimited - darkCounter;
//         mode.style.display = "none"
//         home.textContent = "RESTRAT"
//         return;
//     }
// }
function rerender() {
    location.reload();
}

window.onload = tampilkanGanbar;