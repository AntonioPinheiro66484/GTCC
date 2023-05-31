import React from "react";
import styles from "./styles.module.css"
import InfoFooter from "../InfoFooter";
import LogosFooter from "../LogosFooter";
import MapaFooter from "../MapaFooter";


const Footer =()=>{
    return(
        <div className={styles.caixa}>
            <MapaFooter/>
            <LogosFooter/>
            <InfoFooter/>
        </div>
    )
}

export default Footer 