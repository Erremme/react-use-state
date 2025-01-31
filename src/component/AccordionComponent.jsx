import { useState } from "react"

export default  function AccordionComponent({ children ,title, description, type = "open"}){

    const [isOpen , setIsOpen] = useState(false)

    const toggleAccordion = () => {
        return(
            setIsOpen(!isOpen)
        )
    }

    return(<div className="accordion">
        <div className={`header-accordion d-flex  ${isOpen && type}`} >
            {children}
            <h1>{title}</h1>
            <div>
            <button onClick={toggleAccordion}>{isOpen ? "-" : "+"}</button>
            </div>
        </div>
        {isOpen && <div className="paragraf-accordion">
            <p>{description}</p>
        </div>}
   </div>)
}