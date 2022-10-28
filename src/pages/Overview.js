import {  useFirstPrismicDocument } from '@prismicio/react'


function OverviewPage(){
    const [document] = useFirstPrismicDocument()

    // return <div>{document && (<p>{document.data.storytitle[0].text}</p>) }
    if(!document) return null;
    return (
        <>
        {document.data.storycontent.map(content => (
        
                <p key={`c-${content.text}`} style={{marginBottom: '2rem'}}>{content.text}</p>

        
        ))}
        </>
    )
    
  
  
    // <div>{document && (<p>{document.data.storycontent[2].text}</p>) }</div>
    
    // </div>
    // }
    // return (
    //     <div>
    //       {document.map(story => {
    //         return (
    //             <div>{document && (<p>{story.document.data.storycontent.text}</p>) }</div>
    //         );
    //       })}
    //     </div>
    //   );
    }
    
    export default OverviewPage;