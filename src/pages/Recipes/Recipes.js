import React,{useState,useEffect} from 'react'

import styles from './Recipes.module.css'

import Recipes_list from './Recipes_list'
import Filtration_window from './Filtration_window'

import search_icon from '../../icons/search-icon.png'
import filtration_icon from '../../icons/filtration_icon.jpg'

function Recipes(props){
    const API = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=65dec05c&app_key=23d0b898ba9de2d82036352d7d926b83'

    let [searchQuery, setSearchQuery] = useState(null)
    let [recipesList, setRecipesList] = useState([])

    function handleSearch(){
        let query = document.getElementById(styles.search_bar).value
        if (query === null){
            return null
        }
        setSearchQuery(query)
    }

    function handleEnterPush(event){
        if (event.key === 'Enter' ){
            handleSearch()
        }
    }

    function handleFiltrationWindow(){

    }

    useEffect(()=>{

        if (searchQuery === null){
            return null
        }

        async function getRecepiesList(){
            let request = API + '&q=' + searchQuery

            let response = await fetch(request)
            response = await response.json()
            let recipes = response.hits
            setRecipesList(recipes)
            console.log(recipes)
        }

        getRecepiesList()
    }, [searchQuery])


    let [filtrationFlags,setFiltrationFlags] = useState({
        diet_pref:[],
        meal_pref:[],
        health_pref:[]
    })

    function handleFiltrationChange(event){
        
    }

    

    return(
        <section className={styles.recipes_panel}>
            <div className={styles.headline}>
                <h2>All recipes</h2> 
            </div>

            <div className={styles.search_panel}>
                <button className={styles.filtration_btn}>
                    <span>Filtration</span>
                    <img src={filtration_icon} alt="" />
                </button>

                <input type="text" placeholder="Search..." id={styles.search_bar} onKeyDown = {handleEnterPush}/>

                <button type="submit" id={styles.search_btn} onClick={handleSearch} >
                    <img src={search_icon} alt="" width="30px" height="30px" />
                </button>
            </div>
   
            {(recipesList.length === 0)? false:<Recipes_list recipesList={recipesList} />}
            <Filtration_window />
        </section>
    )
}

export default Recipes