import React from "react"
import style from './recipe.module.css'

export const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={img} alt = ""/>
        </div>
    );
}