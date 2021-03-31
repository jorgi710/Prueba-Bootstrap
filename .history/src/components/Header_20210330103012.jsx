import React from 'react'

const Header = ({title_header, parrafo_header}) => {
    return (
        <>
            <div className="bg-blue-800">
                <h1 className="text-white">{title_header}</h1>
                <p>{parrafo_header}</p>
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
