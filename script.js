function validarCodigo() {
    const codigoInserido = document.getElementById("codigo").value;
    const codigoCorreto = "125.11E.135.19C.21A.02M.049.1C7.24H"; // Código correto

    if (codigoInserido === codigoCorreto) {
        window.location.href = `validar.html?codigo=${codigoInserido}`;
    } else {
        document.getElementById("mensagem").innerHTML = "Código inválido ou inexistente";
        document.getElementById("mensagem").style.color = "red";
    }
}
function validarCodigo() {
    let codigoInserido = document.getElementById("codigo").value;
    let codigoCorreto = "125.11E.135.19C.21A.02M.049.1C7.24H"; // Defina o código correto aqui

    if (codigoInserido === codigoCorreto) {
        window.location.href = "validacao.html";
    } else {
        document.getElementById("mensagem").innerHTML = "Código inválido ou inexistente.";
        document.getElementById("mensagem").style.color = "red";
    }
}
