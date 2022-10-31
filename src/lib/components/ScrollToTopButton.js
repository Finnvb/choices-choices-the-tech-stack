import { Link } from "react-router-dom";
import styles from './ScrollToTopButton.module.css';


function ScrollToTop(props){


 
    return(<Link >  <div onClick={() => {
        window.scroll(0, 0);
      }} className={styles.btn}><img src="/Arrow.svg" alt="button" /></div></Link>)

}

export default ScrollToTop;