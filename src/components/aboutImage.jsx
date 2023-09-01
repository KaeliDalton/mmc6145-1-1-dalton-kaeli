import aboutImgLocation from '../assets/images/Image4.jpg'
import styles from '../styles/about.module.css'
export default function AboutImageComponent(){
    return <img src={aboutImgLocation} alt='photo of white woman smiling at camera' className={styles.img}/>
}