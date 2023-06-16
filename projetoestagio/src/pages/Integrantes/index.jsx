import React from "react";
import styles from "./styles.module.css";

const Integrantes =()=>{
    return(
        <div>
            <div className={styles.caixa}>
                <h1 className={styles.tituloPrincipal}>Integrantes</h1>
                <div className={styles.caixaBloco}>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Ana Fulana Lima</h2>
                        <p className={styles.textoBloco}>Desenvolvimento de Software Multiplataforma • 2º Semestre</p>
                        <p className={styles.textoBloco}>ana.lima33@fatec.sp.gov.br</p>
                    </div>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>Carlos Fulano Lima</h2>
                        <p className={styles.textoBloco}>Desenvolvimento de Software Multiplataforma • 2º Semestre</p>
                        <p className={styles.textoBloco}>carlos.lima23...</p>
                    </div>
                    <div className={styles.bloco}>
                        <h2 className={styles.tituloBloco}>João Fulano Lima</h2>
                        <p className={styles.textoBloco}>Desenvolvimento de Software Multiplataforma • 2º Semestre</p>
                        <p className={styles.textoBloco}>joao.lima13@fatec.sp.gov.br</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrantes