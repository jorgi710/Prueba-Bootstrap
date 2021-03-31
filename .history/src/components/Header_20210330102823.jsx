import React from 'react'

const Header = ({title_header, parrafo_header}) => {
    return (
        <>
            <div className="bg-primary">
                <h2>{title_header}</h3>
                <p>{parrafo_header}</p>
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
