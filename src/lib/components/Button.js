import styles from './Button.module.css';
import { Link } from "react-router-dom";
function Button(props){
return  <div className={styles.container}>
<img className={styles.img} src={props.source} alt="goldplate2" />
<div class={styles.centered}><Link to={props.buttonLink}>Discover Stories</Link></div>
</div>

}
export default Button;