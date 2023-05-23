import React from "react";
import styles from "./styles.module.css";

const InfoFooter =()=>{
    return(
        <div className={styles.caixa}>
            <p>Faculdade de Tecnologia da Zona Leste</p>
            <p>Avenida Águia de Haia, 2983 CEP 03694-000</p>
            <p>Telefones: (11) 2049-2600 / (11) 2026-1303</p>
            <p>Desenvolvido por <a className={styles.link} href="https://www.linkedin.com/in/antonio-pinheiro-9a9a35213">Antonio Gabriel</a>, <a className={styles.link} href="https://www.linkedin.com/in/felipecolettii">Felipe Coletti</a> e <a className={styles.link} href="https://www.linkedin.com/in/karoline-souza-225058213">Karoline de Souza</a>. &copy; 2023</p>
        </div>
    )
}

export default InfoFooter