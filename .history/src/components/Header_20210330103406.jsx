import React from 'react'

const Header = ({title_header, parrafo_header}) => {
    return (
        <>
            <div className="bg-primary">   
                <div>
                <h1 className="text-white">{title_header}</h1>
                <p>{parrafo_header}</p>                    
                </div>         
                <div>
                    <h3><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div></h3>
                </div>         
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
