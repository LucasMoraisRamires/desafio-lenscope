const tipoDeLente = {
    olhoDireito:"",
    olhoEsquerdo:""

} 

// declaração de variaveis
let esfericoDireito
let cilindricoDireito
let textoOlhoDireito 


let esfericoEsquerdo 
let cilindricoEsquerdo 
let textoOlhoEsquerdo 

const checarCampos = () => {
    esfericoDireito = document.getElementById('esfericoDireito')
    cilindricoDireito = document.getElementById('cilindricoDireito')
    esfericoEsquerdo = document.getElementById('esfericoEsquerdo')
    cilindricoEsquerdo = document.getElementById('cilindricoEsquerdo')
    
    textoOlhoEsquerdo = document.getElementById('olho-esquerdo')
     textoOlhoDireito = document.getElementById('olho-direito')
     let areaDeReposta = document.getElementById('resposta-container')

     textoOlhoEsquerdo.style.visibility = "hidden"
     textoOlhoDireito.style.visibility = "hidden"
     areaDeReposta.style.visibility = "hidden"

    if (esfericoDireito.value == 0 && cilindricoDireito.value == 0 && esfericoEsquerdo.value == 0 && cilindricoEsquerdo.value == 0) {
        alert('Por favor insira qual é o grau das Lentes')
    }else if ((esfericoDireito.value == 0 && cilindricoDireito.value == 0) && (esfericoEsquerdo.value !== 0 || cilindricoEsquerdo.value !== 0)) {
        calcularTipoDeLenteEsquerda()
    }else if ((esfericoDireito.value !== 0 && cilindricoDireito.value !== 0) && (esfericoEsquerdo.value == 0 || cilindricoEsquerdo.value == 0)) {
        calcularTipoDeLenteDireita()
    }else{
        calcularTipoDeLenteDireita()
        calcularTipoDeLenteEsquerda()

    }
    

    
}


/* Função que calcula a lente apropriada para o olho direito */
const calcularTipoDeLenteDireita = () => {
 
    esfericoDireito = document.getElementById('esfericoDireito')
    cilindricoDireito = document.getElementById('cilindricoDireito')
    textoOlhoDireito = document.getElementById('olho-direito')
    let areaDeReposta = document.getElementById('resposta-container')
    

    if ((esfericoDireito.value <= -3 && esfericoDireito.value >= -12) &&  (cilindricoDireito.value == 0 )) {
    
        areaDeReposta.style.visibility = "visible";
        textoOlhoDireito.style.visibility = "visible"

        tipoDeLente.olhoDireito = "Lente Prime"
        textoOlhoDireito.textContent = "OLHO DIREITO: " + tipoDeLente.olhoDireito 
        console.log('lente', tipoDeLente.olhoDireito)
        
       
        
    } else if  ((esfericoDireito.value <= -3 && esfericoDireito.value >= -10) &&  (cilindricoDireito.value <= -0.25 && cilindricoDireito.value >= -2 )){
        areaDeReposta.style.visibility = "visible";
        textoOlhoDireito.style.visibility = "visible"
        tipoDeLente.olhoDireito = "Lente Prime"
        textoOlhoDireito.textContent = "OLHO DIREITO: " + tipoDeLente.olhoDireito 
        console.log('lente', tipoDeLente.olhoDireito)
        

    }else if  ((esfericoDireito.value <= 0 || esfericoDireito.value >= -15)  &&  (cilindricoDireito.value <= 0 || cilindricoDireito.value >= -5 )  ){
        areaDeReposta.style.visibility = "visible";
        textoOlhoDireito.style.visibility = "visible"
        tipoDeLente.olhoDireito = "Lente Vision"
        textoOlhoDireito.textContent = "OLHO DIREITO: " + tipoDeLente.olhoDireito 
        console.log('lente', tipoDeLente.olhoDireito)
      

    }

}




/* Função que calcula a lente apropriada para o olho esquerdo */
const calcularTipoDeLenteEsquerda = () => {

    
    esfericoEsquerdo = document.getElementById('esfericoEsquerdo')
    cilindricoEsquerdo = document.getElementById('cilindricoEsquerdo')
    textoOlhoEsquerdo = document.getElementById('olho-esquerdo')
    let areaDeReposta = document.getElementById('resposta-container')

    
  

    if ((esfericoEsquerdo <= -3 && esfericoEsquerdo >= -12) &&  (cilindricoEsquerdo == 0 )) {
        areaDeReposta.style.visibility = "visible";
        textoOlhoEsquerdo.style.visibility = "visible"

        tipoDeLente.olhoEsquerdo = "Lente Prime"
        textoOlhoEsquerdo.textContent =  "OLHO ESQUERDO: " + tipoDeLente.olhoEsquerdo
        console.log('lente', tipoDeLente.olhoEsquerdo)
       
        
    } else if  ((esfericoEsquerdo.value <= -3 && esfericoEsquerdo.value >= -10) &&  (cilindricoEsquerdo.value <= -0.25 && cilindricoEsquerdo.value >= -2 )){
        areaDeReposta.style.visibility = "visible"
        textoOlhoEsquerdo.style.visibility = "visible"
        tipoDeLente.olhoEsquerdo = "Lente Prime"
        textoOlhoEsquerdo.textContent = "OLHO ESQUERDO: " +  tipoDeLente.olhoEsquerdo
        console.log('lente', tipoDeLente.olhoEsquerdo)

    }else if  ((esfericoEsquerdo.value <= 0 || esfericoEsquerdo.value >= -15)  &&  (cilindricoEsquerdo.value <= 0 || cilindricoEsquerdo.value >= -5 )  ){
        areaDeReposta.style.visibility = "visible"
        textoOlhoEsquerdo.style.visibility = "visible"
        tipoDeLente.olhoEsquerdo = "Lente Vision"
        textoOlhoEsquerdo.textContent =  "OLHO ESQUERDO: " + tipoDeLente.olhoEsquerdo
        console.log('lente', tipoDeLente.olhoEsquerdo)

    }

}
/* Função que calcula a lente apropriada para o olho esquerdo */







