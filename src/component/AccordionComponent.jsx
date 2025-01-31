export default  function AccordionComponent({title, description}){
    return(<div className="accordion">
        <div className="header-accordion d-flex">
            <h1>{title}</h1>
            <div>
            <button>+</button>
            </div>
        </div>
        <div className="paragraf-accordion">
            <p>{description}</p>
        </div>
   </div>)
}