import React from 'react'
import Section1_tile from './Section1_tile'

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

import { Professor } from '../../interfaces/interface'

interface Section1Props {
    professors: Professor[]
}

const Section1: React.FC<Section1Props> = ({ professors }) => {

    // defining all the categories
    const categories = [
        {category: 'category1', countOfProfessorsInCategory:0, professorsInCategory:[] as Professor[]},
        {category: 'category2', countOfProfessorsInCategory:0, professorsInCategory:[] as Professor[]},
        {category: 'category3', countOfProfessorsInCategory:0, professorsInCategory:[] as Professor[]},
        {category: 'category4', countOfProfessorsInCategory:0, professorsInCategory:[] as Professor[]},
    ]

    // determining how many professors are there in each categories
    professors.forEach(professor =>{

        // here we are itering over all objects in professors variable, and then comparing with categories variable to find out how many professor to have each categores in there properties
        const category = categories.find(categoryElement => categoryElement.category === professor.category)
        
        // increasing category count when category is matching with category in professors variable + adding professor that match a categorie to an array categoryProfessor
        if (category) {
            // if there is a category that match, we add a +1 on the count of this category in categories variable
            category.countOfProfessorsInCategory++
            category.professorsInCategory.push(professor)
        }
    })

    // properties for react-multi-carousel
    const responsiveCarousel = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
      }

    return (
        <div className='section1'>
            <div className="carousel">
                <Carousel responsive={responsiveCarousel} containerClass='test'>
                    {categories.map(category => (
                        <Section1_tile
                            key={category.category}
                            categoryName={category.category}
                            countOfProfessorsInCategory={category.countOfProfessorsInCategory}
                            professors={category.professorsInCategory}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Section1