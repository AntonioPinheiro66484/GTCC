
import React,{useState}from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const MenuOpcoes =()=>{
    const [botaoOpcoes, setBotaoOpcoes] = useState(false)

    const showBotaoOpcoes = () => setBotaoOpcoes(!botaoOpcoes)

    return(
        <div className={styles.caixa}>
            <button className={styles.botaoOpcoes} onClick={showBotaoOpcoes}>
                <Icon icon="mi:options-vertical"/>
            </button>
            {botaoOpcoes &&
                <div>
                    <span className={styles.sombra} onClick={showBotaoOpcoes}></span>
                    <div className={styles.caixaOpcoes} active={setBotaoOpcoes}>
                        <div className={styles.areaPuxar}></div>
                        <ul className={styles.paiItens}>
                            <li><button className={styles.botaoItem}><Icon className={styles.iconeItem} icon="octicon:check-16"/>Marcar como concluída</button></li>
                            <li><button className={styles.botaoItem}><Icon className={styles.iconeItem} icon="fluent:edit-28-regular"/>Editar</button></li>
                            <li><button className={styles.botaoItem}><Icon className={styles.iconeItem} icon="radix-icons:trash"/>Excluir</button></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default MenuOpcoes