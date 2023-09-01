import { Link } from 'react-router-dom'
import styles from '../styles/about.module.css'
import AboutImageComponent from '../components/aboutImage'

export default function About() {
  return (
    <main>
      <h1 className={styles.heading}>Kaeli Dalton</h1>
      <p>I am a graduate student at the University of Florida studying Web Design. This site serves as a portfolio to showcase some of my recent work.</p>
      <br></br>
      <p>I did my undergraduate degree in Media Production, Management, and Technology at the University of Florida. During that degree, my main focus and passion was video editing. I also served as an intern for Empirical Evidence for a semester where I read scripts submitted to the agency and provided feedback on their viability. I also located stories with potential for development as feature films and provided commentary on the outline for the adaptation of a short story, before it moved to the script drafting phase.</p>
      <p> During my current degree, I have found a new passion for design work. I will be doing graphic design and communications work in an internship this fall for a non-profit. I also am currently serving as the Vice President of Operations for a student organization at UF, where I am in charge of creating graphics; communicating upcoming meetings, events, and membership requirements to current members; and creating a semesterly newsletter for organization alumni. </p>
      <Link to='/' class='button'>You can check out my work here!</Link>
      <br></br>
      <AboutImageComponent></AboutImageComponent>
      <Link to='/contact' class='button'>You can find my contact information here!</Link>
    </ main>
  )
}