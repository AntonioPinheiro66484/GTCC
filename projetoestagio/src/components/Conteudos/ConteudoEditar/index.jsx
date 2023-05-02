import React from "react";
import styles from './ConteudoEditar.module.css'

const ConteudoEditar =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Editar trabalho</h1>
            <form className={styles.formulario}>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Nome</h2></label>
                    <input  className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Tipo</h2></label>
                    <input  className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Tema</h2></label>
                    <input  className={styles.input} type="text"/>
                </div>
                <fieldset className={styles.caixaEtapa}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Integrantes</h2></legend>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Orientador</h2></label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Descrição</h2></label>
                    <input className={styles.input} type="text"/>
                </div>
                <fieldset className={styles.caixaEtapa}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Etapa 1</h2></legend>
                    <label className={styles.label}>Nome</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Prazo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Status</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <fieldset className={styles.caixaEtapa}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Etapa 2</h2></legend>
                    <label className={styles.label}>Nome</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Prazo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Status</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
            </form>      
        </div>
    )
}

export default ConteudoEditar