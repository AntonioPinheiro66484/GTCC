import React from "react";
import styles from "./styles.module.css";
import {Icon} from "@iconify/react";
import { aumentarFonte,diminuirFonte } from "../../static/fonte";
const BotaoAcessibilidade =()=>{
    return (
        <ul className={styles.caixa}>
            <li>
                <div className={styles.botaoPrincipal}>
                    <Icon icon="lucide:person-standing"/>
                </div>
                <ul className={styles.caixaOpcoes}>
                    <li >
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
            </li>
        </ul>
    )
}

export default BotaoAcessibilidade