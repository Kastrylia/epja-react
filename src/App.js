import React from 'react';

import styles from './App.module.css';

import Header from './shared/Header'
import Recipes from './pages/Recipes'


function App() {
    return(
    <div className={styles.app_wrapper}>
        <Header />
        <Recipes />
    </div>)
}


export default App;
