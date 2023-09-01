import gitHubImageLocation from '../assets/images/github-mark.png'
import styles from '../styles/contact.module.css'
export default function GitHubImageComponent(){
    return <img src={gitHubImageLocation} alt='photo of white woman smiling at camera' className={styles.img}/>
}