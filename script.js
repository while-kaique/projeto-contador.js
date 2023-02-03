function contar(){
    var inicio = window.document.querySelector('input#ini')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#pass')
    var texto = window.document.querySelector('div#res')
    texto.innerHTML = ''
        
    var ivalue = Number(inicio.value)
    var fvalue = Number(fim.value)
    var pvalue = Number(passo.value)

    if (pvalue == 0) {
        pvalue = 1
    }

    if (pvalue > fvalue) {
        window.alert('Tem algo errado aí...')
    } else {

    if (ivalue < fvalue) {
        for (ivalue; ivalue <= fvalue; ivalue += pvalue) {

            if (ivalue + pvalue > fvalue){
                texto.innerHTML += ivalue + '.' 
                break
            }
            texto.innerHTML += ivalue + ',  ' 
            }  
        } else if (ivalue > fvalue) {
            for (ivalue; ivalue >= fvalue; ivalue -= pvalue) {

                if (ivalue - pvalue < fvalue){
                    texto.innerHTML += ivalue + '.' 
                    break
                }
                texto.innerHTML += ivalue + ',  ' 
                }  
        }
    } 
}