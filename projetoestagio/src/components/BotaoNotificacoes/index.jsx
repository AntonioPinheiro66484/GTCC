import React,{useState}from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const BotaoNotificacoes =()=>{
    const [botaoOpcoes, setBotaoOpcoes] = useState(false)

    const showBotaoOpcoes = () => setBotaoOpcoes(!botaoOpcoes)

    return(
        <div className={styles.caixa}>
            <button className={styles.botaoOpcoes} onClick={showBotaoOpcoes}>
                <Icon icon="material-symbols:notifications-outline"/>
            </button>
            {botaoOpcoes &&
                <div>
                    <span className={styles.sombra} onClick={showBotaoOpcoes}></span>
                    <div className={styles.caixaOpcoes} active={setBotaoOpcoes}>
                        <h1 className={styles.tituloPrincipal}>Notificações</h1>
                        <div className={styles.caixaBloco}>
                            <div className={styles.bloco}>
                                <div className={styles.caixaTexto}>
                                    <p className={styles.textoBloco}>Um grupo do Xº semestre do curso de Y solicitou a sua orientação para um trabalho sobre Z.</p>
                                </div>
                                <div className={styles.caixaBotao}>
                                    <button className={styles.botao}>Aceitar</button>
                                    <button className={styles.botao}>Recusar</button>
                                </div>
                            </div>
                            <div className={styles.bloco}>
                                <div className={styles.caixaTexto}>
                                    <p className={styles.textoBloco}>A Xº etapa do seu trabalho expira em Y dias.</p>
                                </div>
                                <div className={styles.caixaBotao}>
                                    <button className={styles.botao}>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BotaoNotificacoes