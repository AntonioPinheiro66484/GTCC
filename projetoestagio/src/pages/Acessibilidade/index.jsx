import React from 'react'
import styles from './styles.css'

const Acessibilidade =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Acessibilidade</h1>
            <p>Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.</p>
            <p>Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em A-.</p>
            <p>Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas Ctrl + sinal de + para aumentar todo o site e Ctrl + sinal de - para diminuir. Para voltar ao padrão, pressione Ctrl + 0.</p>
            <p>Este site tem melhor acessibilidade quando acessado nas versões mais atualizadas do seu navegador web. Utilize sempre a versão mais recente de seu software.</p>
            <h2 className={styles.tituloPrincipal}>Teclas de atalho por navegadores</h2>
            <p>Internet Explorer e Google Chrome:</p>
            <p>Alt + 1 – ir para o conteúdo;</p>
            <p>Alt + 2 – ir para o menu;</p>
            <p>Alt + 3 – ir para o rodapé.</p>
            <p>Firefox:</p>
            <p>Alt + Shift + 1 – ir para o conteúdo;</p>
            <p>Alt + Shift + 2 – ir para o menu;</p>
            <p>Alt + Shift + 3 – ir para o rodapé.</p>
            <p>Opera:</p>
            <p>Shift + Esc + 1 – ir para o conteúdo;</p>
            <p>Shift + Esc + 2 – ir para o menu;</p>
            <p>Shift + Esc + 3 – ir para o rodapé.</p>
            <p>Safari e OmniWeb:</p>
            <p>Ctrl + 1 – ir para o conteúdo;</p>
            <p>Ctrl + 2 – ir para o menu;</p>
            <p>Ctrl + 3 – ir para o rodapé.</p>
            <h2 className={styles.tituloPrincipal}>Navegação por tabulação</h2>
            <p>Use a tecla Tab para navegar por elementos que recebem ação do usuário no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e Shift + Tab para retornar. Use as setas direcionais para acessar as informações textuais.</p>
            <h2 className={styles.tituloPrincipal}>Sugestões de programas disponíveis para pessoas com deficiência</h2>
            <p>- Nitrous Voice Flux: controla o computador por voz. Gratuito;</p>
            <p>- NVDA: software livre para ler tela – vários idiomas (Windows);</p>
            <p>- YeoSoft Text: leitor de tela em inglês e português;</p>
            <p>- Jaws for Windows: leitor de tela – vários idiomas;</p>
            <p>- Virtual Vision: leitor de telas em português do Brasil;</p>
            <p>- DOSVOX: sistema para deficientes visuais (Windows ou Linux);</p>
            <p>- Talckback: leitor de tela disponível em smartphones Android.</p>
            <p>Observação: leia no manual do leitor de telas sobre a melhor forma de navegação em páginas web.</p>
            <h2 className={styles.tituloPrincipal}>LIBRAS - Língua Brasileira de Sinais</h2>
            <p>Este site é acessível em LIBRAS através do <a href="http://www.vlibras.gov.br/" target="_blank">VLibras</a>.</p>
            <p>-Do lado direito de cada página do site existe o ícone de um Widget informando que o site é acessível em LIBRAS.</p>
            <p>-Para traduzir, basta clicar sobre o ícone e selecionar o texto que deseja traduzir.</p>
        </div>
    )
}

export default Acessibilidade