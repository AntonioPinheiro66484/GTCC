import React, {useState} from "react";
import styles from "./styles.module.css";
import {Icon} from "@iconify/react";
import { aumentarFonte,diminuirFonte } from "../../static/fonte";

const BotaoAcessibilidade =()=>{
    const [botaoAcessibilidade, setBotaoAcessibilidade] = useState(false)

    const showBotaoAcessibilidade = () => setBotaoAcessibilidade(!botaoAcessibilidade)

    return (
        <div className={styles.caixa}>
            <ul className={botaoAcessibilidade ? styles.caixaOpcoesAtivado : styles.caixaOpcoesDesativado}>
                <li>
                    <button className={styles.botaoSecundario}>
                        <Icon icon="material-symbols:contrast"/>
                    </button>
                </li>
                <li>
                    <button onClick={aumentarFonte} className={styles.botaoSecundario}>
                        <Icon icon="fluent-mdl2:font-increase"/>
                    </button>
                </li>
                <li>
                    <button onClick={diminuirFonte} className={styles.botaoSecundario}>
                        <Icon icon="fluent-mdl2:font-decrease"/>
                    </button>
                </li>
            </ul>
            <div className={styles.botaoPrincipal} onClick={showBotaoAcessibilidade}>
                <Icon icon="lucide:person-standing"/>
            </div>
        </div>
    )
}

export default BotaoAcessibilidade