import React from 'react'
import styles from './index.module.css/'
import Acessibilidade from '../../components/Acessibilidade'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home =()=>{
    <div className={styles.caixa}>
        <Acessibilidade></Acessibilidade>
        <Header></Header>
        <NavBar></NavBar>
        <SearchBar></SearchBar>
        <Footer></Footer>
    </div>
}

export default Home