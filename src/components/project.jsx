import {Route, Routes} from 'react-router-dom'


export default function Project(props) {
   const photo = props.img
    return(
        <div className='project'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
         <img src={props.img} alt="picture from Unsplash" />
        </div>
    )
}