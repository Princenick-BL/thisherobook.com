import { SECTION_TYPE } from "../constants"

export const getSection = (section) =>{
    if(section){
        switch(section?.type){
            case SECTION_TYPE.TEXT_BLOCK :
                return(
                    <div className="mb4 px3" dangerouslySetInnerHTML={{__html: section?.content}}></div>  
                )
               
            case SECTION_TYPE.IMAGE :
                return(
                    <amp-img
                        src={section?.content}
                        width={section?.meta?.width}
                        height={section?.meta?.height}
                        layout="responsive"
                        alt={section?.meta?.alt||"new image"}
                        className="mb4 mx3 br5"
                    ></amp-img>
                )
            default :
                return ""
        }

    }
}