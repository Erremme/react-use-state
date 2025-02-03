import languages from "../data/languages"
import AccordionComponent from "./AccordionComponent"
import { useState } from "react"

export default function AccordionList() {

    const [activeAccordion , setActiveAccordion] = useState(null)
     
   const handleActiveAccordion = (id) => {
    setActiveAccordion((currentId) => {
        if(currentId === id){
            return null;
        }else{
            return id;
        }
    })
   }

    return(
        <div className="container">

            {languages.map((comp) =>{
                return(
                      <AccordionComponent 
                      key={comp.id} 
                      title={comp.title} 
                      description={comp.description}
                      isOpen = {comp.id === activeAccordion}
                      onAccordionToggle ={() => handleActiveAccordion(comp.id)}
                      />
                )
            })}
        </div>
           
    )
}