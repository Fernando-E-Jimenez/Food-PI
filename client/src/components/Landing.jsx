import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

export default function LandingPage(){
    
    return(
        <div className={styles.landing}>
            <div className={styles.divisor}>
            <h1 className={styles.h1}>Recipes Project APP</h1>
            <Link to ='/home'>
                <button className={styles.button}>Find you!</button>
            </Link>
            </div>
        </div>
    )
}