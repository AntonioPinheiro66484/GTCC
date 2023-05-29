import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const EditarTrabalho =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Editar trabalho</h1>
            <form className={styles.formulario}>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Nome</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Tipo</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Tema</label>
                    <input className={styles.input} type="text"/>
                </div>
                <fieldset className={styles.caixaFieldset}>
                    <legend className={styles.legendPrincipal}>Integrantes</legend>
                    <label className={styles.labelSecundaria}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.labelSecundaria}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.labelSecundaria}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <button className={styles.botaoAdicionar}>
                    <Icon className={styles.imagemAdicionar} icon="ph:plus-circle"/>
                </button>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Orientador</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Descrição</label>
                    <input className={styles.input} type="text"/>
                </div>
                <button className={styles.botaoAdicionar}>
                    <Icon className={styles.imagemAdicionar} icon="ph:plus-circle"/>
                </button>
                <div className={styles.caixaBotao}>
                    <button className={styles.botao}>Salvar</button>
                    <button className={styles.botao}>Cancelar</button>
                </div>
            </form>      
        </div>
    )
}

export default EditarTrabalho