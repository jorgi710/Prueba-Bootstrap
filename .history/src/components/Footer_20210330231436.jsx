import React from 'react'

const Footer = ({text_footer, parrafo_footer}) => {
    return (
        <>
          <button className="btn  btn-block text-left my-5 pl-3 shadow-lg  bg-body rounded" style={{background:"#3B4799"}}><b>{text_footer} </b><br/> {parrafo_footer}</button>  
        </>
    )
}

export default Footer
