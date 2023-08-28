import {Route, Routes} from 'react-router-dom'

export default function Project(props) {
    return(
        <li>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <a className='button' href='#'>Check it out</a>
        </li>
    )
}