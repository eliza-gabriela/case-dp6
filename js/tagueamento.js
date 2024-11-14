// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//EVENTO GA4 Formulário Enviado com sucesso
document.addEventListener('DOMContentLoaded', function () {
    var formEnviado = "Obrigado pelo seu contato!";
    function mensagemDeSucesso() {
        if (document.body && document.body.innerText.includes(formEnviado)) {
            console.log("Formulário Enviado");
            gtag('event', 'formulario_enviado')
        } else {
            setTimeout(mensagemDeSucesso, 500);
        }
    }
    mensagemDeSucesso()
})
