import styles from './Navmenu.module.css';
import { Link } from "react-router-dom";


function Navmenu(props){




function cancelHandler(){
    props.close(); 
  
}

return(
    <section className={styles.section} >

<nav className={styles.nav}>

<img className={styles.close} onClick={cancelHandler} src='hamburgerMenu.svg' alt='closeMenu'  />

<li onClick={cancelHandler} className={styles.li}><Link to="/a-spanish-migrant-looking-for-greener-pastures">A Spanish Migrant</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/the-returnees-who-changed-lagos" >The returnees</Link></li>
<li onClick={cancelHandler}  className={styles.li}><Link to="/a-vip-from-abeokuta-visits-fernandez-house" >A VIP</Link></li>
<li onClick={cancelHandler}  className={styles.li}><Link to="/the-macaulay-connection" >The Macaulay connection</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/a-family-house-to-the-olaiyas" >A family house</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/memories-of-slave-trade" >Slave trade</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/botched-dreams-for-ilojo-bar" >Botched dreams</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/the-angels-story" >The Angel's Story</Link></li> 
<li onClick={cancelHandler}  className={styles.li}><Link to="/illegal-demolition" >Illegal demolition</Link></li> 


</nav>

</section>

)
}

export default Navmenu;