import {  useAllPrismicDocumentsByType } from '@prismicio/react'

import Header from '../lib/components/Header';
import Button from '../lib/components/Button';
import Navmenu from '../lib/components/Navmenu';
import styles from './Overview.module.css';

function OverviewPage(){

    const [document] = useAllPrismicDocumentsByType('story')
 
    if(!document) return null;
  
      return (
   
        <>
           
         <Header/>

         {/* <Navmenu/> */}
      


 <main className={styles.main}>
{document.map((story) => {

// console.log(story)

        return (
         
          <section className={styles.section}>
         <div className={styles.imgcontainer}>
         <img className={styles.storyimage} src={story.data.storyimages[0].image1.url}/>
         </div>



         <div className={styles.window}>
				<img className={styles.window} src="window.svg" alt="window" />
				<img className={styles.windowLeft} src="windowLeft.svg" alt="window" />
				<img className={styles.windowRight} src="windowRight.svg" alt="window" />
				
			</div>


            <h2 className={styles.h2}>{story.data.storytitle[0].text}</h2>
         
            <Button linktext='Discover Stories' buttonLink={story.uid}  source ='/goldplate2.png'/>
        
          </section>
     
        );
      })}

</main>


        </>
    )
    
    }
    
    export default OverviewPage;