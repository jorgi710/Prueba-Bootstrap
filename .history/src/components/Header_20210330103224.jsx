import React from 'react'

const Header = ({title_header, parrafo_header}) => {
    return (
        <>
            <div className="bg-primary">   
                <div>
                <h1 className="text-white">{title_header}</h1>
                <p>{parrafo_header}</p>                    
                </div>         

                <div></div>         
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
