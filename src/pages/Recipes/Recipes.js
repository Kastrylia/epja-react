import React,{useState,useEffect,useRef} from 'react'

import styles from './Recipes.module.css'

import Recipes_list from './Recipes_list'
import Filtration_window from './Filtration_window'

import search_icon from '../../icons/search-icon.png'
import filtration_icon from '../../icons/filtration_icon.jpg'

function Recipes(props){
    const API = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=65dec05c&app_key=23d0b898ba9de2d82036352d7d926b83'

    let [recipesList, setRecipesList] = useState([])

    let search_bar = useRef()

    function handleEnterPush(event){
        if (event.key === 'Enter' ){
            makeSearchRequest()
        }
    }


    let [filtrationVisible,setFiltrationVisible] = useState(false)

    function handleFiltrationClick(){
        setFiltrationVisible(!filtrationVisible)
    }


    function makeSearchRequest(){

        if (search_bar.current.value === undefined){
            return null
        }

        async function getRecepiesList(){
            let dietConf = [...filtrationFlags.current.diet_pref].map((flag)=>`&diet=${flag}`).join('')
            let healthConf = [...filtrationFlags.current.health_pref].map((flag) =>`&health=${flag}` ).join('')
            let mealConf = [...filtrationFlags.current.meal_pref].map((flag) =>`&mealType=${flag}`).join('')

            let request = API + '&q=' + search_bar.current.value + dietConf + mealConf + healthConf
            let response = await fetch(request)
            response = await response.json()
            let recipes = response.hits
            console.log(response)
            setRecipesList(recipes)

        }

        getRecepiesList()
    }


    let filtrationFlags = useRef({
        diet_pref: new Set(),
        meal_pref:new Set(),
        health_pref:new Set()
    })

    function handleDietPreferencesChange(event){
        let pushedSwitchName = event.target.name

        if (pushedSwitchName === 'balanced' || pushedSwitchName === 'high-protein' || pushedSwitchName === 'low-fat'){
            if (event.target.checked){
                filtrationFlags.current.diet_pref.add(pushedSwitchName)
            } else{
                filtrationFlags.current.diet_pref.delete(pushedSwitchName)
            }
        } else if (pushedSwitchName === 'gluten-free' || pushedSwitchName === 'vegetarian' || pushedSwitchName === 'low-sugar' ||pushedSwitchName === 'dairy-free'){
            if (event.target.checked){
                filtrationFlags.current.health_pref.add(pushedSwitchName)
            } else{
                filtrationFlags.current.health_pref.delete(pushedSwitchName)
            }
        } else{
            if (event.target.checked){
                filtrationFlags.current.meal_pref.add(pushedSwitchName)
            } else{
                filtrationFlags.current.meal_pref.delete(pushedSwitchName)
            }
        }
    }

    

    return(
        <section className={styles.recipes_panel}>
            <div className={styles.headline}>
                <h2>All recipes</h2> 
            </div>

            <div className={styles.search_panel}>
                <button className={styles.filtration_btn} onClick={handleFiltrationClick}>
                    <span>Filtration</span>
                    <img src={filtration_icon} alt="" />
                </button>

                <input type="text" placeholder="Search..." id={styles.search_bar} onKeyDown = {handleEnterPush} ref={search_bar}/>

                <button type="submit" id={styles.search_btn} onClick={makeSearchRequest} >
                    <img src={search_icon} alt="" width="30px" height="30px" />
                </button>
                <Filtration_window isVisible = {filtrationVisible} closeWindow={handleFiltrationClick} toggleHandler={handleDietPreferencesChange}/>
                
            </div>
   
            {(recipesList.length === 0)? false:<Recipes_list recipesList={recipesList} />}
            
        </section>
    )
}

export default Recipes