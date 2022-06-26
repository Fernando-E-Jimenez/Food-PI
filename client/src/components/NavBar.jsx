import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLinkedin , faWpforms} from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
    return (
        <ul className={styles.menu}>
            <li><Link to='/home' className={styles.a}> <FontAwesomeIcon icon={faHome} size="2x" style={{padding: '5px'}} /> Home </Link> </li>
            <li><Link to='/create' className={styles.a}> <FontAwesomeIcon icon={faWpforms} size="2x" style={{padding: '5px'}} /> Create your recipe! </Link> </li>
            <li><a href="https://www.linkedin.com/in/fernando-ezequiel-jim%C3%A9nez-69999b166/"
            target="_blank" rel="noreferrer" className={styles.a}> <FontAwesomeIcon icon={faLinkedin} size="2x" style={{padding: '5px'}} /> LinkedIn </a></li>
            <li> <a href="https://github.com/Fernando-E-Jimenez"
            target="_blank" rel="noreferrer" className={styles.a}><FontAwesomeIcon icon={faGithub} size="2x" style={{padding: '5px'}} /> GitHub </a></li>
            <li className={styles.slider}></li>
        </ul>
    )
}