import React from "react";
import styles from "./Paginate.module.css"


export default function Paginate({ recipesPerPage, recipes, paginate, currentPage }) {

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
        pageNum.push(i)
    }
    return (
        <div className={styles.center}>
            <ul className={styles.pagination}>
                {
                    pageNum && pageNum.map(num => (
                        <li key={num}>
                            <button key={num} onClick={() => paginate(num)}
                                style={num === currentPage ? { backgroundColor: '#e9a617',color: 'white' ,border: '1px solid #fcac01' } : {}}
                            >{num}</button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
