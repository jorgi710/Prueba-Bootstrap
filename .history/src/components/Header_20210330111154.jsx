import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const Header = ({title_header, parrafo_header,icon_header}) => {
    return (
        <>
            <div className="bg-primary">   
                <div>
                <h1 className="text-white">{title_header}</h1>
                <p>{parrafo_header}</p>         
                <FontAwesomeIcon icon={icon_header}/>          
                </div>         
                <div>
                    
                </div>         
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
