import styles from '../styles/home.module.css'
import Project from '../components/project'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Kaeli Dalton</h1>
      <p>Web Developer</p>
      <h2>Latest Work</h2>
      <div>
        <ul>
          <Project name='Project 1' description='Project 1'/>
          <Project name='Project 2' description='Project 2'/>
        </ul>
      </div>
    </main>
  )
}