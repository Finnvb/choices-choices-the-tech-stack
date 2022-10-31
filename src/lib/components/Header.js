import styles from './Header.module.css';

function Header(){
   return <div className={styles.header}>
	<div className={styles.home}>
		<a className={styles.centered} href="/">Home </a>
	</div>

	<h1 className={styles.h1}>Stories of the <br /> ILOJO BAR</h1>

	<div>
		<div className={styles.container}>
			<img src="close.svg" alt="closeImg" />
			<img
				className={styles.close}
				
				src="hamburgerMenu.svg"
				alt="hamburgerImg"
			/>
		</div>
		<p >Menu</p>
	</div>
</div>

    
    }
    export default Header;