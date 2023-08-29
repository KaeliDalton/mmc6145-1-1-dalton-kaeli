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
      <div>
      <h2 className={styles.heading}>Latest Work</h2>
          <Project name='Common Ground' description='Company specializing in providing affordable housing without sacrificing style' img='/images/Image2.png'/>
          <Project name='A Wheel-ly New Perspective' description='An exhibit aimed at showing the realities of accessibility when using a wheelchair in public spaces.' img='/images/Image3.png'/>
          <Project name='Portiko Technologies' description='Company specializing in mobile applications.' img='images/Image1.jpg'/>
      </div>
    </main>
  )
}