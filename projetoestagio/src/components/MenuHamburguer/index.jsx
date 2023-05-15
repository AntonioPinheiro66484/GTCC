import React from 'react'
import styles from './styles.module.css'
import {Icon} from '@iconify/react'

const MenuHamburguer = (props) => {

    
    return (
        <button className={styles.menuHamburguer} onClick={() => setOpen(props.value)}>
            <Icon icon="ic:baseline-menu"/>
        </button>
    )
  }
  
  export default MenuHamburguer