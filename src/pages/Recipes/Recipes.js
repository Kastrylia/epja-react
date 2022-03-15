import React,{useState,useEffect} from 'react'

import Recipes_list from '../../components/Recipes_list'

import styles from './Recipes.module.css'

import search_icon from '../../icons/search-icon.png'
import filtration_icon from '../../icons/filtration_icon.jpg'

function Recipes(props){
    let API = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=65dec05c&app_key=23d0b898ba9de2d82036352d7d926b83'

    let [searchQuery, setSearchQuery] = useState({query: null})

    let [recipesList, setRecipesList] = useState([])

    function handleSearch(){
        let query = document.getElementById(styles.search_bar).value
        setSearchQuery({query:query})
    }

    useEffect(()=>{

        if (searchQuery.query === null){
            return null
        }

        async function getRecepiesList(){
            let request = API + '&q=' + searchQuery.query

            let response = await fetch(request)
            response = await response.json()
            let recipes = response.hits
            setRecipesList(recipes)
            console.log(response)
        }

        getRecepiesList()
    }, [searchQuery])


    

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

                <input type="text" placeholder="Search..." id={styles.search_bar} />

                <button type="submit" id={styles.search_btn} onClick={handleSearch}>
                    <img src={search_icon} alt="" width="30px" height="30px" />
                </button>
            </div>

            
            {(recipesList.length === 0)? false:<Recipes_list recipesList={recipesList} />}
            
            
           
        </section>
    )
}

export default Recipes