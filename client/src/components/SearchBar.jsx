import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { searchByName, getRecipes } from "../actions";
import styles from "./SearchBar.module.css"

export default function SearchBar({returnToFirstPage}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleChange(e){
        e.preventDefault();
        if (e.target.value) {
            setName(e.target.value);
        }else {
            dispatch(getRecipes)
        }
    };
    function handleButton(e){
        e.preventDefault();
        dispatch(searchByName(name))
        setName("")
        .then(() =>{ returnToFirstPage(); })        
    };

    return (
        <div className={styles.searchContainer}>
            <input className={styles.searchInput} type="text" value={name}
            placeholder='Search:' 
            onChange={(e) => handleChange(e)}/>
            <button className={styles.buttonSearch} type='submit' onClick={ (e) => handleButton(e)} >Search</button>
        </div>
    )
}