import React from "react";
import styles from "./styles.module.css";

const EditarEtapa =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Editar etapa</h1>
            <form className={styles.formulario}>
                <fieldset className={styles.caixaFieldset}>
                    <legend className={styles.legendPrincipal}>Etapa 1</legend>
                    <label className={styles.labelSecundaria}>Nome</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.labelSecundaria}>Prazo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.labelSecundaria}>Status</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <div className={styles.caixaBotao}>
                    <button className={styles.botao}>Salvar</button>
                    <button className={styles.botao}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarEtapa