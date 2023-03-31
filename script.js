var contador = 2;
var tabela = document.getElementById("sampleTable");

function js_add_rows(event) {
  var numeroDeColunas = document.getElementById("txtNumRows").value;
  if (numeroDeColunas <= 10)
    for (var i = 0; i < numeroDeColunas; i++) {
      var coluna = tabela.insertRow(-1); // Adiciona uma nova linha no final da tabela
      var celula1 = coluna.insertCell(0); // Adiciona uma nova célula na primeira coluna da nova linha
      var celula2 = coluna.insertCell(1); // Adiciona uma nova célula na segunda coluna da nova linha
      celula1.innerHTML = "Row" + (contador + 1) + " cell1";
      celula2.innerHTML = "Row" + (contador + 1) + " cell2";
      contador++;
    }
}
