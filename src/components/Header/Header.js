import React from 'react';
import styles from './Header.module.css'
import cake_logo from '../../icons/cake-logo-transparent.png'
import stub_profile_picture from '../../icons/stub_profile_picture.png'

function Header(){
    return (
    <header>
        <nav>
            <div className="logo_wrapper">
                <img src={cake_logo} alt="" height={50} width={50}/>
            </div>
            <div className={styles.nav_menu_wrapper}>
                <ul className={styles.nav_menu}>
                    <li className={styles.nav_menu_item}><a href="">Main</a></li>
                    <li className={styles.nav_menu_item}><a href="">Recipes</a></li>
                    <li className={styles.nav_menu_item}><a href="">kKal</a></li>
                </ul>
            </div> 
        </nav>

        

        <div className={styles.profile_panel}>
            <img src={stub_profile_picture} alt="profile picture" height={50} width={50}/>
        </div>
        
    </header>)
}


export default Header