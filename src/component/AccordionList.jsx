import languages from "../data/languages"
import AccordionComponent from "./AccordionComponent"

export default function AccordionList() {
    return(
        <div className="container">

            {languages.map((comp) =>{
                return(
                      <AccordionComponent 
                      key={comp.id} 
                      title={comp.title} 
                      description={comp.description}
                      type="open"/>
                )
            })}
        </div>
           
    )
}