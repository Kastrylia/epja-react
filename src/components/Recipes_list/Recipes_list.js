import React from 'react'

import styles from './Recipes_list.module.css'
import Recipe_preview_window from '../Recipe_preview_window'

function Recepies_list(props){
    console.log(props.recipesList)
    return (<div className = {styles.recipe_grid}>
                {props.recipesList.map((item)=><Recipe_preview_window 
                name={item.recipe.label}
                key = {item.recipe.calories}
                ingredientsCount = {item.recipe.ingredients.length} 
                cookingTime = {item.recipe.totalTime}
                calories = {Math.trunc(item.recipe.calories)} 
                backgroundImage = {item.recipe.images.REGULAR.url}
                />)}
            </div>)
}

export default Recepies_list