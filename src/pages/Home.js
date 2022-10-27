import { Link } from "react-router-dom";

import styles from './Home.module.css';

function HomePage(){
return <main className={styles.main} >
	<header>
		
		
		<h1>Stories of the <br /> ILOJO BAR</h1>

		<h2>Discover the stories of the <br /> demolished bar in Lagos</h2>
	</header>

	<section>
		<li><Link to='/overview'>Overview page</Link></li>

		<img src="/cdf-1950s.png" alt="Ilojo-bar" />
	</section>
</main>


}

export default HomePage;