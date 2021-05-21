import React from 'react'
import {Creator} from './Creator'
import '../css/MiddleWelcome.css';
import alexis_local from '../images/alexisImage.jpeg'
import michael_local from '../images/michaelImage.png'
import steven_local from '../images/stevenImage.jpeg'

interface CreatorType {
    name: string
    img: string
    contribution: string
}

export const MiddleWelcome = () => {
    let alexis:CreatorType = {
        name: "Alexis Sanchez",
        img: alexis_local,
        contribution: "etc.",
    }
    let steven:CreatorType = {
        name: "Steven Schreiber",
        img: steven_local,
        contribution: "etc.",
    }
    let michael:CreatorType = {
        name: "Michael Velasquez",
        img: michael_local,
        contribution: "etc.",
    }

    return (
        <section className="middleCard star">
            <section className="container text-dark">
                <h1 className="text-center"><strong>Who We Are</strong></h1>

                <Creator name={alexis.name} img={alexis.img} contribution={alexis.contribution} />
                <Creator name={steven.name} img={steven.img} contribution={steven.contribution} />
                <Creator name={michael.name} img={michael.img} contribution={michael.contribution} />
            </section>
        </section>
    )
}
