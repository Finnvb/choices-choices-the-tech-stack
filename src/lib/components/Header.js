import styles from './Header.module.css';
import Navmenu from '../components/Navmenu';
import { useState } from 'react';
function Header(){

	const [ menuIsOpen, setMenuIsOpen] = useState(false);


	function openMenu(){
		setMenuIsOpen(true)
	}

	function closeMenu(){
		setMenuIsOpen(false)
		console.log(menuIsOpen)
	}
	

   return <div className={styles.header}>
	<div className={styles.home}>
		<a className={styles.centered} href="/">Home </a>
	</div>

	<h1 className={styles.h1}>Stories of the <br /> ILOJO BAR</h1>

	<div>
		<div  className={styles.container}>
			<img onClick={openMenu} src="close.svg" alt="closeImg" />
			<img
				className={styles.close}
				
				src="hamburgerMenu.svg"
				alt="hamburgerImg"
				
			/>
			{menuIsOpen &&
			<Navmenu close={closeMenu}/>}
		</div>
		<p >Menu</p>
	</div>
</div>

    
    }
    export default Header;