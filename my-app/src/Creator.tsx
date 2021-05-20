import React from 'react'

interface CreatorType {
    name: string
    img: string
    roleTitle: string
    contribution: string
    tech: string
}

export const Creator: React.FC<CreatorType> = ({name, img, roleTitle, contribution, tech}: CreatorType) => {

    return (
        <div className="text-center">
            {name}
            {img}
            {roleTitle}
            {contribution}
            {tech}
        </div>
    )
}
