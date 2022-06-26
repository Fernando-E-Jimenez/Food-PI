import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'

export default function Card({ img, name, diet, id }) {
    return (
    <div className={styles.containerCard}>
        <div className={styles.containerRecipe}>
            <h3 className={styles.titleCard}>{name}</h3>
            <img className={styles.recipeImage}src={img} alt='Not found'/>
            <ul className={styles.cardDescription}>{diet.map(d => <li key={d.name}>{d.name}</li>)}</ul>
            <Link to={'/recipe/' + id}><button className={styles.refreshButton}>Detail</button></Link>
        </div>   
    </div>
    )
}

