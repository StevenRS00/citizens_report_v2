import React from 'react'
import {Creator} from './Creator'

interface CreatorType {
    name: string
    img: string
    roleTitle: string
    contribution: string
    tech: string
}

export const MiddleWelcome = () => {
    let alexis:CreatorType = {
        name: "Alexis Sanchez",
        img: "alexis_local",
        roleTitle: "Full-Stack",
        contribution: "etc.",
        tech: "etc."
    }
    let steven:CreatorType = {
        name: "Steven Schreiber",
        img: "steven_local",
        roleTitle: "Full-Stack",
        contribution: "etc.",
        tech: "etc."
    }
    let michael:CreatorType = {
        name: "Michael Velasquez",
        img: "michael_local",
        roleTitle: "Full-Stack",
        contribution: "etc.",
        tech: "etc."
    }

    return (
        <div className="">
            <h1 className="text-center"><strong>Who We Are</strong></h1>

            <Creator name={alexis.name} img={alexis.img} roleTitle={alexis.roleTitle} contribution={alexis.contribution} tech={alexis.tech}/>
            <Creator name={steven.name} img={steven.img} roleTitle={steven.roleTitle} contribution={steven.contribution} tech={steven.tech}/>
            <Creator name={michael.name} img={michael.img} roleTitle={michael.roleTitle} contribution={michael.contribution} tech={michael.tech}/>
        </div>
    )
}
