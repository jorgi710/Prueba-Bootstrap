import React from 'react'

const Description = ({title_description,text_description_price,description_price,description_price_messages}) => {
    return (
        <div>
            <h6 className="text-center mt-5"><b>{title_description}</b> <br/>{text_description_price}</h6>
            <h6 className="text-center mt-5">{description_price}<b>{description_price_messages}</b></h6>
            
        </div>
    )
}

export default Description
