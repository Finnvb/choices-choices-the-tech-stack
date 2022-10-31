import styles from './Button.module.css';
import { Link } from "react-router-dom";
function Button(props){
return  <div className={styles.container}>
<Link to={props.buttonLink}><img className={styles.img} src={props.source} alt="goldplate2" />
<div class={styles.centered}>{props.buttonText}</div></Link>
</div>

}
export default Button;