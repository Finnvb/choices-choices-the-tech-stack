import Header from "../lib/components/Header";
import { usePrismicDocumentByUID } from '@prismicio/react'
import { useParams } from "react-router-dom";
import styles from './Uid.module.css';




function UidPage(){   
    const {uid} = useParams();
    const [document] = usePrismicDocumentByUID('story', uid);
console.log(document)

console.log(uid)


return <div> <Header/>

<main className={styles.main}>


{document && (<h1 className={styles.h1}>{document.data.storytitle[0].text}</h1>) }
 
{document && (<p className={styles.p}>{document.data.storycontent[0].text}</p>) }

<section className={styles.section}>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image2.alt} src={document.data.storyimages[0].image2.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image2.alt}</p>) }</div>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image1.alt} src={document.data.storyimages[0].image1.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image1.alt}</p>) }</div>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image3.alt} src={document.data.storyimages[0].image3.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image3.alt}</p>) }</div>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image4.alt} src={document.data.storyimages[0].image4.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image4.alt}</p>) }</div>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image5.alt} src={document.data.storyimages[0].image5.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image5.alt}</p>) }</div>
<div>{document && (<img className={styles.img} alt={document.data.storyimages[0].image6.alt} src={document.data.storyimages[0].image6.url}/>) }
{document && (<p className={styles.altText}>{document.data.storyimages[0].image6.alt}</p>) }</div>


</section>
</main>




        </div> 
}

export default UidPage;