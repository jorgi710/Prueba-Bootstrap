import React from 'react'

const Header = ({title}) => {
    return (
        <>
            <div className="bg-primary">
                <h3>{title}</h3>
                <p></p>
            </div>
            <div>text</div>
            <div>img</div>
            <div>footer</div>
        </>
    )
}

export default Header
