let tipo = Number(prompt("Escolha um tipo de carne: 1=File Duplo; 2=Alcatra; 3=Picanha"));
let quantidade = Number(prompt("Qual a quantidade?"));
let formapgt = Number(prompt("escolha a forma de pagamento. 1=Dinheiro; 2=Cartão; 3=Cartão Tabajara."));
let formapgtdesconto;
let escocarne = Number();
let valortotal;
let valordesconto;
let nomecarne;
let nomepgt;


//quantidade limite
if (quantidade <= 5) {
    //tipo de carne elterar para swithc
    switch (tipo) {
        case 1:
            nomecarne = "File Duplo";
            escocarne = 40.90;
            break;
        case 2:
            nomecarne = "Alcatra";
            escocarne = 50.90;
            break;
        case 3:
            nomecarne = "Picanha";
            escocarne = 60.90;
            break;
        case (tipo > 3):
            document.write("Error Tente novamente")

    }

}
if (quantidade > 5) {
    switch (tipo) {
        case 1:
            nomecarne = "File Duplo";
            escocarne = 50.80;
            break;
        case 2:
            nomecarne = "Alcatra";
            escocarne = 60.80;
            break;
        case 3:
            nomecarne = "Picanha";
            escocarne = 70.80;
            break;
        case (tipo > 3 || tipo == 0 || tipo == null):
            document.write("Error Tente novamente")
    }
}



valortotal = escocarne * quantidade;
//forma de pagamento
if (formapgt == 1) {
    nomepgt = "Dinhero";
}

else if (formapgt == 2) {
    nomepgt = "Cartão"
}

else if (formapgt == 3) {
    nomepgt = "Cartão Tabajara.";
    formapgtdesconto = 5
}
else if (formapgt > 3 || formapgt == 0 || formapgt == null) {
    document.write("Error Tente novamente")
}

//se for com desconto
if (formapgt == 3) {
    valordesconto = valortotal - (valortotal * (formapgtdesconto / 100))
}

document.write("<td>", nomecarne, "🐄</td>");
document.write("<td>", quantidade, "KG</td>");
document.write("<td>", valortotal, "R$</td>");
document.write("<td>", nomepgt, "</td>");
document.write("<td>R$", valortotal * (formapgtdesconto / 100) , "</td>");
document.write("<tdR$>", valordesconto,"</td>")