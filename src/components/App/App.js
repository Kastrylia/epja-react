import styles from './App.module.css';
import React from 'react';
import Header from '../Header'
import Recipes from '../../pages/Recipes'

function App() {
    return(
    <div className={styles.app_wrapper}>
        <Header />
        <Recipes />
    </div>)
}



export default App;
