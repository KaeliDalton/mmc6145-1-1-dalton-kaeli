import { Link } from 'react-router-dom'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <main>
      <h1 className={styles.heading}>Kaeli Dalton</h1>
      <p>I am a graduate student at the University of Florida studying Web Design. This site serves as a portfolio to showcase some of my recent work.</p>
      <Link to='/' class='button'>You can check out my work here!</Link>
      <br></br>
      <Link to='/contact' class='button'>You can find my contact information here!</Link>
    </ main>
  )
}