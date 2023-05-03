import React from "react";
import styles from './ConteudoEditar.module.css'
import { Icon } from '@iconify/react';

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
                <fieldset className={styles.caixaFieldset}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Integrantes</h2></legend>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Nome completo</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <button className={styles.botaoAdicionar}>
                    <Icon className={styles.imagemAdicionar} icon="ph:plus-circle" />
                </button>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Orientador</h2></label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.caixaInput}>
                    <label><h2 className={styles.tituloSecundarioInput}>Descrição</h2></label>
                    <input className={styles.input} type="text"/>
                </div>
                <fieldset className={styles.caixaFieldset}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Etapa 1</h2></legend>
                    <label className={styles.label}>Nome</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Prazo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Status</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <fieldset className={styles.caixaFieldset}>
                    <legend><h2 className={styles.tituloSecundarioFieldset}>Etapa 2</h2></legend>
                    <label className={styles.label}>Nome</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Prazo</label>
                    <input className={styles.input} type="text"/>
                    <label className={styles.label}>Status</label>
                    <input className={styles.input} type="text"/>
                </fieldset>
                <button className={styles.botaoAdicionar}>
                    <Icon className={styles.imagemAdicionar} icon="ph:plus-circle" />
                </button>
                <div className={styles.caixaBotao}>
                    <button className={styles.botao}>
                        Salvar 
                    </button>
                    <button className={styles.botao}>
                        Cancelar
                    </button>
                </div>
                
            </form>      
        </div>
    )
}

export default ConteudoEditar