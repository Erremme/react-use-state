

export default  function AccordionComponent({title, description, isOpen, onAccordionToggle}){


    return(<div className="accordion">
        <div className={`header-accordion d-flex  ${isOpen ? "open": ""}`} >
            <h1>{title}</h1>
            <div>
            <button onClick={onAccordionToggle}>{isOpen ? "-" : "+"}</button>
            </div>
        </div>
        {isOpen && <div className="paragraf-accordion">
            <p>{description}</p>
        </div>}
   </div>)
}