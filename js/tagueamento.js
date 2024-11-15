// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


//EVENTO form_start
document.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.id === 'email' || clickedElement.id === 'telefone' || clickedElement.id === 'nome') {
        console.log('iniciou Formulário');
        gtag('event','form_start',{
            'page_location':'https://eliza-gabriela.github.io/case-dp6/sobre.html#contato',
            'form_id':'formContato',
            'form_name':'formContato',
            'form_destination':'https://www.dp6.com.br/'
        })
    }
});

//EVENTO form_submit
document.addEventListener('submit', function(){
    console.log("Preencheu o form e clicou em enviar")
    gtag('event','form_submit',{
        'page_location':'https://eliza-gabriela.github.io/case-dp6/sobre.html#contato',
        'form_id':'formContato',
        'form_name':'formContato',
        'form_destination':'https://www.dp6.com.br/',
        'form_submit_text':'ENVIAR'
    })
});


//EVENTO view_form_success OK
document.addEventListener('DOMContentLoaded', function () {
    var formEnviado = "Obrigado pelo seu contato!";
    function mensagemDeSucesso() {
        if (document.body && document.body.innerText.includes(formEnviado)) {
            console.log("Menssagem de form enviado com sucesso");
            gtag('event','view_form_sucess',{
                'page_location':'https://eliza-gabriela.github.io/case-dp6/sobre.html#contato',
                'form_id':'formContato',
                'form_name':'formContato'
            })
        } else {
            setTimeout(mensagemDeSucesso, 500);
        }
    }
    mensagemDeSucesso()
});


//EVENTO click-entre em contato
document.querySelectorAll('a').forEach(e =>
    e.addEventListener('click', event => {
        var href = event.target.getAttribute('href');
        if (href.includes("contato") && !href.includes("sobre")) {
            console.log("Clicou em ENTRE EM CONTATO");
            gtag('event','click',{
                'page_location':'https://eliza-gabriela.github.io/case-dp6/',
                'element_name':'entre_em_contato',
                'element_group':'menu'
            })
        }
    })
);

//EVENTO file_download
document.querySelectorAll('a').forEach(e =>
    e.addEventListener('click', event => {
        var href = event.target.getAttribute('href');
        if (href.includes("pdf")) {
            console.log("Clicou em PDF");
            gtag('event','file_download',{
                'page_location':'https://eliza-gabriela.github.io/case-dp6/',
                'element_name':'download_pdf',
                'element_group':'menu'
            })
        }
    })
);


//EVENTO click-lorem
document.querySelector('[data-id="lorem"]').addEventListener('click', function(){
    console.log('Clicou no botão lorem')
    gtag('event','click',{
        'page_location':'https://eliza-gabriela.github.io/case-dp6/analise.html',
        'element_name':'lorem',
        'element_group':'ver_mais'
    })
})

//EVENTO click-ipsum
document.querySelector('[data-id="ipsum"]').addEventListener('click', function(){
    console.log('Clicou no botão ipsum')
    gtag('event','click',{
        'page_location':'https://eliza-gabriela.github.io/case-dp6/analise.html',
        'element_name':'ipsum',
        'element_group':'ver_mais'
    })
})

//EVENTO click-dolor
document.querySelector('[data-id="dolor"]').addEventListener('click', function(){
    console.log('Clicou no botão dolor')
    gtag('event','click',{
        'page_location':'https://eliza-gabriela.github.io/case-dp6/analise.html',
        'element_name':'dolor',
        'element_group':'ver_mais'
    })
})
