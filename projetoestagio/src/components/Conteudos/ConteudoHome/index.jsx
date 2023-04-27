import React from "react";
import styles from './ConteudoHome.module.css'
import Logo3 from '../../../assets/images/Logo3.png'
import { Icon } from '@iconify/react';

const ConteudoHome =()=>{
    return(
        <div className={styles.caixa}>
            <img className={styles.logoImagem} src={Logo3}/>
            <h1 className={styles.tituloPrincipal}>Para quem foi criado?</h1>
            <div className={styles.caixaBloco}>
                <div className={styles.bloco}>
                    <div className={styles.fundoImagem1}>
                        <Icon className={styles.imagem} icon="ph:student-fill"/>
                    </div>
                    <h2 className={styles.tituloBloco}>Aluno</h2>
                    <p className={styles.textoBloco}>Para que os alunos possam escolher um professor para orientá-los durante o trabalho, acompanhar as etapas que ele precisa fazer para finalizar o projeto e quais etapas já foram concluídas.</p>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.fundoImagem2}>
                        <Icon className={styles.imagem} icon="ph:chalkboard-teacher-fill"/>
                    </div>
                    <h2 className={styles.tituloBloco}>Professor orientador</h2>
                    <p className={styles.textoBloco}>Para que os professores possam acompanhar a formação dos grupos e a escolha do tema do TCC por parte dos alunos, orientar alguns grupos de alunos e verificar as etapas que os alunos já tiverem finalizado.</p>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.fundoImagem3}>
                        <Icon className={styles.imagem} icon="game-icons:white-book"/>
                    </div>
                    <h2 className={styles.tituloBloco}>Coordenador</h2>
                    <p className={styles.textoBloco}>Para que os coordenadores possam acompanhar o progressso dos professoresna orientação dos alunos e o andamento dos trabalhos criados pelos mesmos.</p>
                </div>
            </div>
        </div>
    )
}

export default ConteudoHome