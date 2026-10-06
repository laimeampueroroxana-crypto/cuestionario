function pestana1() {
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
}

function pestana2() {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
}

function pestana3() {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
    document.getElementById("p4").style.display = "none";
}

function pestana4() {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "block";
}

function saludo() {
    let nombre1 = document.getElementById("nombres").value;
    let apellido1 = document.getElementById("apellidos").value;
    document.getElementById("mensaje").textContent = "Hola, " + nombre1 + " " + apellido1 + " Buenas tardes";
}