import linkedInImageLocation from '../assets/images/LI-Logo.png'
import styles from '../styles/contact.module.css'
export default function LinkedInImageComponent(){
    return <img src={linkedInImageLocation} alt='photo of white woman smiling at camera' className={styles.img}/>
}