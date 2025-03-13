    return (
        <>
        <form action="" name="calc" className="calculator">
        <input id="input" type="text" className="value" value={action ? action : text} readOnly name="txt"></input>
        {buttons.map(button => 
            <span key={button.id} className={button.class || button.title} button={button.title} onClick={() => buttonHanler(button.title)}><i>{button.title}</i></span>)}     
        </form>
        </>
    )
}