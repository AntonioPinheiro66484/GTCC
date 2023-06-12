import React from "react";
import styles from "./styles.module.css";

const Acessibilidade =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Acessibilidade</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <p className={styles.textoBloco}>Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.</p>
                    <p className={styles.textoBloco}>Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em A-.</p>
                    <p className={styles.textoBloco}>Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas Ctrl + sinal de + para aumentar todo o site e Ctrl + sinal de - para diminuir. Para voltar ao padrão, pressione Ctrl + 0.</p>
                    <p className={styles.textoBloco}>Este site tem melhor acessibilidade quando acessado nas versões mais atualizadas do seu navegador web. Utilize sempre a versão mais recente de seu software.</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Navegação por tabulação</h2>
                    <p className={styles.textoBloco}>Use a tecla Tab para navegar por elementos que recebem ação do usuário no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e Shift + Tab para retornar. Use as setas direcionais para acessar as informações textuais.</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>Sugestões de programas disponíveis para pessoas com deficiência</h2>
                    <p className={styles.textoBloco}>- Nitrous Voice Flux: controla o computador por voz. Gratuito;</p>
                    <p className={styles.textoBloco}>- NVDA: software livre para ler tela – vários idiomas (Windows);</p>
                    <p className={styles.textoBloco}>- YeoSoft Text: leitor de tela em inglês e português;</p>
                    <p className={styles.textoBloco}>- Jaws for Windows: leitor de tela – vários idiomas;</p>
                    <p className={styles.textoBloco}>- Virtual Vision: leitor de telas em português do Brasil;</p>
                    <p className={styles.textoBloco}>- DOSVOX: sistema para deficientes visuais (Windows ou Linux);</p>
                    <p className={styles.textoBloco}>- Talckback: leitor de tela disponível em smartphones Android.</p>
                    <p className={styles.textoBloco}>Observação: leia no manual do leitor de telas sobre a melhor forma de navegação em páginas web.</p>
                </div>
                <div className={styles.bloco}>
                    <h2 className={styles.tituloBloco}>LIBRAS - Língua Brasileira de Sinais</h2>
                    <p className={styles.textoBloco}>Este site é acessível em LIBRAS através do <a className={styles.link} href="http://www.vlibras.gov.br/" target="_blank" rel="noopener noreferrer">VLibras</a>.</p>
                    <p className={styles.textoBloco}>-Do lado direito de cada página do site existe o ícone de um Widget informando que o site é acessível em LIBRAS.</p>
                    <p className={styles.textoBloco}>-Para traduzir, basta clicar sobre o ícone e selecionar o texto que deseja traduzir.</p>
                </div>
            </div>
        </div>
    )
}

export default Acessibilidade
