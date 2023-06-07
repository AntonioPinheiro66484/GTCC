import React from "react";
import styles from "./styles.module.css";
import BarraPesquisa from "../../components/BarraPesquisa";
import { Icon } from "@iconify/react";
import MenuOpcoes from "../../components/MenuOpcoes";

const Etapas =()=>{
    return(
        <div>
            <BarraPesquisa/>
            <div className={styles.caixa}>
                <h1 className={styles.tituloPrincipal}>Etapas</h1>
                <div className={styles.caixaBloco}>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>1 - Definição de identidade do projeto</h2>
                            <p className={styles.textoBloco}>Entrega até 27 de março, segunda-feira</p>
                            <p className={styles.textoBloco}>Concluído</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <MenuOpcoes/>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>2 - Estudo de caso do tema escolhido</h2>
                            <p className={styles.textoBloco}>Entrega até 29 de março, quarta-feira</p>
                            <p className={styles.textoBloco}>Em andamento</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <MenuOpcoes/>
                        </div>
                    </div>
                    <div className={styles.bloco}>
                        <div className={styles.caixaTexto}>
                            <h2 className={styles.tituloBloco}>3 - Análise de solução proposta</h2>
                            <p className={styles.textoBloco}>Entrega até 31 de março, sexta-feira</p>
                            <p className={styles.textoBloco}>Não iniciada</p>
                        </div>
                        <div className={styles.caixaBotao}>
                            <MenuOpcoes/>
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