import React from 'react'

const Description = ({title_description,text_description_price}) => {
    return (
        <div>
            <h6 className="text-center mt-5"><b>{title_description}</b> <br/>{text_description_price}</h6>
        </div>
    )
}

export default Description
