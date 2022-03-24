import React from 'react'

import styles from './Filtration_window.module.css'

import close_btn_img from '../../../icons/close_icon.png'
import Filtration_checkbox from '../Filtration_checkbox'

function Filtration_window(props){
    let visibility = props.isVisible ? { opacity: 1} : { opacity: 0, 'pointerEvents':'none'} 
    return(
        <div className={styles.filtration_window} style = {visibility} >
            <div className="controls">
                <button className={styles.close_btn}><img src={close_btn_img}alt="" onClick={props.closeWindow}/></button>
            </div>

            <div className= {styles.pref_selector}>
                <h4>
                    Diet labels
                </h4>
                <div className = {styles.checkbox_wrapper} >
                    <Filtration_checkbox name = 'balanced' displaying_name = 'Balanced' onChange={props.toggleHandler} />
                    <Filtration_checkbox name = 'high-protein' displaying_name = 'High-Protein' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'low-fat' displaying_name = 'Low-Fat' onChange={props.toggleHandler}/>
                </div>
            </div>

            <div className={styles.pref_selector}>
                <h4>
                    Meal types
                </h4>
                <div className = {styles.checkbox_wrapper}>
                    <Filtration_checkbox name = 'breakfast' displaying_name = 'Breakfast' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'lunch' displaying_name = 'Lunch' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'dinner' displaying_name = 'Dinner' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'snack' displaying_name = 'Snack' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'teatime' displaying_name = 'Teatime' onChange={props.toggleHandler}/>
                </div>
            </div>

            <div className = {styles.pref_selector}>
                <h4>
                    Health labels
                </h4>
                <div className = {styles.checkbox_wrapper} >
                    <Filtration_checkbox name = 'gluten-free' displaying_name = 'Gluten-Free' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'vegetarian' displaying_name = 'Vegetarian' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'low-sugar' displaying_name = 'Low Sugar' onChange={props.toggleHandler}/>
                    <Filtration_checkbox name = 'dairy-free' displaying_name = 'Dairy-Free' onChange={props.toggleHandler}/>
                </div>
            </div>
        </div>
    )
}

export default Filtration_window