import styles from '../styles/contact.module.css'
import GitHubImageComponent from '../components/gitHubImage'
import LinkedInImageComponent from '../components/linkedInImage'
export default function Contact() {
  return (
    <>
    <main>
      <h1 className={styles.heading}>Contact Me</h1>
      <h2>For examples of my coding and development work:</h2>
      <GitHubImageComponent></GitHubImageComponent>
      <p> Check out my <a href='https://github.com/KaeliDalton' target='external'>Github!</a></p>
      <h2>For information regarding my education, certifications, and other skills:</h2>
      <LinkedInImageComponent></LinkedInImageComponent>
      <p>Check out my <a href='linkedin.com/in/kaeli-dalton' target='external'>LinkedIn</a></p>
      <h2>To contact me regarding commmissions:</h2>
      <p>Call or Message: (386) 516-3515 </p>
      <p>You can also email me at kaelidalton@gmail.com</p>

    </main>
    </>
  )
}