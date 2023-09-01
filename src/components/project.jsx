import {Route, Routes} from 'react-router-dom'
import styles from '../styles/home.module.css'


export default function Project(props) {
    return(
        <div className={styles.project}>
        <h3>{props.name}</h3>
        <br></br>
        <p>{props.description}</p>
        </div>
    )
}