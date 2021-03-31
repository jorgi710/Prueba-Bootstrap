import React from 'react'

const Footer = ({text_footer, parrafo_footer}) => {
    return (
        <>
          <button className="btn btn-primary btn-block ">{text_footer} <br/> {parrafo_footer}</button>  
        </>
    )
}

export default Footer
