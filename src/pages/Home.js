
import Button from "../lib/components/Button";
import styles from './Home.module.css';

function HomePage(){
return <main className={styles.main} >
	<header >
		
		
		<h1>Stories of the <br /> ILOJO BAR</h1>

		<h2>Discover the stories of the <br /> demolished bar in Lagos</h2>
	</header>

	<section className={styles.section}>
		<Button 
			
			linktext='Discover Stories'
			source = '/goldplate2.png'
		
			
			/>


		<img className={styles.img} src="/cdf-1950s.png" alt="Ilojo-bar" />
	</section>
</main>


}

export default HomePage;