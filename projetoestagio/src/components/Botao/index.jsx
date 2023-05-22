import React from "react";
import styles from "./styles.module.css";

const Botao =(props)=>{
    return (
        <button className={styles.botao}>{props.label}</button>
    )
}

export default Botao