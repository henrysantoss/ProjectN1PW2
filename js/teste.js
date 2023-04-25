function h1(text) {
    var h = document.createElement("H1");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}
var teste = sessionStorage.getItem("teste")
h1(teste);