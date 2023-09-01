import styles from '../styles/home.module.css'
import Project from '../components/project'


export default function Home() {
  return (
    <main>
      <div className={styles.intro}>
      <h1 className={styles.heading}>Kaeli Dalton</h1>
      <p>Web Developer and Designer</p>
      </div>
      <br></br>
      <div className={styles.body}>
      <h2 className={styles.heading}>Latest Work</h2>
      <p>Hover over the project name to hide the information and see the full design!</p>
      <div className={styles.house}>
          <Project name='Common Ground' description='Company specializing in providing affordable housing without sacrificing style'/>
      </div>
      <div className={styles.wheel}>
          <Project name='A Wheel-ly New Perspective' description='An exhibit aimed at showing the realities of accessibility when using a wheelchair in public spaces.'/>
      </div>
      <div className={styles.tech}>
          <Project name='Portiko Technologies' description='Company specializing in mobile applications.' img='/images/Image1.jpg'/>
      </div>
      </div>
    </main>
  )
}