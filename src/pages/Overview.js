import {  useFirstPrismicDocument } from '@prismicio/react'


function OverviewPage(){
    const [document] = useFirstPrismicDocument()
    console.log(document);
    return <div>{document && (<p>{document.data.storytitle[0].text}</p>) }
    
    <div>{document && (<p>{document.data.storycontent[0].text}</p>) }</div>
    
    </div>
    }
    
    export default OverviewPage;