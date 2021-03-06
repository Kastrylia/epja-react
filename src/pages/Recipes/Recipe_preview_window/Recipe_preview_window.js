import React from 'react'
import styles from './Recipe_preview_window.module.css'

function Recipe_preview_window(props){
    return (
    <div className = {styles.item_wrapper} style = {{ backgroundImage: `url(${props.backgroundImage})`}}>
        <div className={styles.info_wrapper}>
            <h3 className = {styles.recipe_name}> {props.name} </h3>

            <div className={styles.recipe_detailed_info}> 
                <p className = {styles.ingredients_count}>
                    {props.ingredientsCount} ingredients
                </p>
                <p className={styles.time_calories_count}>
                    {props.cookingTime}min|{props.calories}kKal
                </p>
            </div>

        </div>
        
    </div>
    )
}

export default Recipe_preview_window