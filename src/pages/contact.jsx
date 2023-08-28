import styles from '../styles/home.module.css'

export default function Contact() {
  return (
    <>
    <main>
      <h1 className={styles.placeholder}>Contact Me</h1>
      <p> Check out my <a href='https://github.com/KaeliDalton' target='external'>Github!</a></p>
      <p>Check out my <a href='linkedin.com/in/kaeli-dalton' target='external'>LinkedIn</a></p>
     {/* <a>{LinkedIn}</a>
     <a>{GitHub}</a> */}

    </main>
    </>
  )
}