import {  useAllPrismicDocumentsByType } from '@prismicio/react'

import Header from '../lib/components/Header';
import Button from '../lib/components/Button';

import styles from './Overview.module.css';

function OverviewPage(){

    const [document] = useAllPrismicDocumentsByType('story')
 
    if(!document) return null;
  
      return (
   
        <>
           
         <Header/>
  

        {/* {document[7].data.storycontent.map(content => (
        
                <p key={`c-${content.text}`} >{content.text}</p>

        
        ))} */}


{/* {document[2].data.storyimages.map(content => (
        
        // <p key={`c-${content.text}`} >{content.text}</p>
        <div>{(<img src={content.image1.url}/>) }</div>

))} */}

 <main className={styles.main}>
{document.map((story) => {
  
console.log(story)

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

{/* <div>{document && (<img src={document[3].data.storyimages[0].image1.url}/>) }</div> */}
        </>
    )
    
    }
    
    export default OverviewPage;