import React from 'react'
import Section1_tile from './Section1_tile'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from '../../assets/coachsData.json'

interface Professor {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    category: string;
    department: string;
    email: string;
    courseThemes: string[];
}

const Section1 = () => {

    const professors: Professor[] = data.professors

    return (
        <div className='section1'>
            <h1>Rencontrez l'un de nos coachs</h1>
            <div className="carousel">
                <Carousel>
                    {professors.map(professor => (
                        <Section1_tile key={professor.id} professor={professor} />
                    ))}
                </Carousel>
            </div>
            
        </div>
    )
}

export default Section1