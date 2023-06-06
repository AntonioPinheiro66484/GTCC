import React from "react";
import styles from "./styles.module.css";
import MenuOpcoes from "../../components/MenuOpcoes";

const TiposTrabalho =()=>{
    return (
        <div className={styles.caixa}>
            <h1 className={styles.tituloPrincipal}>Tipos de trabalho</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <div className={styles.caixaTexto}>
                        <h2 className={styles.tituloBloco}>Projeto Interdisciplinar</h2>
                        <p className={styles.textoBloco}>Máximo de integrantes por grupo: 5</p>
                        <p className={styles.textoBloco}>Cursos: ADS, DSM</p>
                    </div>
                    <div className={styles.caixaBotao}>
                        <MenuOpcoes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiposTrabalho