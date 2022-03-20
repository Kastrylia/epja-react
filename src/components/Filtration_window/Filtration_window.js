import React from 'react'

import styles from './Filtration_window.module.css'
import close_btn_img from '../../icons/close_icon.png'

function Filtration_window(){
    return(
        <div className={styles.filtration_window}>
            <div className="controls">
                <button className='clear_btn'>Clear</button>
                <button className='close_btn'><img src={close_btn_img}alt="" /></button>
            </div>

            <div className="diet_selector">
                <h4>
                    Diet labels
                </h4>
            </div>

            <div className="meal_selector">
                <h4>
                    Meal types
                </h4>
            </div>

            <div className="health_selector">
                <h4>
                    Health labels
                </h4>
            </div>
        </div>
    )
}

export default Filtration_window