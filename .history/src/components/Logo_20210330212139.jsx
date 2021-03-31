import React from 'react'

const Logo = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-center align-items-center p-4 ">
                <div className="p-6 bg-white p-5" ><h5 style={{fontSize:" medium  "}} >1 YEAR</h5></div>
                <div className="p-6 bg-primary p-5 " style={{borderRadius:" 0 15px 15px  "}}><h3>2 YEARS $5,799</h3></div>
            </div>
            <div><h5 className="float-right mb-5 text-primary"><b>limited time offer</b></h5></div>

            
        </>
    )
}

export default Logo
