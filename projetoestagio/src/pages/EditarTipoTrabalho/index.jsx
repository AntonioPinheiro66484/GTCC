import React from 'react'
import styles from './styles.module.css'

const EditarTipoTrabalho =()=>{
    return(
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Editar tipo de trabalho</h1>
            <form className={styles.formulario}>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Nome</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Máximo de integrantes por grupo</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label className={styles.labelPrincipal}>Cursos</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaBotao}>
                    <button className={styles.botao}>Salvar</button>
                    <button className={styles.botao}>Cancelar</button>
                </div>
            </form>      
        </div>
    )
}

export default EditarTipoTrabalho