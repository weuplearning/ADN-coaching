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

    const categories = [
        {categoryName: 'category1', count:0},
        {categoryName: 'category2', count:0},
        {categoryName: 'category3', count:0},
    ]

    // determining how many professors are there in each categories
    professors.forEach(professor =>{

        // here we are itering over all objects in professors variable, and then comparing with categories variable to find out how many professor to have each categores in there properties
        const category = categories.find(categoryElement => categoryElement.categoryName === professor.category)
        
        // if there is a categories that match, we add a +1 on the count of this category in categories variable
        if (category) {
            category.count++
        }
    })

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