import React from 'react'

interface CreatorType {
    name: string
    img: string
    contribution: string
}

export const Creator: React.FC<CreatorType> = ({name, img, contribution}: CreatorType) => {

    return (
        <>
            <figure className="row align-items-center star">
                <div className="col">
                    <img src={img} alt="Creator's Image" className="circular--square img"/>
                </div>

                <figcaption className="col">
                    <h2> {name} </h2>
                    <small> CSin3 </small>
                </figcaption>

                <figcaption className="col">
                    <h2> Full-Stack Developer </h2> 
                    <p className="contribution"> {contribution} </p>
                </figcaption>
            </figure>
        </>
    )
}
