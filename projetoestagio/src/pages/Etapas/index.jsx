import React,{useState}from "react";
import styles from "./styles.module.css";
import BarraPesquisa from "../../components/BarraPesquisa";
import { Icon } from "@iconify/react";

const BotaoOpcoes =()=>{
    const [botaoOpcoes, setBotaoOpcoes] = useState(false)
    const showBotaoOpcoes = () => setBotaoOpcoes(!botaoOpcoes)
}

const Etapas =()=>{
    return(
        <div>
            <BarraPesquisa/>
            <div className={styles.caixa}>
                <h1 className={styles.tituloPrincipal}>Etapas</h1>
                <div className={styles.caixaBloco}>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Etapa 1</h2>
                            <p className={styles.textoBloco}>Definição de identidade do projeto</p>
                            <p className={styles.textoBloco}>Entrega até segunda-feira, 27 de março</p>
                            <p className={styles.textoBloco}>Concluído</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botaoConcluir}>Marcar como concluída</button>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Etapa 2</h2>
                            <p className={styles.textoBloco}>Estudo de caso do tema escolhido</p>
                            <p className={styles.textoBloco}>Entrega até quarta-feira, 29 de março</p>
                            <p className={styles.textoBloco}>Em andamento</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botaoConcluir}>Marcar como concluída</button>
                            <button className={styles.botaoOpcoes}>
                                <Icon icon="mi:options-vertical"/>
                            </button>
                            <ul class={styles.paiItens}>
                                <li><button className={styles.item}>Editar</button></li>
                                <li><button className={styles.item}>Excluir</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Etapa 3</h2>
                            <p className={styles.textoBloco}>Análise de solução proposta</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botaoConcluir}>Marcar como concluída</button>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>Etapa 4</h2>
                            <p className={styles.textoBloco}>Análise de solução proposta</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <button className={styles.botaoConcluir}>Marcar como concluída</button>
                        </div>
                    </div>
                    <button className={styles.botaoAdicionar}>
                        <Icon className={styles.imagemAdicionar} icon="ph:plus-circle"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Etapas