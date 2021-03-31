import React from 'react'

const Description = ({title_description,text_description_price,description_price,description_price_messages}) => {
    return (
        <div >
            <h6 className="text-center justify-content-center mt-5"><b>{title_description}</b> <br/>{text_description_price}</h6>
            <p className=" mt-5 text-center" style={{fontSize:"small"}}>{description_price}<b>{description_price_messages}</b></p>
            
        </div>
    )
}

export default Description
