var tamanhoFonte = 16

const aumentarFonte =()=>{
    if (tamanhoFonte < 20) {
        tamanhoFonte++
        document.body.style.fontSize = tamanhoFonte + "px"
    }
}

const diminuirFonte =()=>{
    if (tamanhoFonte > 14) {
        tamanhoFonte--
        document.body.style.fontSize = tamanhoFonte + "px"
    }
}

export{diminuirFonte,aumentarFonte}