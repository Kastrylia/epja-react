import React from 'react';

import styles from './Filtration_checkbox.module.css'

function Filtration_checkbox(props){
    function handle(e){
        console.log(e)
    }
    return (
        <label className = {styles.checkbox_body}  >
            <input type="checkbox" name={props.name} className={styles.checkbox} onChange={props.onChange} />
            <div className={styles.filtration_switch}>
                {props.displaying_name}
            </div>
        </label>
    )
}

export default Filtration_checkbox